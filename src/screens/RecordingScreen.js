import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {RecordingContext} from '../services/RecordingContext';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import recordScreenStyle from '../styles/recordScreenStyle';
import recordingScreenStyle from '../styles/recordingScreenStyle';

const audioRecorderPlayer = new AudioRecorderPlayer();

const images = [
  require('../assets/random/mountain.jpg'),
  require('../assets/random/nature.jpg'),
  require('../assets/random/river.jpg'),
  require('../assets/random/sea.jpg'),
  require('../assets/random/space.jpg'),
  require('../assets/random/temple.jpg'),
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const RecordingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {startImmediately} = route.params || {};
  const {addRecording} = useContext(RecordingContext);
  const [timer, setTimer] = useState(3);
  const [isRecording, setIsRecording] = useState(false);
  const [iconName, setIconName] = useState('stop');
  const [postBtnDisabled, setPostBtnDisabled] = useState(true);
  const [randomImage, setRandomImage] = useState(getRandomImage());
  const [audioUri, setAudioUri] = useState(null);

  const handleUploadMain = () => {
    addRecording({userName: 'RealVoice', audioUri});
    navigation.navigate('UploadMain');
  };

  useEffect(() => {
    let intervalId;
    if (isRecording && timer > 0) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    if (timer === 0) {
      setIsRecording(false);
      setIconName('play-arrow');
      setPostBtnDisabled(false);
      audioRecorderPlayer.stopRecorder().then(result => {
        setAudioUri(result);
      });
    }

    return () => clearInterval(intervalId);
  }, [isRecording, timer]);

  useEffect(() => {
    if (startImmediately) {
      handleToggleRecording();
    }
  }, [startImmediately]); // eslint-disable-line

  const handleToggleRecording = async () => {
    if (isRecording) {
      await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
    } else {
      if (timer === 0) {
        setTimer(3);
        setPostBtnDisabled(true);
      }
      const result = await audioRecorderPlayer.startRecorder();
      setAudioUri(result);
      audioRecorderPlayer.addRecordBackListener(e => {
        console.log(e);
      });
    }
    setIsRecording(!isRecording);
    setIconName(isRecording ? 'pause' : 'stop');
  };

  const handleDeleteFriend = () => {
    Alert.alert(
      '녹음 취소',
      '정말로 녹음을 취소하시겠습니까?',
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => {
            setTimer(3);
            setIsRecording(false);
            setIconName('mic');
            setPostBtnDisabled(true);
            setAudioUri(null);
            console.log('녹음을 삭제했습니다.');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={Common.container}>
      <View>
        <View style={mainScreenStyle.header}>
          <View style={addFriendsScreenStyle.iconContainer}>
            <Icon name="group" style={addFriendsScreenStyle.iconNone} />
          </View>
          <Text style={addFriendsScreenStyle.iconNone}>RealVoice</Text>
          <TouchableOpacity
            style={mainScreenStyle.iconContainer}
            onPress={handleDeleteFriend}>
            <Icon name="cancel" style={mainScreenStyle.icon} />
          </TouchableOpacity>
        </View>
        <View style={recordScreenStyle.container}>
          <Image source={randomImage} style={recordScreenStyle.image} />
          <View style={recordScreenStyle.timerContainer}>
            <Text style={recordScreenStyle.timer}>
              {timer < 10 ? `00:0${timer}` : `00:0${timer}`}
            </Text>
            <TouchableOpacity
              style={recordScreenStyle.timerBtn}
              onPress={handleToggleRecording}>
              <Icon name={iconName} style={recordScreenStyle.icon} />
            </TouchableOpacity>
            <Text style={recordScreenStyle.timerText}>
              다시 듣고 싶으면 버튼을 눌러주세요.
            </Text>
          </View>
          <TouchableOpacity
            style={[
              recordingScreenStyle.postBtnContainer,
              postBtnDisabled && {opacity: 0.5},
            ]}
            onPress={handleUploadMain}
            disabled={postBtnDisabled}>
            <Text style={recordingScreenStyle.postBtnText}>
              RealVoice 포스트
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RecordingScreen;
