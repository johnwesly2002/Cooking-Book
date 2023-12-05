import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {GoogleSignin} from 'react-native-google-signin';

const Profile = () => {
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      AsyncStorage.removeItem('token');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>signOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
