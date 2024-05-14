import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import editProfileScreenStyle from '../styles/editProfileScreenStyle';
import worldTimeScreenStyle from '../styles/worldTimeScreenStyle';
import otherSettingScreenStyle from '../styles/otherSettingScreenStyle';

const OtherSettingScreen = () => {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleEditProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>다른 설정들</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={worldTimeScreenStyle.EditBtnContainer}>
        <View style={editProfileScreenStyle.actionContainer}>
          <TouchableOpacity style={editProfileScreenStyle.actionBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon name="cached" style={editProfileScreenStyle.iconCalendar} />
            </View>
            <Text style={editProfileScreenStyle.nickname}>캐시 지우기</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={otherSettingScreenStyle.logoutContainer}>
          <Text style={editProfileScreenStyle.logoutText}>계정 삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtherSettingScreen;
