import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Common from '../../styles/common';
import voicePermissionScreenStyle from '../../styles/voicePermissionScreenStyle';

const VoicePermissionScreen = () => {
  const [isAllowPressed, setIsAllowPressed] = useState(false);
  const navigation = useNavigation();

  const handleAllow = () => {
    setIsAllowPressed(true);
    handleMain();
  };

  const handleDeny = () => {
    console.log('허용하지 않기 버튼을 눌렀습니다.');
  };

  const handleMain = () => {
    navigation.navigate('Main');
  };

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
