import React, {useEffect, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import SplashScreenStyles from '../styles/splashScreenStyle';

const SplashScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 2000);

    return () => clearTimeout(timer);
  }, [fadeAnim]);

  return (
    <View style={SplashScreenStyles.container}>
      <Animated.View style={{opacity: fadeAnim}}>
        <Text style={SplashScreenStyles.text}>Real</Text>
        <Text style={SplashScreenStyles.text}>Voice</Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
