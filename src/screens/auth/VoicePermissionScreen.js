import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Common from '../../styles/common';
import voicePermissionScreenStyle from '../../styles/voicePermissionScreenStyle';

const VoicePermissionScreen = ({userData}) => {
  const [isAllowPressed, setIsAllowPressed] = useState(false);
  const navigation = useNavigation();

  const handleAllow = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 13) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: '알림 권한 요청',
            message: 'RealVoice에서 알림을 표시하도록 허용하시겠습니까?',
            buttonPositive: '허용하기',
            buttonNegative: '허용하지 않기',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('알림 권한이 거부되었습니다.');
        } else {
          console.log('알림 권한이 허용되었습니다.');
        }
      } catch (err) {
        console.warn(err);
      }
    }
    try {
      await axios.post('http://10.0.2.2:8080/user/voice/register', {
        userUuid: userData.userUuid,
        callingCode: userData.callingCode,
        phoneNumber: userData.phoneNumber,
        nickName: userData.nickName,
      });
      console.log('유저 데이터가 성공적으로 저장되었습니다.');
      navigation.navigate('Main');
    } catch (error) {
      console.error('유저 데이터 저장 중 에러 발생:', error);
    }
  };

  const handleDeny = () => {
    console.log('허용하지 않기 버튼을 눌렀습니다.');
    navigation.navigate('Main');
  };

  // const handleMain = () => {
  //   navigation.navigate('Main');
  // };

  const allowButtonStyle = isAllowPressed ? {backgroundColor: '#2a55ee'} : null;

  return (
    <View style={Common.container}>
      <Text style={voicePermissionScreenStyle.headerText}>
        RealVoice를 언제{'\n'} 들려주실껀가요
      </Text>
      <Text style={voicePermissionScreenStyle.subText}>
        RealVoice를 들려줄 시간을 알 수 있는 유일한 방법은,{'\n'}알림을 활성화
        하는 것 뿐이에요!
      </Text>
      <View style={voicePermissionScreenStyle.permissionContaine}>
        <Text style={voicePermissionScreenStyle.permissionHeaderText}>
          알림을 활성화 해주세요.
        </Text>
        <Text style={voicePermissionScreenStyle.permissionText}>
          하루에 한 번 RealVoice를 들려줄 시간을{'\n'}알려주는 알림을 제외하면
          모든 알람은{'\n'}무음이에요.
        </Text>
        <View style={voicePermissionScreenStyle.permitBtn}>
          <TouchableOpacity
            onPress={handleAllow}
            style={[
              voicePermissionScreenStyle.permitBtnItem,
              allowButtonStyle,
            ]}>
            <Text style={voicePermissionScreenStyle.permit}>허용하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDeny}
            style={voicePermissionScreenStyle.permitBtnItem}>
            <Text style={voicePermissionScreenStyle.permitNegative}>
              허용하지 않기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VoicePermissionScreen;
