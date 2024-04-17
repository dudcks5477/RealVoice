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

import Common from '../styles/common';
import signUpPhoneNumberScreenStyle from '../styles/signUpPhoneNumberScreenStyle';

const SignUpPhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const navigation = useNavigation();

  const handlePhoneNumberChange = text => {
    setPhoneNumber(text);
    setIsPhoneNumberValid(text.trim().length === 11);
  };

  const handleSignUp = () => {
    if (phoneNumber.trim() === '') {
      Alert.alert('전화번호를 입력하세요.');
      return;
    }
    navigation.navigate('PhoneVerificationScreen');
  };

  const goToTermsOfService = () => {
    Linking.openURL(
      'https://www.notion.so/real-company/1899b9d766a94e7585dfea19e16707e4',
    );
  };
  const goToTermsOfPrivacy = () => {
    Linking.openURL(
      'https://www.notion.so/real-company/cbc9a909cfcf49b1b04370211b6418c2',
    );
  };

  return (
    <View style={[Common.container, Common.contentCenter]}>
      <Text style={Common.headerText}>전화번호가 어떻게 되세요?</Text>
      <View style={Common.content}>
        {/* 국가 코드 및 번호 선택할 수 있는 로직 작성 */}
        <TextInput
          style={signUpPhoneNumberScreenStyle.phoneNumber}
          onChangeText={handlePhoneNumberChange}
          value={phoneNumber}
          placeholder="전화번호"
          keyboardType="phone-pad"
          maxLength={11}
        />
        <Text style={signUpPhoneNumberScreenStyle.text}>
          전화번호 입력은 당사{' '}
          <TouchableOpacity onPress={goToTermsOfService}>
            <Text style={Common.assign}>서비스약관</Text>
          </TouchableOpacity>{' '}
          및{' '}
          <TouchableOpacity onPress={goToTermsOfPrivacy}>
            <Text style={Common.assign}>개인정보 보호정책</Text>
          </TouchableOpacity>
          에 동의하는{'\n'}것입니다. 감사합니다.
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
