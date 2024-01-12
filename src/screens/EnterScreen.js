import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import EnterScreenStyles from '../styles/EnterScreenStyles';

const EnterScreen = () => {
  const navigation = useNavigation();

  // useEffect를 사용하여 화면이 로드될 때 한 번 실행되도록 설정
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // 2000ms(2초) 뒤에 NumberScreen으로 이동
      navigation.navigate('Number');
    }, 2000);

    // component가 언마운트되면 timeout을 클리어하여 메모리 누수 방지
    return () => clearTimeout(timeoutId);
  }, [navigation]); // navigation이 변경될 때마다 useEffect가 실행되도록 설정

  return (
    <View style={EnterScreenStyles.container}>
      <Text style={EnterScreenStyles.text}>Real</Text>
      <Text style={EnterScreenStyles.text}>Voice</Text>
    </View>
  );
};

export default EnterScreen;
