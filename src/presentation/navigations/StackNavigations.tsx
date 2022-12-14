// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderMain} from '../components/headers/HeaderMain';
import {StackTabNavigation} from './StackTabNavigation';

const Stack = createNativeStackNavigator();

export const StackNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen
          options={{
            headerBackground: () => <HeaderMain />,
          }}
          name="Home"
          component={StackTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
