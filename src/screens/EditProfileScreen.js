import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import editProfileScreenStyle from '../styles/editProfileScreenStyle';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();

  const handleProfile = () => {
    navigation.navigate('Profile');
  };
  const handleProfileEditDetail = () => {
    navigation.navigate('ProfileEditDetail');
  };
  const handleMemorySetting = () => {
    navigation.navigate('MemorySetting');
  };
  const handleAlertSetting = () => {
    navigation.navigate('AlertSetting');
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>사용자명</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={editProfileScreenStyle.EditBtnContainer}>
        <TouchableOpacity
          style={editProfileScreenStyle.profileBtn}
          onPress={handleProfileEditDetail}>
          <View style={mainScreenStyle.buttonContainer}>
            <View style={mainScreenStyle.circle}>
              <Text style={mainScreenStyle.button}>{firstLetter}</Text>
            </View>
          </View>
          <View>
            <Text style={editProfileScreenStyle.nickname}>닉네임</Text>
            <Text style={editProfileScreenStyle.username}>사용자이름</Text>
          </View>
        </TouchableOpacity>
        {/* 기능 */}
        <View style={editProfileScreenStyle.actionContainer}>
          <Text style={editProfileScreenStyle.containerText}>기능</Text>
          <TouchableOpacity
            style={editProfileScreenStyle.actionBtn}
            onPress={handleMemorySetting}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="calendar-month"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>추억</Text>
          </TouchableOpacity>
        </View>
        {/* 설정 */}
        <View style={editProfileScreenStyle.actionContainer}>
          <Text style={editProfileScreenStyle.containerText}>설정</Text>
          <TouchableOpacity
            style={editProfileScreenStyle.settingAlertBtn}
            onPress={handleAlertSetting}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="add-alert"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>알림</Text>
          </TouchableOpacity>
          <TouchableOpacity style={editProfileScreenStyle.settingBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="security"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>개인정보 보호</Text>
          </TouchableOpacity>
          <TouchableOpacity style={editProfileScreenStyle.settingBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="access-time"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>시간대</Text>
          </TouchableOpacity>
          <TouchableOpacity style={editProfileScreenStyle.settingsOtherBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="settings"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>다른 설정들</Text>
          </TouchableOpacity>
        </View>
        {/* 정보 */}
        <View style={editProfileScreenStyle.actionContainer}>
          <Text style={editProfileScreenStyle.containerText}>정보</Text>
          <TouchableOpacity style={editProfileScreenStyle.settingAlertBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon name="share" style={editProfileScreenStyle.iconCalendar} />
            </View>
            <Text style={editProfileScreenStyle.nickname}>
              RealVoice 공유하기
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={editProfileScreenStyle.settingBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="star-outline"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>
              RealVoice 평가하기
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={editProfileScreenStyle.settingBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="help-outline"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>도움 받기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={editProfileScreenStyle.settingsOtherBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="error-outline"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>정보</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={editProfileScreenStyle.logoutContainer}>
          <Text style={editProfileScreenStyle.logoutText}>로그아웃</Text>
        </TouchableOpacity>
        <Text style={editProfileScreenStyle.version}>Version 0.1</Text>
      </View>
    </View>
  );
};

export default EditProfileScreen;
