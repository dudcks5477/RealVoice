import 'react-native-get-random-values';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RecordingProvider} from './src/services/RecordingContext.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {auth} from './src/services/firebase.js';
import {onAuthStateChanged} from 'firebase/auth';
import uuid from 'react-native-uuid';

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
  const [initialRoute, setInitialRoute] = useState('Splash');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState({
    userUuid: '',
    phoneNumber: '',
    callingCode: '+82',
    nickName: '',
  });

  useEffect(() => {
    const generatedUuid = uuid.v4();
    setUserData(prevState => ({
      ...prevState,
      userUuid: generatedUuid,
    }));

    const checkAuthStatus = async () => {
      onAuthStateChanged(auth, user => {
        if (user) {
          setIsSignedIn(true);
          setInitialRoute('MainScreen');
        } else {
          setIsSignedIn(false);
          setInitialRoute('SignUpPhoneNumber');
        }
      });
    };
    checkAuthStatus();
  }, []);
  // try {
  //   const isSignedUp = await AsyncStorage.getItem('isSignedUp');
  //   if (isSignedUp === 'true') {
  //     setInitialRoute('MainScreen');
  //   } else {
  //     console.log('회원가입이 필요한 사용자입니다.');
  //   }
  // } catch (error) {
  //   console.error('AsyncStorage error: ', error);
  // }
  //   };
  //   checkSignUpStatus();
  // }, []);

  return (
    <RecordingProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="SignUpPhoneNumber">
            {props => (
              <SignUpPhoneNumberScreen
                {...props}
                userData={userData}
                setUserData={setUserData}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="PhoneVerification"
            component={PhoneVerificationScreen}
          />
          <Stack.Screen
            name="MicroPhonePermission"
            component={MicroPhonePermissionScreen}
          />
          <Stack.Screen name="NickName">
            {props => (
              <NickNameScreen
                {...props}
                userData={userData}
                setUserData={setUserData}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="VoicePermission">
            {props => <VoicePermissionScreen {...props} userData={userData} />}
          </Stack.Screen>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Record" component={RecordScreen} />
          <Stack.Screen name="Recording" component={RecordingScreen} />
          <Stack.Screen name="UploadMain" component={UploadMainScreen} />
          <Stack.Screen name="AddFriends" component={AddFriendsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen
            name="AddMoreFriends"
            component={AddMoreFriendsScreen}
          />
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
    </RecordingProvider>
  );
};

export default App;
