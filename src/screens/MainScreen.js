import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import Common from '../styles/common';

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

const MainScreen = ({userData}) => {
  const [userName, setUserName] = useState('realvoice');
  const [randomImage, setRandomImage] = useState(getRandomImage());
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserInfo = async phoneNumber => {
      try {
        const response = await axios.get(
          `http://10.0.2.2:8080/user/voice/${phoneNumber}`,
        );
        console.log('User info fetched successfully:', response.data);
        setUserName(response.data.nickName);
      } catch (error) {
        console.error('사용자 정보 가져오기 오류:', error);
      }
    };
    if (userData.phoneNumber) {
      fetchUserInfo(userData.phoneNumber);
    }
  }, [userData.phoneNumber]);

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
