import React from 'react';
import {View, Text} from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import NumberInput from './NumberInput';

const NumberScreen = () => {
  const handlePhoneNumberSubmit = phoneNumber => {
    // 입력된 전화번호를 처리하는 로직을 여기에 추가
    console.log('전화번호:', phoneNumber);
  };
  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>전화번호가 어떻게 되세요?</Text>
      <NumberInput onSubmit={handlePhoneNumberSubmit} />
    </View>
  );
};

export default NumberScreen;
