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
import Header from '../components/Header';

import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';
import requiredScreenStyle from '../styles/requiredScreenStyle';

const RequiredFriendScreen = () => {
  const navigation = useNavigation();
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();
  const [isAdded, setIsAdded] = useState(false);

  const handleMain = () => {
    navigation.navigate('Main');
  };

  const handleUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  const handleFriends = () => {
    navigation.navigate('Friends');
  };

  const handleRequired = () => {
    navigation.navigate('Required');
  };

  const handleSendRequestFriend = () => {
    navigation.navigate('SendRequestFriend');
  };

  const handleAddFriends = () => {
    setIsAdded(!isAdded);
  };

  return (
    <View style={Common.container}>
      <Header onMain={handleMain} />
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
        {/* 공유 버튼 클릭시 공유하기 나오는 로직 필요 */}
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
        {/* 친구 추천(연락처를 통한 가입자들 or 친구의 친구들) & 추가 & 삭제 로직 필요 */}
        <View style={addFriendsScreenStyle.recommand}>
          <View style={requiredScreenStyle.recommandContainer}>
            <Text style={addFriendsScreenStyle.recommandText}>친구 요청</Text>
            <Text style={requiredScreenStyle.space} />
            <TouchableOpacity onPress={handleSendRequestFriend}>
              <Text style={addFriendsScreenStyle.recommandText}>보냄 &gt;</Text>
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
        </View>
      </ScrollView>
      <View style={addFriendsScreenStyle.recommand}>
        <View style={addFriendsScreenStyle.selectFooter}>
          <TouchableOpacity
            style={addFriendsScreenStyle.textMore}
            onPress={handleAddFriends}>
            <Text style={addFriendsScreenStyle.footerText}>추천</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={addFriendsScreenStyle.textMore}
            onPress={handleFriends}>
            <Text style={addFriendsScreenStyle.footerText}>친구들</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={addFriendsScreenStyle.textRecommandContainer}
            onPress={handleRequired}>
            <Text style={addFriendsScreenStyle.footerText}>요청</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RequiredFriendScreen;
