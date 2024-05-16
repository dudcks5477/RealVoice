import React, {useState} from 'react';
import {View, Text, Picker} from 'react-native';

const CountryPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <View>
      <Text>선택된 나라: {selectedCountry}</Text>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue, itemIndex) => setSelectedCountry(itemValue)}>
        <Picker.Item label="미국" value="usa" />
        <Picker.Item label="영국" value="uk" />
        <Picker.Item label="일본" value="japan" />
        {/* 기타 등등 다른 나라들 */}
      </Picker>
    </View>
  );
};

export default CountryPicker;
