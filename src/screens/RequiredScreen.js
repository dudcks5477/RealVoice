import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Common from '../styles/common';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';

import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';
import requiredScreenStyle from '../styles/requiredScreenStyle';

const RequiredScreen = () => {
  const navigation = useNavigation();
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();

  const handleMain = () => {
    navigation.navigate('Main');
  };

  const handleAddFriends = () => {
    navigation.navigate('AddFriends');
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

  return (
    <View style={Common.container}>
      <Header onMain={handleMain} />
      <ScrollView styles={{flex: 1}}>
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

        <View style={addFriendsScreenStyle.recommand}>
          <View style={requiredScreenStyle.recommandContainer}>
            <Text style={addFriendsScreenStyle.recommandText}>친구 요청</Text>
            <Text style={requiredScreenStyle.space} />
            <TouchableOpacity onPress={handleSendRequestFriend}>
              <Text style={addFriendsScreenStyle.recommandText}>보냄 &gt;</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={addFriendsScreenStyle.share}>
          <View style={requiredScreenStyle.shareContainer}>
            <View style={requiredScreenStyle.requestContainer}>
              <Text style={requiredScreenStyle.requestHeaderText}>
                보류 중인 요청 없음
              </Text>
              <Text style={requiredScreenStyle.requestSubText}>
                보류 중인 요청이 없습니다.
              </Text>
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

export default RequiredScreen;
