import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';

const Header = ({onMain}) => {
  return (
    <View style={addFriendsScreenStyle.header}>
      <View style={addFriendsScreenStyle.iconContainer}>
        <Icon name="group" style={addFriendsScreenStyle.iconNone} />
      </View>
      <Text style={addFriendsScreenStyle.headerText}>RealVoice</Text>
      <TouchableOpacity
        style={addFriendsScreenStyle.iconContainer}
        onPress={onMain}>
        <Icon name="arrow-forward" style={addFriendsScreenStyle.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
