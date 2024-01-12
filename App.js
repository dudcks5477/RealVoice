import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EnterScreen from './src/screens/EnterScreen';
import NumberScreen from './src/auth/NumberScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Enter" component={EnterScreen} />
        <Stack.Screen
          name="Number"
          component={NumberScreen} // NumberScreen 추가
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
