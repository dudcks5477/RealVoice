import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import uploadMainScreenStyle from '../styles/uploadMainScreenStyle';

const UploadMainScreen = () => {
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();
  const navigation = useNavigation();

  const [isPlaying, setIsPlaying] = useState(false);

  const handleAddFriends = () => {
    navigation.navigate('AddFriends');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setIsPlaying(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

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
      <ScrollView style={{flex: 1}}>
        <View style={uploadMainScreenStyle.uploadedContainer}>
          <View style={uploadMainScreenStyle.voiceContainer}>
            <TouchableOpacity
              style={mainScreenStyle.buttonContainer}
              onPress={handleUserProfile}>
              <View style={uploadMainScreenStyle.circle}>
                <Text style={uploadMainScreenStyle.button}>{firstLetter}</Text>
              </View>
            </TouchableOpacity>
            <Text style={uploadMainScreenStyle.userName}>RealVoice</Text>
            <TouchableOpacity
              style={uploadMainScreenStyle.timerBtn}
              onPress={togglePlayPause}>
              <Icon
                name={isPlaying ? 'pause' : 'play-arrow'}
                style={uploadMainScreenStyle.icon}
              />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#fff'}}>보이스를 남긴 사람 + 3</Text>
        </View>
        <View style={uploadMainScreenStyle.uploadedContainer}>
          <View style={uploadMainScreenStyle.voiceContainer}>
            <TouchableOpacity
              style={mainScreenStyle.buttonContainer}
              onPress={handleUserProfile}>
              <View style={uploadMainScreenStyle.circle}>
                <Text style={uploadMainScreenStyle.button}>{firstLetter}</Text>
              </View>
            </TouchableOpacity>
            <Text style={uploadMainScreenStyle.userName}>RealVoice</Text>
            <TouchableOpacity
              style={uploadMainScreenStyle.timerBtn}
              onPress={togglePlayPause}>
              <Icon name="play-arrow" style={uploadMainScreenStyle.icon} />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#fff'}}>보이스를 남긴 사람 + 3</Text>
        </View>
        <View style={uploadMainScreenStyle.uploadedContainer}>
          <View style={uploadMainScreenStyle.voiceContainer}>
            <TouchableOpacity
              style={mainScreenStyle.buttonContainer}
              onPress={handleUserProfile}>
              <View style={uploadMainScreenStyle.circle}>
                <Text style={uploadMainScreenStyle.button}>{firstLetter}</Text>
              </View>
            </TouchableOpacity>
            <Text style={uploadMainScreenStyle.userName}>RealVoice</Text>
            <TouchableOpacity
              style={uploadMainScreenStyle.timerBtn}
              onPress={togglePlayPause}>
              <Icon name="play-arrow" style={uploadMainScreenStyle.icon} />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#fff'}}>보이스를 남긴 사람 + 3</Text>
        </View>
        <View style={uploadMainScreenStyle.uploadedContainer}>
          <View style={uploadMainScreenStyle.voiceContainer}>
            <TouchableOpacity
              style={mainScreenStyle.buttonContainer}
              onPress={handleUserProfile}>
              <View style={uploadMainScreenStyle.circle}>
                <Text style={uploadMainScreenStyle.button}>{firstLetter}</Text>
              </View>
            </TouchableOpacity>
            <Text style={uploadMainScreenStyle.userName}>RealVoice</Text>
            <TouchableOpacity
              style={uploadMainScreenStyle.timerBtn}
              onPress={togglePlayPause}>
              <Icon name="play-arrow" style={uploadMainScreenStyle.icon} />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#fff'}}>보이스를 남긴 사람 + 3</Text>
        </View>
        <View style={uploadMainScreenStyle.uploadedContainer}>
          <View style={uploadMainScreenStyle.voiceContainer}>
            <TouchableOpacity
              style={mainScreenStyle.buttonContainer}
              onPress={handleUserProfile}>
              <View style={uploadMainScreenStyle.circle}>
                <Text style={uploadMainScreenStyle.button}>{firstLetter}</Text>
              </View>
            </TouchableOpacity>
            <Text style={uploadMainScreenStyle.userName}>RealVoice</Text>
            <TouchableOpacity
              style={uploadMainScreenStyle.timerBtn}
              onPress={togglePlayPause}>
              <Icon name="play-arrow" style={uploadMainScreenStyle.icon} />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#fff'}}>보이스를 남긴 사람 + 3</Text>
        </View>
        <View style={uploadMainScreenStyle.uploadedContainer}>
          <View style={uploadMainScreenStyle.voiceContainer}>
            <TouchableOpacity
              style={mainScreenStyle.buttonContainer}
              onPress={handleUserProfile}>
              <View style={uploadMainScreenStyle.circle}>
                <Text style={uploadMainScreenStyle.button}>{firstLetter}</Text>
              </View>
            </TouchableOpacity>
            <Text style={uploadMainScreenStyle.userName}>RealVoice</Text>
            <TouchableOpacity
              style={uploadMainScreenStyle.timerBtn}
              onPress={togglePlayPause}>
              <Icon name="play-arrow" style={uploadMainScreenStyle.icon} />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#fff'}}>보이스를 남긴 사람 + 3</Text>
        </View>
        <View style={uploadMainScreenStyle.uploadedContainer}>
          <View style={uploadMainScreenStyle.voiceContainer}>
            <TouchableOpacity
              style={mainScreenStyle.buttonContainer}
              onPress={handleUserProfile}>
              <View style={uploadMainScreenStyle.circle}>
                <Text style={uploadMainScreenStyle.button}>{firstLetter}</Text>
              </View>
            </TouchableOpacity>
            <Text style={uploadMainScreenStyle.userName}>RealVoice</Text>
            <TouchableOpacity
              style={uploadMainScreenStyle.timerBtn}
              onPress={togglePlayPause}>
              <Icon name="play-arrow" style={uploadMainScreenStyle.icon} />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#fff'}}>보이스를 남긴 사람 + 3</Text>
        </View>
        <View style={uploadMainScreenStyle.uploadedContainer}>
          <View style={uploadMainScreenStyle.voiceContainer}>
            <TouchableOpacity
              style={mainScreenStyle.buttonContainer}
              onPress={handleUserProfile}>
              <View style={uploadMainScreenStyle.circle}>
                <Text style={uploadMainScreenStyle.button}>{firstLetter}</Text>
              </View>
            </TouchableOpacity>
            <Text style={uploadMainScreenStyle.userName}>RealVoice</Text>
            <TouchableOpacity
              style={uploadMainScreenStyle.timerBtn}
              onPress={togglePlayPause}>
              <Icon name="play-arrow" style={uploadMainScreenStyle.icon} />
            </TouchableOpacity>
          </View>
          <Text style={{color: '#fff'}}>보이스를 남긴 사람 + 3</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default UploadMainScreen;
