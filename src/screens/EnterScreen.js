import React from 'react';
import {View, Text} from 'react-native';
import EnterScreenStyles from '../styles/EnterScreenStyles';

const EnterScreen = () => {
  return (
    <View style={EnterScreenStyles.container}>
      <Text style={EnterScreenStyles.text}>Real</Text>
      <Text style={EnterScreenStyles.text}>Voice</Text>
    </View>
  );
};

export default EnterScreen;
