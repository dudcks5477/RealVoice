import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EnterScreen from './src/screens/EnterScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Enter" component={EnterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
