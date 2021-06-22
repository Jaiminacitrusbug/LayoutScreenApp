/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import BasicComponent from './Component/BasicComponent';
import LayoutDimension from './Component/LayoutDimension';
import Flexbox from './Component/Flexbox/Flexbox';
import WelcomeScreen from './app/Screens/WelcomeScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ViewImageScreenResponsive from './app/Screens/ViewImageScreenResponsive';
import WelcomeScreenResponsive from './app/Screens/WelcomeScreenResponsive';
import KeyboardAvoidingViewExample from './Component/KeyboardAvoidingComponent';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeResponsiveScreen">
          <Stack.Screen name="Home" component={WelcomeScreen} />
          <Stack.Screen name="ViewImage" component={ViewImageScreen} />
          <Stack.Screen
            name="KeyboardAvoidingViewExample"
            component={KeyboardAvoidingViewExample}
          />
          <Stack.Screen name="BasicComponent" component={BasicComponent} />
          <Stack.Screen name="LayoutDimension" component={LayoutDimension} />
          <Stack.Screen name="Flexbox" component={Flexbox} />

          <Stack.Screen
            name="ViewImageResponsiveScreen"
            component={ViewImageScreenResponsive}
          />
          <Stack.Screen
            name="WelcomeResponsiveScreen"
            component={WelcomeScreenResponsive}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
