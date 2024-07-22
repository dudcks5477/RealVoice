import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '@env';
import Common from '../../styles/common';
import nickNameScreenStyle from '../../styles/nickNameScreenStyle';

const NickNameScreen = ({userData, setUserData}) => {
  const [nickName, setNickName] = useState(userData.nickName);
  const [isChecking, setIsChecking] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const navigation = useNavigation();

  const handleNickNameChange = async text => {
    if (isEnglish.test(text) || text === '') {
      setNickName(text);
      setUserData(prevState => ({
        ...prevState,
        nickName: text,
      }));

      if (text.length >= 2) {
        setIsChecking(true);
        // try {
        //   const response = await axios.post(
        //     `${API_URL}/user/voice/register`,
        //     {nickName: text},
        //   );
        //   setIsDuplicate(response.date.isDuplicate);
        // } catch (error) {
        //   console.error('닉네임 중복 확인 에러:', error);
        // } finally {
        //   setIsChecking(false);
        // }
      }
    } else {
      Alert.alert('소문자로만 입력해주세요.');
    }
  };

  const isNickNameValid = nickName.length >= 2 && !isDuplicate;
  const isEnglish = /^[a-z]+$/;

  const handleNextPress = () => {
    if (isDuplicate) {
      Alert.alert('닉네임이 중복됩니다. 다른 닉네임을 입력해주세요.');
    } else {
      navigation.navigate('VoicePermission');
    }
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
        {/* {isDuplicate && (
          <Text style={{color: 'red'}}>이미 사용 중인 닉네임입니다.</Text>
        )} */}
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
