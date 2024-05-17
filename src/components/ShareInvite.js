// ShareInvite.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';

const ShareInvite = ({firstLetter}) => {
  return (
    <TouchableOpacity style={addFriendsScreenStyle.share}>
      <View style={addFriendsScreenStyle.shareContainer}>
        <View style={mainScreenStyle.buttonContainer}>
          <View style={mainScreenStyle.circle}>
            <Text style={mainScreenStyle.button}>{firstLetter}</Text>
          </View>
        </View>
        <View>
          <Text style={addFriendsScreenStyle.Invited}>RealVoice 초대</Text>
          <Text style={addFriendsScreenStyle.nickName}>realvoice</Text>
        </View>
        <View style={addFriendsScreenStyle.shareIconContainer}>
          <Icon name="share" style={addFriendsScreenStyle.shareIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShareInvite;
