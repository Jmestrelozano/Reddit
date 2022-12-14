// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderMain} from '../components/headers/HeaderMain';
import {StackTabNavigation} from './StackTabNavigation';
import WebViewScreen from '../screens/details/WebViewScreen';
import {RootStackParamList} from '../../domain/interfaces/global/global';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Publications">
        <Stack.Screen
          options={{
            headerBackground: () => <HeaderMain />,
          }}
          name="Publications"
          component={StackTabNavigation}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="WebViewDetails"
          component={WebViewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
