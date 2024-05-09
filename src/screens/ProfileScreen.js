import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleUploadMain = () => {
    navigation.navigate('UploadMain');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setIsPlaying(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <View style={Common.container}>
      <Image
        source={require('../assets/sample.jpg')}
        style={profileScreenStyle.image}
      />
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleUploadMain}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>사용자명</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={mainScreenStyle.buttonContainer}
          onPress={handleEditProfile}>
          <Icon name="more-vert" style={profileScreenStyle.icon} />
        </TouchableOpacity>
      </View>
      <View style={profileScreenStyle.bottomTextContainer}>
        <Text style={profileScreenStyle.bottomText}>사용자명</Text>
        <TouchableOpacity>
          <Icon name="share" style={profileScreenStyle.iconShare} />
        </TouchableOpacity>
      </View>

      <View style={profileScreenStyle.introContainer}>
        <Text style={profileScreenStyle.introFix}>자기소개란</Text>
        <Text style={profileScreenStyle.country}>KOREA</Text>
        <Text style={profileScreenStyle.country}>
          N년 전에 RealVoice에 가입했습니다.
        </Text>
      </View>
      <View style={profileScreenStyle.userMemorizeContainer}>
        <View style={profileScreenStyle.memorizeHeader}>
          <Text style={profileScreenStyle.memorizeFix}>회원님의 추억들</Text>
          <View style={profileScreenStyle.memorizeHeader}>
            <Icon name="lock" style={profileScreenStyle.iconLock} />
            <Text style={profileScreenStyle.country}>당신에게만 보입니다.</Text>
          </View>
        </View>
        <View style={profileScreenStyle.calenderContainer}>
          <Text style={profileScreenStyle.calenderHeader}>지난 20일들</Text>
          <View style={profileScreenStyle.calenderBtnContainer}>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>10</Text>
                <Icon
                  name={isPlaying ? 'pause' : 'play-arrow'}
                  style={profileScreenStyle.iconPlay}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>11</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>12</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>13</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>14</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={profileScreenStyle.calenderBtnContainer}>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>15</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>16</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>17</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>18</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>19</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={profileScreenStyle.calenderBtnContainer}>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>20</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>21</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>22</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>23</Text>
                {/* <Icon name="play-arrow" style={profileScreenStyle.iconPlay} /> */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>24</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={profileScreenStyle.calenderBtnContainer}>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>25</Text>
                {/* <Icon name="play-arrow" style={profileScreenStyle.iconPlay} /> */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>26</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>27</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>28</Text>
                <Icon name="play-arrow" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <View style={profileScreenStyle.calenderBtn}>
                <Text style={profileScreenStyle.calenderDay}>29</Text>
                <Icon name="circle" style={profileScreenStyle.iconPlay} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
