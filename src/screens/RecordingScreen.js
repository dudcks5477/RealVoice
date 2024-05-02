import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import recordScreenStyle from '../styles/recordScreenStyle';
import recordingScreenStyle from '../styles/recordingScreenStyle';

const RecordingScreen = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(3);
  const [isRecording, setIsRecording] = useState(false);
  const [iconName, setIconName] = useState('pause');
  const [postBtnDisabled, setPostBtnDisabled] = useState(true);

  const handleRecord = () => {
    navigation.navigate('Record');
  };

  const handleUploadMain = () => {
    navigation.navigate('UploadMain');
  };

  useEffect(() => {
    if (timer === 0) {
      setIsRecording(false);
      setIconName('play-arrow');
      setPostBtnDisabled(false);
    }

    const interValId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interValId);
  }, [timer]);

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (timer === 0) {
      setIconName('play-arrow');
    } else {
      setIconName(prevIcon => (prevIcon === 'pause' ? 'play-arrow' : 'pause'));
    }
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
          onPress: handleRecord,
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
          <Image
            source={require('../assets/sample.jpg')}
            style={recordScreenStyle.image}
          />
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
