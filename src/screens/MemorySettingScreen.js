import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import memorySettingScreenStyle from '../styles/memorySettingScreenStyle';

const MemorySettingScreen = () => {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handleDisabledMemory = () => {
    Alert.alert(
      '추억 기능 비활성화 및 삭제',
      '추억 기능을 비활성화 하시겠습니까?',
      [
        {text: '비활성화 및 삭제', onPress: () => console.log('비활성화 선택')},
        {text: '취소', onPress: () => console.log('취소')},
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleEditProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>추억</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={mainScreenStyle.buttonContainer}
          onPress={console.log('정보 버튼을 눌렀습니다.')}>
          <Icon name="help" style={profileScreenStyle.icon} />
        </TouchableOpacity>
      </View>
      <View style={memorySettingScreenStyle.mainTextContainer}>
        <Text style={memorySettingScreenStyle.headerText}>
          추억 기능이 켜져 있습니다.
        </Text>
        <Text style={memorySettingScreenStyle.text}>
          회원님의 모든 RealVoice들이 자동으로 회원님의 추억에{'\n'}
          추가되며, 이 RealVoice들은 회원님에게만 보입니다.
        </Text>
      </View>
      <View style={memorySettingScreenStyle.disabledContainer}>
        <View style={memorySettingScreenStyle.disabledBtnContainer}>
          <Text style={memorySettingScreenStyle.headerText}>
            추억 기능이 켜져 있습니다.
          </Text>
          <Text style={memorySettingScreenStyle.text}>
            추억 기능을 비활성화하면, 저장되어 있던 모든 RealVoice{'\n'}
            들이 영구적으로 삭제되며 복구가 불가능합니다.{'\n'}
            앞으로 공유하시는 RealVoice들도 추억에 저장되지 않으며{'\n'}
            시간이 지난 후 삭제되게 됩니다.
          </Text>
          <TouchableOpacity
            style={memorySettingScreenStyle.disabledBtn}
            onPress={handleDisabledMemory}>
            <Text style={memorySettingScreenStyle.disabledBtnText}>
              추억 기능 비활성화 및 삭제
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MemorySettingScreen;
