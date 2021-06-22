/* eslint-disable react-native/no-inline-styles */

import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';

const Flexgrow = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          flex: 1,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default Flexgrow;
