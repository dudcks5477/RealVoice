import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Alert} from 'react-native';
import Common from '../styles/common';
import {useNavigation} from '@react-navigation/native';

import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import requiredScreenStyle from '../styles/requiredScreenStyle';
import Header from '../components/Header';
import FriendDeleteItem from '../components/FriendDeleteItem';

const SendRequestFriendScreen = () => {
  const navigation = useNavigation();
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();
  const [friends, setFriends] = useState([
    'Thor',
    'Mighty Thor',
    'Loki',
    'Odin',
    'Erik Selvig',
    'Sif',
    'Hogun',
    'Volstagg',
    'Fandral',
    'Heimdall',
    'Destroyer',
    'Darcy Lewis',
    'Frigga',
    'Laufey',
    'Hawkeye',
  ]);

  const handleMain = () => {
    navigation.navigate('Main');
  };

  const handleUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  const handleRequired = () => {
    navigation.navigate('Required');
  };

  const handleDeleteFriend = friendName => {
    const updateFriends = friends.filter(friend => friend !== friendName);
    setFriends(updateFriends);
  };

  return (
    <View style={Common.container}>
      <Header onMain={handleMain} />
      <ScrollView style={{flex: 1, marginTop: 60}}>
        <View style={addFriendsScreenStyle.recommand}>
          <View style={requiredScreenStyle.recommandContainer}>
            <TouchableOpacity onPress={handleRequired}>
              <Text style={addFriendsScreenStyle.recommandText}>
                &lt; 친구요청
              </Text>
            </TouchableOpacity>
          </View>
          {friends.map((friendName, index) => (
            <FriendDeleteItem
              key={index}
              friendName={friendName}
              onDelete={handleDeleteFriend}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SendRequestFriendScreen;
