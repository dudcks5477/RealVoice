import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import profileEditDetailScreenStyle from '../styles/profileEditDetailScreenStyle';

const ProfileEditDetailScreen = () => {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const handleChangeProfile = () => {
    navigation.navigate('ChangeProfile');
  };

  return (
    <View style={Common.container}>
      <Image
        source={require('../assets/sample.jpg')}
        style={profileScreenStyle.image}
      />
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleEditProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>프로필 수정</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={profileEditDetailScreenStyle.bottomTextContainer}>
        <TouchableOpacity
          style={profileEditDetailScreenStyle.textContainer}
          onPress={handleChangeProfile}>
          <Icon name="camera" style={profileEditDetailScreenStyle.iconCamera} />
          <Text style={profileEditDetailScreenStyle.bottomText}>
            프로필 사진 업데이트
          </Text>
        </TouchableOpacity>
      </View>
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
          style={profileEditDetailScreenStyle.saveBtnContainer}
          onPress={handleEditProfile}>
          <Text style={profileEditDetailScreenStyle.saveBtnText}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileEditDetailScreen;
