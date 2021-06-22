/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
// flexDirection : ['row','row-reverse','column', 'column-reverse']
// justifyContent : align item to main axes
// alignItems : align item to secondary axes
const FlexDirection = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          height: 50,
          width: 100,
          //   alignSelf: 'stretch',
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          height: 50,
        //   width: 100,
          flexBasis: 100, // basis to main axis
          flexGrow: 1, // same as flex
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          height: 50,
          width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'grey',
          height: 50,
          width: 100,
        //   flexShrink: 1,
        }}
      />
      <View
        style={{
          backgroundColor: 'greenyellow',
          height: 50,
          width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'pink',
          height: 50,
          width: 100,
        }}
      />
    </View>
  );
};

export default FlexDirection;
