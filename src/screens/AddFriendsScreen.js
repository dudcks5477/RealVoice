import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Common from '../styles/common';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';

import Header from '../components/Header';
import Search from '../components/Search';
import ShareInvite from '../components/ShareInvite';
import FriendItem from '../components/FriendItem';
import InviteItem from '../components/InviteItem';
import Footer from '../components/Footer';

const AddFriendsScreen = () => {
  const navigation = useNavigation();

  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();

  const [isAdded, setIsAdded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleMain = () => {
    navigation.navigate('Main');
  };

  const handleUserProfile = friendId => {
    navigation.navigate('UserProfile', {id: friendId});
  };

  const handleFriends = () => {
    navigation.navigate('Friends');
  };

  const handleMoreDetail = () => {
    navigation.navigate('AddMoreFriends');
  };

  const handleRequired = () => {
    navigation.navigate('Required');
  };

  const handleAddFriends = () => {
    navigation.navigate('AddFriends');
  };

  const handleAddFriend = async friendId => {
    try {
      const response = await axios.post('/api/friends/add', {
        userId: userName,
        friendId: friendId,
      });
      if (response.status === 200) {
        setIsAdded(true);
      }
    } catch (error) {
      console.error(error);
    }
    setIsAdded(!isAdded);
  };

  const handleSearchFriends = async () => {
    try {
      const response = await axios.get('/api/friends/search', {
        params: {query: searchQuery},
      });
      if (response.status === 200) {
        setSearchResults(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={Common.container}>
      <Header onMain={handleMain} />
      <ScrollView style={{flex: 1}}>
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearchFriends}
        />
        {/* 공유 버튼 클릭시 공유하기 나오는 로직 필요 */}
        <ShareInvite firstLetter={firstLetter} />
        {/* 친구 추천(연락처를 통한 가입자들 or 친구의 친구들) & 추가 & 삭제 로직 필요 */}
        <View style={addFriendsScreenStyle.recommand}>
          <View style={addFriendsScreenStyle.recommandContainer}>
            <Text style={addFriendsScreenStyle.recommandText}>추천</Text>
          </View>
          {searchResults.map(result => (
            <FriendItem
              key={result.id}
              friend={result}
              onAdd={handleAddFriend}
              onProfile={handleUserProfile}
              isAdded={isAdded}
            />
          ))}
          <TouchableOpacity
            style={addFriendsScreenStyle.moreDetail}
            onPress={handleMoreDetail}>
            <Text style={addFriendsScreenStyle.searchInput}>더보기</Text>
          </TouchableOpacity>
        </View>
        <View style={addFriendsScreenStyle.contact}>
          <View style={addFriendsScreenStyle.recommandContainer}>
            <Text style={addFriendsScreenStyle.recommandText}>
              RealVoice 연락처
            </Text>
          </View>
          {Array(5)
            .fill()
            .map((_, index) => (
              <InviteItem
                key={index}
                firstLetter={firstLetter}
                name={`RealVoice${index + 1}`}
                username={`realvoice${index + 1}`}
              />
            ))}
        </View>
      </ScrollView>
      <Footer
        onRecommend={handleAddFriends}
        onFriends={handleFriends}
        onRequired={handleRequired}
      />
    </View>
  );
};

export default AddFriendsScreen;
