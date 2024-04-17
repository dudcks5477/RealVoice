import React from 'react';
import {View, Text} from 'react-native';
import Common from '../styles/common';

const PhoneVerificationScreen = () => {
  return (
    <View style={Common.container}>
      <Text style={Common.headerText}>
        방금 문자 메시지로 보내드린{'\n'}코드를 입력하세요
      </Text>
    </View>
  );
};

export default PhoneVerificationScreen;
