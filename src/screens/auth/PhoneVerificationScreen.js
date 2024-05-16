import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Common from '../../styles/common';
import signUpPhoneNumberScreenStyle from '../../styles/signUpPhoneNumberScreenStyle';

const PhoneVerificationScreen = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation();

  const handleVerificationCodeChange = text => {
    if (/^\d*$/.test(text)) {
      setVerificationCode(text);
    }
  };

  const handleVerifyCode = () => {
    if (verificationCode.length !== 6) {
      Alert.alert('인증 코드는 6자리여야 합니다.');
      return;
    }
    // api 호출
    axios
      .post(process.env.API_URL + '/api/users', {
        verificationCode,
      })
      .then(response => {
        console.log('인증번호가 성공적으로 저장되었습니다.');
        navigation.navigate('MicroPhonePermission');
      })
      .catch(error => {
        console.error('인증번호 저장 중 에러 발생:', error);
        Alert.alert('인증번호가 올바르지 않습니다.');
      });
  };

  const handleResendVerificationCode = () => {
    axios
      .post(process.env.API_URL + 'api/resend-verification')
      .then(response => {
        Alert.alert('인증번호를 재전송하였습니다.');
        console.log('인증번호를 다시 전송합니다.');
      })
      .catch(error => {
        console.error('재전송 요청 중 에러 발생:', error);
        Alert.alert('재전송 요청 중 에러가 발생했습니다.');
      });
  };

  const placeholderText = '● ● ● ● ● ●';

  const handleGoBack = () => {
    navigation.navigate('SignUpPhoneNumber');
  };

  return (
    <View style={[Common.container, Common.contentCenter]}>
      <Text style={Common.headerText}>
        방금 문자 메시지로 보내드린{'\n'}코드를 입력하세요
      </Text>
      <View style={Common.content}>
        <TextInput
          style={signUpPhoneNumberScreenStyle.phoneNumber}
          onChangeText={handleVerificationCodeChange}
          value={verificationCode}
          placeholder={placeholderText}
          keyboardType="numeric"
          maxLength={6}
        />
        <View>
          <TouchableOpacity onPress={handleResendVerificationCode}>
            <Text style={Common.assignColor}>
              {/* 선택 시 인증 코드 재전송 로직 구현 필요 */}
              받지 못하셨나요? 탭하여 다시 전송하세요.
              {'\n'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGoBack}>
            <Text style={Common.assignColor}>
              해당 전화번호를 사용할 수 없습니다.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Common.nextBtnContainer}>
        <TouchableOpacity
          style={[
            Common.nextBtn,
            {opacity: verificationCode.length === 6 ? 1 : 0.5},
          ]}
          onPress={handleVerifyCode}
          disabled={verificationCode.length !== 6}>
          <Text style={Common.nextBtnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneVerificationScreen;