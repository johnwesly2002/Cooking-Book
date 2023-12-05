import React from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        style={styles.mainContainer}
        source={require('../../assets/Cookbackground.png')}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.Text}>Get Started</Text>
          <Icon name="arrow-forward" size={20} style={styles.delete} />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
export default OnBoardingScreen;
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
  },
  headerText: {
    fontSize: 45,
    marginTop: '10%',
    marginLeft: '5%',
    color: '#E3A428',
    fontFamily: 'LuckiestGuy-Regular',
  },
  lottie: {
    height: 300,
    width: 300,
    marginLeft: 30,
  },
  delete: {
    color: 'white',
    justifyContent: 'center',
    marginTop: 14,
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'black',
    width: '65%',
    height: '7%',
    // margin: 15,
    marginTop: '160%',
    marginLeft: 65,
    borderRadius: 50,
    flexDirection: 'row',
  },
  Text: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 13,
    marginLeft: '30%',
    fontFamily: 'LuckiestGuy-Regular',
    fontSize: 15,
  },
  text: {
    fontSize: 45,
    marginLeft: '5%',
    color: '#E3A428',
    fontFamily: 'LuckiestGuy-Regular',
  },
});
