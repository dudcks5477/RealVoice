import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Common from '../styles/common';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import requiredScreenStyle from '../styles/requiredScreenStyle';
import addMoreFriendsScreenStyle from '../styles/addMoreFriendsScreenStyle';

import Header from '../components/Header';
import Search from '../components/Search';
import FriendItem from '../components/FriendItem';

const AddMoreFriendsScreen = () => {
  const navigation = useNavigation();
  const userName = 'Chan';
  const [isAdded, setIsAdded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([
    {id: 1, name: 'zerochan', username: 'YoungChan'},
    {id: 2, name: 'Isho', username: 'HoSeong'},
    {id: 3, name: 'Sam Wilson', username: ''},
    {id: 4, name: 'Chris Evans', username: ''},
    {id: 5, name: 'Robert Downey', username: ''},
    {id: 6, name: 'Scarlett Johansson', username: ''},
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

  const handleAddFriend = async friendId => {
    try {
      const response = await axios.post('/api/friends/add', {
        userId: userName,
        friendId: friendId,
      });
      if (response.status === 200) {
        console.log(`Added friend with id ${friendId}`);
      }
    } catch (error) {
      console.error(error);
    }
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

  const handleDeleteFriend = friendId => {
    setSearchResults(prevResults =>
      prevResults.filter(friend => friend.id !== friendId),
    );
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

        {/* 친구 추천(연락처를 통한 가입자들 or 친구의 친구들) & 추가 & 삭제 로직 필요 */}
        <View style={addMoreFriendsScreenStyle.recommand}>
          <View style={requiredScreenStyle.recommandContainer}>
            <TouchableOpacity onPress={handleAddFriends}>
              <Text style={addFriendsScreenStyle.recommandText}>
                &lt; 친구추천
              </Text>
            </TouchableOpacity>
          </View>
          {searchResults.map(result => (
            <FriendItem
              key={result.id}
              friend={result}
              onAdd={handleAddFriend}
              onProfile={handleUserProfile}
              isAdded={isAdded}
              onDelete={handleDeleteFriend}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AddMoreFriendsScreen;
