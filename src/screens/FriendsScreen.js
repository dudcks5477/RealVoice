import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Common from '../styles/common';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {API_URL} from '@env';
import {UserContext} from '../contexts/UserContext';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';
import addMoreFriendsScreenStyle from '../styles/addMoreFriendsScreenStyle';

import Header from '../components/Header';
import Search from '../components/Search';
import ShareInvite from '../components/ShareInvite';
// import Footer from '../components/Footer';
import FriendDeleteItem from '../components/FriendDeleteItem';

const FriendsScreen = () => {
  const {userData} = useContext(UserContext);
  const navigation = useNavigation();
  const userName = userData.userName;
  const firstLetter = userName.charAt(0).toUpperCase();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [friends, setFriends] = useState([
    'Bruce Banner',
    'Betty Ross',
    'Emil Blonsky',
    'Thunderbolt Ross',
  ]);

  const handleMain = () => {
    navigation.navigate('Main');
  };

  const handleUserProfile = () => {
    navigation.navigate('UserProfile');
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

  const handleSearchFriends = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/friends/search`, {
        params: {query: searchQuery},
      });
      if (response.status === 200) {
        setSearchResults(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFriend = friendName => {
    const updateFriends = friends.filter(friend => friend !== friendName);
    setFriends(updateFriends);
  };

  return (
    <View style={Common.container}>
      <Header onMain={handleMain} />
      <ScrollView styles={{flex: 1}}>
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearchFriends}
        />
        {/* 공유 버튼 클릭시 공유하기 나오는 로직 필요 */}
        <ShareInvite firstLetter={firstLetter} />
        {/* 친구 추천(연락처를 통한 가입자들 or 친구의 친구들) & 추가 & 삭제 로직 필요 */}
        <View style={addMoreFriendsScreenStyle.recommand}>
          <View style={addMoreFriendsScreenStyle.recommandContainer}>
            <Text style={addFriendsScreenStyle.recommandText}>
              내 친구들 ({friends.length})
            </Text>
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
      <View style={addFriendsScreenStyle.recommand}>
        <View style={addFriendsScreenStyle.selectFooter}>
          <TouchableOpacity
            style={addFriendsScreenStyle.textMore}
            onPress={handleAddFriends}>
            <Text style={addFriendsScreenStyle.footerText}>추천</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={addFriendsScreenStyle.textRecommandContainer}
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

export default FriendsScreen;
