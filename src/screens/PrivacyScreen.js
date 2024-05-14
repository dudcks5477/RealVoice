import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import alertSettingScreenStyle from '../styles/alertSettingScreenStyle';
import privcayScreenStyle from '../styles/privacyScreenStyle';

const PrivacyScreen = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const handleBlocked = () => {
    navigation.navigate('Blocked');
  };
  const handleHided = () => {
    navigation.navigate('Hided');
  };

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleEditProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>개인정보 보호</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={privcayScreenStyle.InformationContainer}>
        <TouchableOpacity
          style={alertSettingScreenStyle.slideContainer}
          onPress={handleBlocked}>
          <View style={alertSettingScreenStyle.iconTextContainer}>
            <Icon name="block" style={alertSettingScreenStyle.icon} />
            <Text style={alertSettingScreenStyle.alternateText}>
              차단된 사용자
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={alertSettingScreenStyle.slideContainer}
          onPress={handleHided}>
          <View style={alertSettingScreenStyle.iconTextContainer}>
            <Icon name="visibility-off" style={alertSettingScreenStyle.icon} />
            <Text style={alertSettingScreenStyle.alternateText}>
              숨겨진 사용자
            </Text>
          </View>
        </TouchableOpacity>
        <View style={privcayScreenStyle.btnContainer}>
          <View style={privcayScreenStyle.slideContainer}>
            <View style={alertSettingScreenStyle.iconTextContainer}>
              <Icon name="public" style={alertSettingScreenStyle.icon} />
              <Text style={alertSettingScreenStyle.alternateText}>
                We are the world
              </Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Text style={privcayScreenStyle.btnDescript}>
            활성화하면 전 세계 RealVoice를 서로 확인할 수 있어요.
          </Text>
        </View>
        <View style={privcayScreenStyle.btnContainer}>
          <View style={privcayScreenStyle.slideContainer}>
            <View style={alertSettingScreenStyle.iconTextContainer}>
              <Icon name="phone-android" style={alertSettingScreenStyle.icon} />
              <Text style={alertSettingScreenStyle.alternateText}>
                내 전화번호로 찾기
              </Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Text style={privcayScreenStyle.btnDescript}>
            다른 사람이 내 휴대전화 번호로 나를 찾을 수 있도록 허용하면{'\n'}
            친구들이 회원님의 휴대전화 번호로 회원님을 찾을 수 있습니다.
          </Text>
        </View>
        <View style={privcayScreenStyle.btnContainer}>
          <View style={privcayScreenStyle.slideContainer}>
            <View style={alertSettingScreenStyle.iconTextContainer}>
              <Icon name="sync" style={alertSettingScreenStyle.icon} />
              <Text style={alertSettingScreenStyle.alternateText}>
                연락처 동기화
              </Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Text style={privcayScreenStyle.btnDescript}>
            연락처 동기화는 휴대전화 연락처에서 친구를 추천해 줍니다.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PrivacyScreen;
