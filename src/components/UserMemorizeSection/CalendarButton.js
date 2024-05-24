import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import profileScreenStyle from '../../styles/profileScreenStyle';

const CalendarButton = ({day, isPlaying, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={profileScreenStyle.calenderBtn}>
        {/* 오늘 날짜 로직이 없어서 표시가 안됨 */}
        <Text style={profileScreenStyle.calenderDay}>{day}</Text>
        <Icon
          name={isPlaying ? 'pause' : 'play-arrow'}
          style={profileScreenStyle.iconPlay}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CalendarButton;
