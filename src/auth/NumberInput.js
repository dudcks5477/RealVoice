import React, {useState} from 'react';
import {View, TextInput, Button, Text, TouchableOpacity} from 'react-native';
import NumberInputStyles from './styles/NumberInputStyles';

const NumberInput = ({onSubmit}) => {
  const [phoneNumber, setPhoneNumber] = useState(' ');

  const handleInputChange = text => {
    // 여기에서 필요한 경우 전화번호 유효성 검사 등을 수행할 수 있음
    setPhoneNumber(text);
  };

  const handleSubmit = () => {
    // 전화번호를 상위 컴포넌트로 전달하는 함수 호출
    onSubmit(phoneNumber);
  };

  return (
    <View style={NumberInputStyles.container}>
      <View style={NumberInputStyles.inputContainer}>
        <TextInput
          style={NumberInputStyles.input}
          placeholder="전화번호"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={handleInputChange}
        />
      </View>
      <Text style={NumberInputStyles.text}>
        전화번호 입력은 당사 서비스약관 및 개인정보 보호정책에 동의하는{'\n'}
        것입니다. 감사합니다.
      </Text>
      <TouchableOpacity
        style={NumberInputStyles.nextButton}
        onPress={handleSubmit}>
        <Text style={NumberInputStyles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberInput;
