import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const WelcomeScreenResponsive = props => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../Assets/images/banner-cover01.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../Assets/images/logo.png')}
        />
        <Text style={styles.welcomeFont}>Welcome to Icons</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStart}
        onPress={() => props.navigation.navigate('ViewImage')}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: wp('100%'),
    height: hp(7),
    backgroundColor: '#fc5c65',
  },
  welcomeFont: {
    fontSize: RFPercentage(3),
    color: '#fff',
  },
  logo: {
    // width: 100,
    // height: 100,
    // position: 'absolute',
    // top: 70,
  },
  registerButton: {
    width: wp('100%'),
    height: hp(7),
    backgroundColor: '#4ecdc4',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  buttonStart: {
    width: wp(30),
    height: hp(6),
    // width: 150,
    // height: 40,
    // padding: 10,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4ecdc4',
    color: 'red',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    bottom: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  getStartedText: {
    fontSize: RFPercentage(2),
    color: '#000',
  },
});

export default WelcomeScreenResponsive;
