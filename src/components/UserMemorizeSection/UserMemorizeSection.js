import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarButton from './CalendarButton';
import profileScreenStyle from '../../styles/profileScreenStyle';

const UserMemorizeSection = ({isPlaying, togglePlayPause}) => {
  return (
    <View style={profileScreenStyle.userMemorizeContainer}>
      <View style={profileScreenStyle.memorizeHeader}>
        <Text style={profileScreenStyle.memorizeFix}>회원님의 추억들</Text>
        <View style={profileScreenStyle.memorizeHeader}>
          <Icon name="lock" style={profileScreenStyle.iconLock} />
          <Text style={profileScreenStyle.country}>당신에게만 보입니다</Text>
        </View>
      </View>
      <View style={profileScreenStyle.calenderContainer}>
        <Text style={profileScreenStyle.calenderHeader}>지난 20일들</Text>
        <View style={profileScreenStyle.calenderBtnContainer}>
          {[10, 11, 12, 13, 14].map(day => (
            <CalendarButton
              key={day}
              day={day}
              isPlaying={isPlaying}
              onPress={togglePlayPause}
            />
          ))}
        </View>
        <View style={profileScreenStyle.calenderBtnContainer}>
          {[15, 16, 17, 18, 19].map(day => (
            <CalendarButton
              key={day}
              day={day}
              isPlaying={isPlaying}
              onPress={togglePlayPause}
            />
          ))}
        </View>
        <View style={profileScreenStyle.calenderBtnContainer}>
          {[20, 21, 22, 23, 24].map(day => (
            <CalendarButton
              key={day}
              day={day}
              isPlaying={isPlaying}
              onPress={togglePlayPause}
            />
          ))}
        </View>
        <View style={profileScreenStyle.calenderBtnContainer}>
          {[25, 26, 27, 28, 29].map(day => (
            <CalendarButton
              key={day}
              day={day}
              isPlaying={isPlaying}
              onPress={togglePlayPause}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default UserMemorizeSection;
