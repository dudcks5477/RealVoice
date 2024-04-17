import {StyleSheet} from 'react-native';

const Common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 27,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  assign: {
    color: '#6178F1',
    textDecorationLine: 'underline',
  },
  nextBtn: {
    backgroundColor: '#fff',
    width: 160,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  nextBtnContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  nextBtnText: {
    color: '#000',
    fontSize: 16,
  },
});
export default Common;
