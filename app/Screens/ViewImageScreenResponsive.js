import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ViewImageScreenResponsive = () => {
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
    width: wp('100%'),
    height: hp('100%'),
  },
  closeIcon: {
    width: wp(12),
    height: wp(12),
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: wp(12),
    height: wp(12),
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

export default ViewImageScreenResponsive;
