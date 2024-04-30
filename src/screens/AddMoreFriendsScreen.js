import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Common from '../styles/common';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';
import requiredScreenStyle from '../styles/requiredScreenStyle';

const AddMoreFriendsScreen = () => {
  const navigation = useNavigation();
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();
  const [isAdded, setIsAdded] = useState(false);

  const Main = () => {
    navigation.navigate('Main');
  };

  const handleUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  const handleAddFriend = () => {
    navigation.navigate('AddFriends');
  };

  const handleAddFriends = () => {
    setIsAdded(!isAdded);
  };

  return (
    <View style={Common.container}>
      <View style={addFriendsScreenStyle.header}>
        <View style={addFriendsScreenStyle.iconContainer}>
          <Icon name="group" style={addFriendsScreenStyle.iconNone} />
        </View>
        <Text style={addFriendsScreenStyle.headerText}>RealVoice</Text>
        <TouchableOpacity
          style={addFriendsScreenStyle.iconContainer}
          onPress={Main}>
          <Icon name="arrow-forward" style={addFriendsScreenStyle.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={addFriendsScreenStyle.search}>
          <View style={addFriendsScreenStyle.searchContainer}>
            <Icon name="search" style={addFriendsScreenStyle.searchIcon} />
            <TextInput
              style={addFriendsScreenStyle.searchInput}
              placeholder="친구 추가 또는 검색"
            />
          </View>
        </View>

        {/* 친구 추천(연락처를 통한 가입자들 or 친구의 친구들) & 추가 & 삭제 로직 필요 */}
        <View style={addFriendsScreenStyle.recommand}>
          <View style={requiredScreenStyle.recommandContainer}>
            <TouchableOpacity onPress={handleAddFriend}>
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
            <View
              style={[
                addFriendsScreenStyle.addCancelBtn,
                isAdded && {marginRight: 18},
              ]}>
              <TouchableOpacity
                style={addFriendsScreenStyle.addBtn}
                onPress={handleAddFriends}>
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
                  <Icon
                    name="cancel"
                    style={addFriendsScreenStyle.cancelIcon}
                  />
                </TouchableOpacity>
              )}
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
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
              <TouchableOpacity style={addFriendsScreenStyle.addBtn}>
                <Text style={addFriendsScreenStyle.addText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
                <Icon name="cancel" style={addFriendsScreenStyle.cancelIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddMoreFriendsScreen;
