import {StyleSheet} from 'react-native';

const NumberInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: 306,
    color: 'black',
  },
  text: {
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    width: 160,
    height: 53,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  nextButtonText: {
    color: 'white',
    opacity: 0.5,
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default NumberInputStyles;
