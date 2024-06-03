import React, {useState} from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
import Common from '../../styles/common';
import signUpPhoneNumberScreenStyle from '../../styles/signUpPhoneNumberScreenStyle';

const SignUpPhoneNumberScreen = ({userData, setUserData}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('KR');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const navigation = useNavigation();

  const handlePhoneNumberChange = text => {
    // 숫자 이외의 문자는 모두 제거
    const cleanText = text.replace(/[^0-9]/g, '');
    setUserData(prevState => ({
      ...prevState,
      phoneNumber: cleanText,
    }));
    setPhoneNumber(cleanText);
    setIsPhoneNumberValid(cleanText.length > 0);
  };

  const handleCountrySelect = country => {
    setUserData(prevState => ({
      ...prevState,
      callingCode: `+${country.callingCode[0]}`,
    }));
    setCountryCode(country.cca2);
  };

  const handleSignUp = () => {
    if (userData.phoneNumber.trim() === '') {
      Alert.alert('전화번호를 입력하세요.');
      return;
    }
    navigation.navigate('PhoneVerification');
  };

  return (
    <View style={Common.container}>
      <Text style={Common.headerText}>전화번호가 어떻게 되세요?</Text>
      <View style={signUpPhoneNumberScreenStyle.content}>
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
