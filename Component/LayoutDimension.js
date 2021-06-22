/* eslint-disable react-native/no-inline-styles */
import {
  useDeviceOrientation,
  useDimensions,
} from '@react-native-community/hooks';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

const LayoutDimension = () => {
  console.log('Dimesion.get("window")', Dimensions.get('window'));
  console.log('useDimesion', useDimensions());
  console.log('useDeviceOrientation', useDeviceOrientation());
  const {landscape} = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '100%',
          height: landscape ? '100%' : '30%',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
  },
});

export default LayoutDimension;
