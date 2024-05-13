import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import profileEditDetailScreenStyle from '../styles/profileEditDetailScreenStyle';
import changeProfileScreenStyle from '../styles/changeProfileScreenStyle';

const ChangeProfileScreen = () => {
  const navigation = useNavigation();
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();

  const handleProfileEditDetail = () => {
    navigation.navigate('ProfileEditDetail');
  };

  const handleUpdateProfilePhoto = () => {
    Alert.alert(
      '프로필 사진 변경',
      '프로필 사진은 모든 사람이 볼 수 있고, 회원님의 친구들이 회원님을 더 쉽게 찾을 수 있게 해줍니다.',
      [
        {text: '갤러리', onPress: () => console.log('갤러리 선택')},
        {text: '카메라', onPress: () => console.log('카메라 선택')},
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleProfileEditDetail}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>프로필 수정</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleUpdateProfilePhoto}>
        <View style={changeProfileScreenStyle.buttonContainer}>
          <View style={changeProfileScreenStyle.circle}>
            <Text style={changeProfileScreenStyle.button}>{firstLetter}</Text>
          </View>
        </View>
        <Icon name="camera" style={changeProfileScreenStyle.iconCamera} />
        <View style={changeProfileScreenStyle.bottomTextContainer}>
          <View style={profileEditDetailScreenStyle.textContainer}>
            <Text style={profileEditDetailScreenStyle.bottomText}>
              프로필 사진 설정
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={profileEditDetailScreenStyle.InformationContainer}>
        {/* 닉네임 */}
        <View style={profileEditDetailScreenStyle.nickname}>
          <Text style={profileEditDetailScreenStyle.userName}>이름</Text>
          <Text style={profileEditDetailScreenStyle.userNameInput}>
            RealVoice
          </Text>
        </View>
        {/* 사용자 이름 */}
        <View style={profileEditDetailScreenStyle.nickname}>
          <Text style={profileEditDetailScreenStyle.userName}>사용자 이름</Text>
          <Text style={profileEditDetailScreenStyle.userNameInput}>
            realCompany
          </Text>
        </View>
        {/* 소개 */}
        <View style={profileEditDetailScreenStyle.nickname}>
          <Text style={profileEditDetailScreenStyle.userName}>소개</Text>
          <Text style={profileEditDetailScreenStyle.userNameInput}>
            당신의 진실한 목소리를 들려주세요.
          </Text>
        </View>
        {/* 위치 */}
        <View style={profileEditDetailScreenStyle.nickname}>
          <Text style={profileEditDetailScreenStyle.userName}>위치</Text>
          <Text style={profileEditDetailScreenStyle.userNameInput}>KOREA</Text>
        </View>
        <TouchableOpacity
          style={changeProfileScreenStyle.saveBtnContainer}
          onPress={handleProfileEditDetail}>
          <Text style={profileEditDetailScreenStyle.saveBtnText}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeProfileScreen;
