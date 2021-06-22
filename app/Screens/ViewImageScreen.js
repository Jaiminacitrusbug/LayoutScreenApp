import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../Config/Colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.closeIcon}
        resizeMode="center"
        source={require('../Assets/images/left-arrow.png')}
      />
      <Image
        style={styles.deleteIcon}
        resizeMode="center"
        source={require('../Assets/images/cancel-icon.png')}
      />
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../Assets/images/banner-cover02.jpg')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default ViewImageScreen;
