import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';

import HeaderMain from '../components/HeaderMain';
import RandomImageSection from '../components/RandomImageSection';

const images = [
  require('../assets/random/mountain.jpg'),
  require('../assets/random/nature.jpg'),
  require('../assets/random/river.jpg'),
  require('../assets/random/sea.jpg'),
  require('../assets/random/space.jpg'),
  require('../assets/random/temple.jpg'),
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const MainScreen = () => {
  const [userName, setUserName] = useState('');
  const [randomImage, setRandomImage] = useState(getRandomImage());
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

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleRecord = () => {
    navigation.navigate('Record');
  };

  return (
    <View style={Common.container}>
      <HeaderMain firstLetter={firstLetter} handleProfile={handleProfile} />
      <RandomImageSection
        randomImage={randomImage}
        userName={userName}
        handleRecord={handleRecord}
      />
    </View>
  );
};

export default MainScreen;
