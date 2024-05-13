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
import AddMoreFriendsScreen from './src/screens/AddMoreFriendsScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import FriendsScreen from './src/screens/FriendsScreen';
import RequiredScreen from './src/screens/RequiredScreen';
import RequiredFriendScreen from './src/screens/RequiredFriendScreen.js';
import SendRequestFriendScreen from './src/screens/SendRequestFriendScreen';
import RecordScreen from './src/screens/RecordScreen.js';
import RecordingScreen from './src/screens/RecordingScreen.js';
import UploadMainScreen from './src/screens/UploadMainScreen.js';
import EditProfileScreen from './src/screens/EditProfileScreen.js';
import ProfileEditDetailScreen from './src/screens/ProfileEditDetailScreen.js';
import ChangeProfileScreen from './src/screens/ChangeProfileScreen.js';
import MemorySettingScreen from './src/screens/MemorySettingScreen.js';
import AlertSettingScreen from './src/screens/AlertSettingScreen.js';

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
        {/* <Stack.Screen name="RequiredFriend" component={RequiredFriendScreen} /> */}
        <Stack.Screen
          name="SendRequestFriend"
          component={SendRequestFriendScreen}
        />
        <Stack.Screen
          name="ProfileEditDetail"
          component={ProfileEditDetailScreen}
        />
        <Stack.Screen name="ChangeProfile" component={ChangeProfileScreen} />
        <Stack.Screen name="MemorySetting" component={MemorySettingScreen} />
        <Stack.Screen name="AlertSetting" component={AlertSettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
