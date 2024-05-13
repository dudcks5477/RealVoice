import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import memorySettingScreenStyle from '../styles/memorySettingScreenStyle';
import alertSettingScreenStyle from '../styles/alertSettingScreenStyle';
import profileEditDetailScreenStyle from '../styles/profileEditDetailScreenStyle';

const AlertSettingScreen = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
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
            <Text style={profileScreenStyle.headerText}>알림</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={memorySettingScreenStyle.mainTextContainer}>
        <Text style={alertSettingScreenStyle.text}>
          RealVoice에서는 푸시 알림을 제어할 수 있습니다.{'\n'}
          수신할 알림 유형을 선택할 수 있습니다.
        </Text>
      </View>
      <View style={alertSettingScreenStyle.InformationContainer}>
        <View style={alertSettingScreenStyle.slideContainer}>
          <View style={alertSettingScreenStyle.iconTextContainer}>
            <Icon name="alternate-email" style={alertSettingScreenStyle.icon} />
            <Text style={alertSettingScreenStyle.alternateText}>
              말하기와 태그
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
        <View style={alertSettingScreenStyle.slideContainer}>
          <View style={alertSettingScreenStyle.iconTextContainer}>
            <Icon name="people" style={alertSettingScreenStyle.icon} />
            <Text style={alertSettingScreenStyle.alternateText}>친구 요청</Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={alertSettingScreenStyle.slideContainer}>
          <View style={alertSettingScreenStyle.iconTextContainer}>
            <Icon
              name="record-voice-over"
              style={alertSettingScreenStyle.icon}
            />
            <Text style={alertSettingScreenStyle.alternateText}>
              RealComments
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
        <View style={alertSettingScreenStyle.slideContainer}>
          <View style={alertSettingScreenStyle.iconTextContainer}>
            <Icon
              name="local-post-office"
              style={alertSettingScreenStyle.icon}
            />
            <Text style={alertSettingScreenStyle.alternateText}>
              친구들 포스트
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
        <TouchableOpacity
          style={alertSettingScreenStyle.saveBtnContainer}
          onPress={handleEditProfile}>
          <Text style={profileEditDetailScreenStyle.saveBtnText}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlertSettingScreen;
