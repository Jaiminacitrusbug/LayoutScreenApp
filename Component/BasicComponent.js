/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  StatusBar,
  Button,
  ActivityIndicator,
  Alert,
  View,
} from 'react-native';

const BasicComponent = () => {
  const handlePress = () => {
    console.log('Text click');
  };
  return (
    <View style={styles.sectionContainer}>
      <Text numberOfLines={2} onPress={handlePress}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like).
      </Text>
      <TouchableHighlight
        onPress={() => {
          console.log('TouchableHighlight');
        }}>
        <Image
          source={require('./assets/images/download.jpg')}
          // blurRadius={10}
          style={{height: 100, width: 100}}
          fadeDuration={1000}
          resizeMode="stretch"
        />
      </TouchableHighlight>
      <TouchableOpacity
        onPress={() => {
          console.log('TouchableOpacity');
        }}>
        <Image
          source={require('./assets/images/download.jpg')}
          // blurRadius={10}
          fadeDuration={1000}
          resizeMode="stretch"
        />
      </TouchableOpacity>
      {/* <TouchableWithoutFeedback
        onPress={() => {
          console.log('TouchableWithoutFeedback');
        }}>
        <Image
          source={require('./assets/images/download.jpg')}
          // blurRadius={10}
          fadeDuration={1000}
          resizeMode="stretch"
        />
      </TouchableWithoutFeedback>
      <TouchableNativeFeedback
        onPress={() => {
          console.log('TouchableWithoutFeedback');
        }}>
        <View style={{height: 50, width: 100, backgroundColor: 'blue'}} />
      </TouchableNativeFeedback> */}
      <TouchableOpacity
        // title="click Me"
        color="grey"
        onPress={() => {
          Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }}>
        <Text>click here</Text>
      </TouchableOpacity>
      {/* <ActivityIndicator
        size="large"
        color="#0000ff"
        style={{
          // color: 'red',
          backgroundColor: 'black',
          opacity: 0.8,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    // backgroundColor: 'blue',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
  },
});

export default BasicComponent;
