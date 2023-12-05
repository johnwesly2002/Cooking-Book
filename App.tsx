import React, {useEffect, useState} from 'react';
import OnBoardingScreen from './src/Screens/onBoardingscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabBar from './src/Navigation/BottomTabBar';
import LoginScreen from './src/Screens/LoginScreen';
import {GoogleSignin} from 'react-native-google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="onBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  const fetchUserInfo = async () => {
    try {
      await GoogleSignin.configure({
        webClientId:
          '1076925217348-c8p50v8oeo7gmcokdh7ned5ukvk1kq4h.apps.googleusercontent.com',
      });

      // Retrieve the user token from AsyncStorage
      const usrInfo = await GoogleSignin.signIn();
      const token = await AsyncStorage.getItem('token');

      if (token) {
        AsyncStorage.setItem('token', JSON.stringify(usrInfo));
        // If the token is present, set the user info and navigate to the BottomTabBar
        setUserInfo(JSON.parse(token));
      } else {
        console.log('Error in firebase not loggedin');
      }
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <NavigationContainer>
      {userInfo === null ? <StackNavigation /> : <BottomTabBar />}
    </NavigationContainer>
  );
};

export default App;
