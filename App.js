import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/components/SplashScreen';
import SignUpPhoneNumberScreen from './src/screens/SignUpPhoneNumberScreen';
import PhoneVerificationScreen from './src/screens/PhoneVerificationScreen';
import MicroPhonePermissionScreen from './src/screens/MicroPhonePermissionScreen';
import NickNameScreen from './src/screens/NickNameScreen';
import VoicePermissionScreen from './src/screens/VoicePermissionScreen';
import AddFriendsScreen from './src/screens/AddFriendsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import MainScreen from './src/screens/MainScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Splash" component={SplashScreen} />
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
        <Stack.Screen name="NickName" component={NickNameScreen} /> */}
        {/* <Stack.Screen
          name="VoicePermission"
          component={VoicePermissionScreen}
        /> */}
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="AddFriends" component={AddFriendsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
