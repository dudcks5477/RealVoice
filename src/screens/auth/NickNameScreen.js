import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Common from '../../styles/common';
import nickNameScreenStyle from '../../styles/nickNameScreenStyle';

const NickNameScreen = ({userData, setUserData}) => {
  const [nickName, setNickName] = useState(userData.nickName);
  const navigation = useNavigation();

  const handleNickNameChange = text => {
    if (isEnglish.test(text) || text === '') {
      setNickName(text);
      setUserData(prevState => ({
        ...prevState,
        nickName: text,
      }));
    } else {
      Alert.alert('소문자로만 입력해주세요.');
    }
  };

  const isNickNameValid = nickName.length >= 2;
  const isEnglish = /^[a-z]+$/;

  const handleNextPress = () => {
    // axios
    //   .post('http://10.0.2.2:8080/user/voice/register', {
    //     nickName,
    //   })
    //   .then(response => {
    //     console.log('닉네임이 성공적으로 저장되었습니다.');
    //     navigation.navigate('VoicePermission');
    //   })
    //   .catch(error => {
    //     console.error('닉네임 저장 중 에러 발생:', error);
    //     Alert.alert('알파벳 두 개 이상 입력해주세요.');
    //   });
    navigation.navigate('VoicePermission');
  };

  return (
    <View style={Common.container}>
      <Text style={Common.headerText}>당신을 뭐라 부를까요?</Text>
      <View style={nickNameScreenStyle.inputContainer}>
        <TextInput
          style={nickNameScreenStyle.input}
          placeholder="Real Voice"
          onChangeText={handleNickNameChange}
          value={nickName}
        />
        <Text style={Common.text}>
          두 글자 이상 영소문자를 입력하세요{'\n'}
          언제든지 변경할 수 있습니다
        </Text>
      </View>
      <View style={nickNameScreenStyle.nextBtnContainer}>
        <TouchableOpacity
          style={[
            nickNameScreenStyle.nextBtn,
            {opacity: isNickNameValid ? 1 : 0.5},
          ]}
          onPress={handleNextPress}
          disabled={!isNickNameValid}>
          <Text style={nickNameScreenStyle.nextBtnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NickNameScreen;
