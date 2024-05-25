import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import CountryPicker from 'react-native-country-picker-modal';
import Common from '../../styles/common';
import signUpPhoneNumberScreenStyle from '../../styles/signUpPhoneNumberScreenStyle';

const SignUpPhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('KR');
  const [callingCode, setCallingCode] = useState('+82');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const navigation = useNavigation();

  const handlePhoneNumberChange = text => {
    // 숫자 이외의 문자는 모두 제거
    const cleanText = text.replace(/[^0-9]/g, '');
    setPhoneNumber(cleanText);
    setIsPhoneNumberValid(cleanText.length > 0);
  };

  const handleCountrySelect = country => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setPhoneNumber('');
    setIsPhoneNumberValid(false);
  };

  const handleSignUp = () => {
    if (phoneNumber.trim() === '') {
      Alert.alert('전화번호를 입력하세요.');
      return;
    }
    const verificationCode = '123456';
    // API 호출
    // axios
    //   .post('/api/users', {
    //     phoneNumber: `${countryCode}${phoneNumber}`,
    //     verificationCode,
    //   })
    //   .then(response => {
    //     console.log('전화번호가 성공적으로 저장되었습니다.');
    //     navigation.navigate('PhoneVerification');
    //   })
    //   .catch(error => {
    //     console.error('전화번호 저장 중 에러 발생:', error);
    //     Alert.alert('전화번호를 저장하는데 문제가 발생했습니다.');
    //   });
    navigation.navigate('PhoneVerification');
  };

  return (
    <View style={Common.container}>
      <Text style={Common.headerText}>전화번호가 어떻게 되세요?</Text>
      <View style={signUpPhoneNumberScreenStyle.content}>
        {/* 국가 코드 및 번호 선택할 수 있는 로직 작성 */}
        <View style={signUpPhoneNumberScreenStyle.phoneNumberContainer}>
          <CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag
            withCallingCode
            withCountryNameButton={false}
            withAlphaFilter={false}
            onSelect={handleCountrySelect}
            containerButtonStyle={signUpPhoneNumberScreenStyle.countryPicker}
          />
          <TextInput
            style={signUpPhoneNumberScreenStyle.phoneNumber}
            onChangeText={handlePhoneNumberChange}
            value={phoneNumber}
            placeholder="01012345678"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            maxLength={15}
          />
        </View>
        <Text style={signUpPhoneNumberScreenStyle.text}>
          전화번호 입력은 당사 서비스 약관 및 개인정보 보호정책에 동의하는
          {'\n'} 것입니다. 감사합니다.
        </Text>
      </View>
      <View style={Common.nextBtnContainer}>
        <TouchableOpacity
          style={[Common.nextBtn, {opacity: isPhoneNumberValid ? 1 : 0.5}]}
          onPress={handleSignUp}
          disabled={!isPhoneNumberValid}>
          <Text style={Common.nextBtnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpPhoneNumberScreen;
