import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';

const MainScreen = () => {
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();

  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8081/');
  //       setUserName(response.data.name);
  //     } catch (error) {
  //       console.error('사용자 정보 가져오기 오류:', error);
  //       Alert.alert('오류', '사용자 정보를 가져오는데 문제가 발생했습니다.');
  //     }
  //   };

  //   fetchUserInfo();
  // }, []);

  const firstLetter = userName.charAt(0).toUpperCase();

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
          <Text style={mainScreenStyle.imageText}>헤이 {userName}님</Text>
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
