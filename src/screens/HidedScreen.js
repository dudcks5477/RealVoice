import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import alertSettingScreenStyle from '../styles/alertSettingScreenStyle';
import privcayScreenStyle from '../styles/privacyScreenStyle';
import BlockedScreenStyle from '../styles/blockedScreenStyle';

const HidedScreen = () => {
  const navigation = useNavigation();

  const handlePrivacy = () => {
    navigation.navigate('Privacy');
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handlePrivacy}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>숨겨진 사용자</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={privcayScreenStyle.InformationContainer}>
        <TouchableOpacity style={BlockedScreenStyle.slideContainer}>
          <View style={alertSettingScreenStyle.iconTextContainer}>
            <Text style={BlockedScreenStyle.alternateText}>
              숨겨진 사용자가 없습니다.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HidedScreen;
