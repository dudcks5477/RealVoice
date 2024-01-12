import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EnterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Real</Text>
      <Text style={styles.text}>Voice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default EnterScreen;
