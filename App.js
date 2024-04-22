import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/components/SplashScreen';
import SignUpPhoneNumberScreen from './src/screens/SignUpPhoneNumberScreen';
import PhoneVerificationScreen from './src/screens/PhoneVerificationScreen';
import MicroPhonePermissionScreen from './src/screens/MicroPhonePermissionScreen';
import NickNameScreen from './src/screens/NickNameScreen';
import VoicePermissionScreen from './src/screens/VoicePermissionScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="SignUpPhoneNumber"
          component={SignUpPhoneNumberScreen}
        />
        <Stack.Screen
          name="PhoneVerification"
          component={PhoneVerificationScreen}
        />
        <Stack.Screen
          name="MicroPhonePermission"
          component={MicroPhonePermissionScreen}
        />
        <Stack.Screen name="NickName" component={NickNameScreen} />
        <Stack.Screen
          name="VoicePermission"
          component={VoicePermissionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
