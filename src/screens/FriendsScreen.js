import React, {useState} from 'react';
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
import axios from 'axios';

import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';
import addMoreFriendsScreenStyle from '../styles/addMoreFriendsScreenStyle';

import Header from '../components/Header';
import Search from '../components/Search';
import ShareInvite from '../components/ShareInvite';
import Footer from '../components/Footer';

const FriendsScreen = () => {
  const navigation = useNavigation();
  const userName = 'Chan';
  const firstLetter = userName.charAt(0).toUpperCase();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
          <View style={addFriendsScreenStyle.recommandContainer}>
            <Text style={addFriendsScreenStyle.recommandText}>
              내 친구들 (10)
            </Text>
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
              <TouchableOpacity style={addFriendsScreenStyle.cancelBtn}>
                <Icon name="cancel" style={addFriendsScreenStyle.cancelIcon} />
              </TouchableOpacity>
            </View>
          </View>
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

export default FriendsScreen;
