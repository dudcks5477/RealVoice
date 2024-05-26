import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/components/SplashScreen';
import SignUpPhoneNumberScreen from './src/screens/auth/SignUpPhoneNumberScreen.js';
import PhoneVerificationScreen from './src/screens/auth/PhoneVerificationScreen.js';
import MicroPhonePermissionScreen from './src/screens/auth/MicroPhonePermissionScreen.js';
import NickNameScreen from './src/screens/auth/NickNameScreen.js';
import VoicePermissionScreen from './src/screens/auth/VoicePermissionScreen.js';

import MainScreen from './src/screens/MainScreen';
import AddFriendsScreen from './src/screens/AddFriendsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AddMoreFriendsScreen from './src/screens/AddMoreFriendsScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import FriendsScreen from './src/screens/FriendsScreen';
import RequiredScreen from './src/screens/RequiredScreen';
import SendRequestFriendScreen from './src/screens/SendRequestFriendScreen';
import RecordScreen from './src/screens/RecordScreen.js';
import RecordingScreen from './src/screens/RecordingScreen.js';
import UploadMainScreen from './src/screens/UploadMainScreen.js';
import EditProfileScreen from './src/screens/EditProfileScreen.js';
import ProfileEditDetailScreen from './src/screens/ProfileEditDetailScreen.js';
import MemorySettingScreen from './src/screens/MemorySettingScreen.js';
import AlertSettingScreen from './src/screens/AlertSettingScreen.js';
import PrivacyScreen from './src/screens/PrivacyScreen.js';
import BlockedScreen from './src/screens/BlockedScreen.js';
import HidedScreen from './src/screens/HidedScreen.js';
import WorldTimeScreen from './src/screens/WorldTimeScreen.js';
import OtherSettingScreen from './src/screens/OtherSettingScreen.js';
import HelpScreen from './src/screens/HelpScreen.js';
import HelpChooseScreen from './src/screens/HelpChooseScreen.js';
import InformationScreen from './src/screens/InformationScreen.js';

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
        <Stack.Screen name="NickName" component={NickNameScreen} />
        <Stack.Screen
          name="VoicePermission"
          component={VoicePermissionScreen}
        /> */}
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Record" component={RecordScreen} />
        <Stack.Screen name="Recording" component={RecordingScreen} />
        <Stack.Screen name="UploadMain" component={UploadMainScreen} />
        <Stack.Screen name="AddFriends" component={AddFriendsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="AddMoreFriends" component={AddMoreFriendsScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
        <Stack.Screen name="Required" component={RequiredScreen} />
        <Stack.Screen
          name="SendRequestFriend"
          component={SendRequestFriendScreen}
        />
        <Stack.Screen
          name="ProfileEditDetail"
          component={ProfileEditDetailScreen}
        />
        <Stack.Screen name="MemorySetting" component={MemorySettingScreen} />
        <Stack.Screen name="AlertSetting" component={AlertSettingScreen} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="Blocked" component={BlockedScreen} />
        <Stack.Screen name="Hided" component={HidedScreen} />
        <Stack.Screen name="WorldTime" component={WorldTimeScreen} />
        <Stack.Screen name="OtherSetting" component={OtherSettingScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="HelpChoose" component={HelpChooseScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
