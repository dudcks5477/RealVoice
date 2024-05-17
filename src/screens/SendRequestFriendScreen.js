import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Alert} from 'react-native';
import Common from '../styles/common';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';
import requiredScreenStyle from '../styles/requiredScreenStyle';
import Header from '../components/Header';

const SendRequestFriendScreen = () => {
  const navigation = useNavigation();
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();

  const handleMain = () => {
    navigation.navigate('Main');
  };

  const handleUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  const handleRequired = () => {
    navigation.navigate('Required');
  };

  const handleDeleteFriend = () => {
    Alert.alert(
      '친구 삭제',
      '정말로 친구를 삭제하시겠습니까?',
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => {
            console.log('친구 삭제됨');
          },
        },
      ],
      {cancelable: false},
    );
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
          <View style={addFriendsScreenStyle.addFriendContainer}>
            <View style={mainScreenStyle.buttonContainer}>
              <TouchableOpacity
                style={addFriendsScreenStyle.circle}
                onPress={handleUserProfile}>
                <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
              </TouchableOpacity>
              <View style={addFriendsScreenStyle.nickNameContainer}>
                <Text style={addFriendsScreenStyle.Invited}>RealVoice1</Text>
                <Text style={addFriendsScreenStyle.nickName}>realvoice1</Text>
              </View>
            </View>
            <View style={addFriendsScreenStyle.addCancelBtn}>
              <TouchableOpacity
                style={addFriendsScreenStyle.cancelBtn}
                onPress={handleDeleteFriend}>
                <Icon name="cancel" style={addFriendsScreenStyle.cancelIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={addFriendsScreenStyle.addFriendContainer}>
            <View style={mainScreenStyle.buttonContainer}>
              <TouchableOpacity
                style={addFriendsScreenStyle.circle}
                onPress={handleUserProfile}>
                <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
              </TouchableOpacity>
              <View style={addFriendsScreenStyle.nickNameContainer}>
                <Text style={addFriendsScreenStyle.Invited}>RealVoice1</Text>
                <Text style={addFriendsScreenStyle.nickName}>realvoice1</Text>
              </View>
            </View>
            <View style={addFriendsScreenStyle.addCancelBtn}>
              <TouchableOpacity
                style={addFriendsScreenStyle.cancelBtn}
                onPress={handleDeleteFriend}>
                <Icon name="cancel" style={addFriendsScreenStyle.cancelIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={addFriendsScreenStyle.addFriendContainer}>
            <View style={mainScreenStyle.buttonContainer}>
              <TouchableOpacity
                style={addFriendsScreenStyle.circle}
                onPress={handleUserProfile}>
                <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
              </TouchableOpacity>
              <View style={addFriendsScreenStyle.nickNameContainer}>
                <Text style={addFriendsScreenStyle.Invited}>RealVoice1</Text>
                <Text style={addFriendsScreenStyle.nickName}>realvoice1</Text>
              </View>
            </View>
            <View style={addFriendsScreenStyle.addCancelBtn}>
              <TouchableOpacity
                style={addFriendsScreenStyle.cancelBtn}
                onPress={handleDeleteFriend}>
                <Icon name="cancel" style={addFriendsScreenStyle.cancelIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={addFriendsScreenStyle.addFriendContainer}>
            <View style={mainScreenStyle.buttonContainer}>
              <TouchableOpacity
                style={addFriendsScreenStyle.circle}
                onPress={handleUserProfile}>
                <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
              </TouchableOpacity>
              <View style={addFriendsScreenStyle.nickNameContainer}>
                <Text style={addFriendsScreenStyle.Invited}>RealVoice1</Text>
                <Text style={addFriendsScreenStyle.nickName}>realvoice1</Text>
              </View>
            </View>
            <View style={addFriendsScreenStyle.addCancelBtn}>
              <TouchableOpacity
                style={addFriendsScreenStyle.cancelBtn}
                onPress={handleDeleteFriend}>
                <Icon name="cancel" style={addFriendsScreenStyle.cancelIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={addFriendsScreenStyle.addFriendContainer}>
            <View style={mainScreenStyle.buttonContainer}>
              <TouchableOpacity
                style={addFriendsScreenStyle.circle}
                onPress={handleUserProfile}>
                <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
              </TouchableOpacity>
              <View style={addFriendsScreenStyle.nickNameContainer}>
                <Text style={addFriendsScreenStyle.Invited}>RealVoice1</Text>
                <Text style={addFriendsScreenStyle.nickName}>realvoice1</Text>
              </View>
            </View>
            <View style={addFriendsScreenStyle.addCancelBtn}>
              <TouchableOpacity
                style={addFriendsScreenStyle.cancelBtn}
                onPress={handleDeleteFriend}>
                <Icon name="cancel" style={addFriendsScreenStyle.cancelIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SendRequestFriendScreen;
