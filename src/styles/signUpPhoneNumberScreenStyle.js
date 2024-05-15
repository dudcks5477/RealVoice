import {StyleSheet} from 'react-native';

const signUpPhoneNumberScreenStyle = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNumber: {
    height: 40,
    width: 340,
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
    borderColor: 'gray',
    backgroundColor: '#fff',
    color: '#000',
  },
  text: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default signUpPhoneNumberScreenStyle;
