import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';

const UploadMainScreen = () => {
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();
  const navigation = useNavigation();

  const handleAddFriends = () => {
    navigation.navigate('AddFriends');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleAddFriends}>
          <Icon name="group" style={mainScreenStyle.icon} />
        </TouchableOpacity>
        <Text style={mainScreenStyle.headerText}>RealVoice</Text>

        {/* 사용자 정보 필요함 */}
        <TouchableOpacity
          style={mainScreenStyle.buttonContainer}
          onPress={handleProfile}>
          <View style={mainScreenStyle.circle}>
            <Text style={mainScreenStyle.button}>{firstLetter}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadMainScreen;
