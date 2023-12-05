/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import AddRecipeScreen from '../Screens/AddRecipeScreen';
import MaterialIcon from 'react-native-vector-icons/AntDesign';
import IoniIcon from 'react-native-vector-icons/Ionicons';

import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();
const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#E3A428',
        tabBarStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0)',
        },
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarStyle: {
            width: '90%',
            height: '8%',
            marginBottom: 10,
            marginLeft: 20,
            borderRadius: 20,
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialIcon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="AddRecipe"
        component={AddRecipeScreen}
        options={{
          tabBarStyle: {
            width: '90%',
            height: '8%',
            marginBottom: 10,
            marginLeft: 20,
            borderRadius: 20,
          },
          tabBarLabel: 'AddRecipe',
          tabBarIcon: ({color}) => (
            <IoniIcon name="add-circle-sharp" color={color} size={50} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: {
            width: '90%',
            height: '8%',
            marginBottom: 10,
            marginLeft: 20,
            borderRadius: 20,
          },
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialIcon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
