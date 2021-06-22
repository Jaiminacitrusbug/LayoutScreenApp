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

const WelcomeScreen = props => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../Assets/images/banner-cover01.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../Assets/images/logo.png')}
        />
        <Text>Welcome to Icons</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStart}
        onPress={() => props.navigation.navigate('ViewImage')}>
        <Text>Get Started</Text>
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
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  logo: {
    // width: 100,
    // height: 100,
    // position: 'absolute',
    // top: 70,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  buttonStart: {
    width: 150,
    height: 40,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4ecdc4',
    color: 'red',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    bottom: 10,
    // justifyContent: 'space-between',
  },
});

export default WelcomeScreen;
