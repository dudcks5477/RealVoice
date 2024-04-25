import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Common from '../styles/common';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';

const AddFriendsScreen = () => {
  const navigation = useNavigation();
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();

  const Main = () => {
    navigation.navigate('Main');
  };

  const handleAddMoreFriends = () => {
    navigation.navigate('AddMoreFriends');
  };

  const handleFriends = () => {
    navigation.navigate('Friends');
  };

  const handleRequired = () => {
    navigation.navigate('Required');
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
        <View style={addFriendsScreenStyle.recommandContainer}>
          <Text style={addFriendsScreenStyle.recommandText}>추천</Text>
        </View>
        <View style={addFriendsScreenStyle.addFriendContainer}>
          <View style={mainScreenStyle.buttonContainer}>
            <View style={addFriendsScreenStyle.circle}>
              <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
            </View>
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
            <View style={addFriendsScreenStyle.circle}>
              <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
            </View>
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
            <View style={addFriendsScreenStyle.circle}>
              <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
            </View>
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
            <View style={addFriendsScreenStyle.circle}>
              <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
            </View>
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
            <View style={addFriendsScreenStyle.circle}>
              <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
            </View>
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
        <TouchableOpacity
          style={addFriendsScreenStyle.moreDetail}
          onPress={handleAddMoreFriends}>
          <Text style={addFriendsScreenStyle.searchInput}>더보기</Text>
        </TouchableOpacity>
      </View>
      <View style={addFriendsScreenStyle.recommand}>
        <View style={addFriendsScreenStyle.recommandContainer}>
          <Text style={addFriendsScreenStyle.recommandText}>
            RealVoice 연락처
          </Text>
        </View>
        {/* 초대 버튼은 공유 버튼처럼 타 앱으로 전송할 수 있는 기능 필요 */}
        <View style={addFriendsScreenStyle.addFriendContainer}>
          <View style={mainScreenStyle.buttonContainer}>
            <View style={addFriendsScreenStyle.circle}>
              <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
            </View>
            <View style={addFriendsScreenStyle.nickNameContainer}>
              <Text style={addFriendsScreenStyle.Invited}>RealVoice1</Text>
              <Text style={addFriendsScreenStyle.nickName}>realvoice1</Text>
            </View>
          </View>
          <TouchableOpacity style={addFriendsScreenStyle.invitedFriend}>
            <Text style={addFriendsScreenStyle.addText}>초대</Text>
          </TouchableOpacity>
        </View>
        <View style={addFriendsScreenStyle.addFriendContainer}>
          <View style={mainScreenStyle.buttonContainer}>
            <View style={addFriendsScreenStyle.circle}>
              <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
            </View>
            <View style={addFriendsScreenStyle.nickNameContainer}>
              <Text style={addFriendsScreenStyle.Invited}>RealVoice1</Text>
              <Text style={addFriendsScreenStyle.nickName}>realvoice1</Text>
            </View>
          </View>
          <TouchableOpacity style={addFriendsScreenStyle.invitedFriend}>
            <Text style={addFriendsScreenStyle.addText}>초대</Text>
          </TouchableOpacity>
        </View>
        <View style={addFriendsScreenStyle.selectFooter}>
          <TouchableOpacity
            style={addFriendsScreenStyle.textRecommandContainer}>
            <Text style={addFriendsScreenStyle.footerText}>추천</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={addFriendsScreenStyle.textMore}
            onPress={handleFriends}>
            <Text style={addFriendsScreenStyle.footerText}>친구들</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={addFriendsScreenStyle.textMore}
            onPress={handleRequired}>
            <Text style={addFriendsScreenStyle.footerText}>요청</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddFriendsScreen;
