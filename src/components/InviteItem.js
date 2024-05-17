import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';

const InviteItem = ({firstLetter, name, username}) => {
  return (
    <View style={addFriendsScreenStyle.addFriendContainer}>
      <View style={mainScreenStyle.buttonContainer}>
        <View style={addFriendsScreenStyle.circle}>
          <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
        </View>
        <View style={addFriendsScreenStyle.nickNameContainer}>
          <Text style={addFriendsScreenStyle.Invited}>{name}</Text>
          <Text style={addFriendsScreenStyle.nickName}>{username}</Text>
        </View>
      </View>
      <TouchableOpacity style={addFriendsScreenStyle.invitedFriend}>
        <Text style={addFriendsScreenStyle.addText}>초대</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InviteItem;
