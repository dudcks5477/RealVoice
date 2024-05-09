import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';

const MainScreen = () => {
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();
  const navigation = useNavigation();

  const handleAddFriends = () => {
    navigation.navigate('AddFriends');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleRecord = () => {
    navigation.navigate('Record');
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

      {/* 랜덤 이미지 발동 */}
      <View style={mainScreenStyle.mainContainer}>
        <Image
          source={require('../assets/sample.jpg')}
          style={mainScreenStyle.image}
        />
        <View style={mainScreenStyle.textContainer}>
          {/* 닉네임에 따라 RealVoice가 닉네임으로 바뀜 */}
          <Text style={mainScreenStyle.imageText}>헤이 사용자님</Text>
          <Text style={mainScreenStyle.subImageText}>
            준비됐어요? RealVoice 할 시간입니다
          </Text>
          <TouchableOpacity
            style={mainScreenStyle.voiceBtn}
            onPress={handleRecord}>
            <Text style={mainScreenStyle.buttonText}>
              RealVoice를 포스트하세요.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
