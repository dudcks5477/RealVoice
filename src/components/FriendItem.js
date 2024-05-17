import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';

const FriendItem = ({friend, onAdd, onProfile, isAdded}) => {
  const firstLetter = friend.name.charAt(0).toUpperCase();

  return (
    <View style={addFriendsScreenStyle.addFriendContainer}>
      <View style={mainScreenStyle.buttonContainer}>
        <TouchableOpacity
          style={addFriendsScreenStyle.circle}
          onPress={() => onProfile(friend.id)}>
          <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
        </TouchableOpacity>
        <View style={addFriendsScreenStyle.nickNameContainer}>
          <Text style={addFriendsScreenStyle.Invited}>{friend.name}</Text>
          <Text style={addFriendsScreenStyle.nickName}>{friend.username}</Text>
        </View>
      </View>
      <View
        style={[
          addFriendsScreenStyle.addCancelBtn,
          isAdded && {marginRight: 18},
        ]}>
        <TouchableOpacity
          style={addFriendsScreenStyle.addBtn}
          onPress={() => onAdd(friend.id)}>
          <Text
            style={[
              addFriendsScreenStyle.addText,
              isAdded && {color: '#2a55ee'},
            ]}>
            {isAdded ? '추가됨' : '추가'}
          </Text>
        </TouchableOpacity>
        {!isAdded && (
          <TouchableOpacity
            style={addFriendsScreenStyle.cancelBtn}
            onPress={() => {
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
                    text: '숨기기',
                    onPress: () => {
                      console.log('친구 삭제됨');
                    },
                  },
                ],
                {cancelable: false},
              );
            }}>
            <Icon name="cancel" style={addFriendsScreenStyle.cancelIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FriendItem;
