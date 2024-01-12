import React from 'react';
import {View, Text} from 'react-native';
import CommonStyles from '../styles/CommonStyles';

const NumberScreen = () => {
  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>전화번호가 어떻게 되세요?</Text>
    </View>
  );
};

export default NumberScreen;
