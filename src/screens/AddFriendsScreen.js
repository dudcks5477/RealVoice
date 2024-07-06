import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Contacts from 'react-native-contacts';
import Common from '../styles/common';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {API_URL} from '@env';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';

import Header from '../components/Header';
import Search from '../components/Search';
import ShareInvite from '../components/ShareInvite';
import FriendItem from '../components/FriendItem';
import InviteItem from '../components/InviteItem';
import Footer from '../components/Footer';
import {UserContext} from '../contexts/UserContext';

const AddFriendsScreen = () => {
  const {userData} = useContext(UserContext);
  const navigation = useNavigation();
  const userName = userData.nickName || 'RealVoice';
  const firstLetter = userName.charAt(0).toUpperCase();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([
    {id: 1, name: 'zerochan', username: 'YoungChan'},
    {id: 2, name: 'Isho', username: 'HoSeong'},
    {id: 3, name: 'Tony Stark', username: ''},
    {id: 4, name: 'Jamse Rose', username: ''},
    {id: 5, name: 'Pepper potts', username: ''},
    {id: 6, name: 'Happy Hogan', username: ''},
    {id: 7, name: 'Phil Coulson', username: ''},
    {id: 8, name: 'Jarvis', username: ''},
    {id: 9, name: 'Howard Stark', username: ''},
    {id: 10, name: 'Stan Lee', username: ''},
    {id: 11, name: 'Nick Fury', username: ''},
  ]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loadContacts = () => {
      Contacts.getAll()
        .then(contacts => {
          setContacts(contacts);
        })
        .catch(e => {
          console.log(e);
        });
    };
    loadContacts();
  }, []);

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
      const response = await axios.post(`${API_URL}/friends/addUser`, {
        requestUuid: userData.userUuid,
        targetUuid: friendId,
      });
      if (response.status === 200) {
        console.log(`Added friend with id ${friendId}`);
      } else {
        console.error(`Failed to add friend with id ${friendId}`);
      }
    } catch (error) {
      console.error(`Error adding friend with id ${friendId}: `, error);
    }
  };

  const handleDeleteFriend = async friendId => {
    try {
      const response = await axios.post(`${API_URL}/friends/remove`, {
        userUuid: userData.userUuid,
        friendId: friendId,
      });
      if (response.status === 200) {
        console.log(`Deleted friend with id ${friendId}`);
        setSearchResults(prevResults =>
          prevResults.filter(friend => friend.id !== friendId),
        );
      } else {
        console.error(`Failed to delete friend with id ${friendId}`);
      }
    } catch (error) {
      console.error(
        `Error deleting friend with id ${friendId}: `,
        error.response ? error.response.data : error.message,
      );
    }
  };

  const handleSearchFriends = async () => {
    try {
      const response = await axios.get(`${API_URL}/friends/search`, {
        params: {query: searchQuery},
      });
      if (response.status === 200) {
        setSearchResults(response.data);
      } else {
        console.error(`Failed to search friends with query ${searchQuery}`);
      }
    } catch (error) {
      console.error(
        `Error searching friends with query ${searchQuery}: `,
        error,
      );
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
        <ShareInvite firstLetter={firstLetter} />
        {searchResults.length > 0 && (
          <View style={addFriendsScreenStyle.recommand}>
            <View style={addFriendsScreenStyle.recommandContainer}>
              <Text style={addFriendsScreenStyle.recommandText}>추천</Text>
            </View>
            {searchResults.slice(0, 5).map(result => (
              <FriendItem
                key={result.id}
                friend={result}
                onAdd={() => handleAddFriend(result.id)}
                onProfile={() => handleUserProfile(result.id)}
                onDelete={() => handleDeleteFriend(result.id)} // 삭제 함수 전달
              />
            ))}
            {searchResults.length > 5 && (
              <TouchableOpacity
                style={addFriendsScreenStyle.moreDetail}
                onPress={handleMoreDetail}>
                <Text style={addFriendsScreenStyle.searchInput}>더보기</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        {searchResults.length === 0 && (
          <View style={addFriendsScreenStyle.recommand}>
            <Text style={addFriendsScreenStyle.recommandText}>
              추천 친구가 없습니다.
            </Text>
          </View>
        )}
        <View style={addFriendsScreenStyle.contact}>
          <View style={addFriendsScreenStyle.recommandContainer}>
            <Text style={addFriendsScreenStyle.recommandText}>
              RealVoice 연락처
            </Text>
          </View>
          {contacts.map((contact, index) => (
            <InviteItem
              key={index}
              firstLetter={contact.givenName.charAt(0).toUpperCase()}
              name={contact.givenName}
              username={contact.givenName}
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
