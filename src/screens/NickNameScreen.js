import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import nickNameScreenStyle from '../styles/nickNameScreenStyle';

const NickNameScreen = () => {
  const [nickName, setNickName] = useState('');
  const navigation = useNavigation();

  const handleNickNameChnage = text => {
    setNickName(text);
  };

  const isNickNameValid = nickName.length >= 2;

  const handleNextPress = () => {
    if (isNickNameValid) {
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
          onChangeText={handleNickNameChnage}
          value={nickName}
        />
        <Text style={Common.text}>
          두 글자 이상 입력하세요{'\n'}
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
