import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {stylesStackTabView} from '../styles/navigations/stylesStackTabView';
import PublicationScreen from '../screens/publications/PublicationScreen';
import {RootStackTabParamList} from '../../domain/interfaces/global/global';

const Tab: any = createMaterialTopTabNavigator<RootStackTabParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="New"
      screenOptions={{
        tabBarIndicatorStyle: stylesStackTabView.indicatorTabBar,
        tabBarLabelStyle: stylesStackTabView.labelTabBar,
        tabBarStyle: stylesStackTabView.bgTabBar,
      }}>
      <Tab.Screen
        name="New"
        component={PublicationScreen}
        options={{tabBarLabel: 'New'}}
      />
      <Tab.Screen
        name="Top"
        component={PublicationScreen}
        options={{tabBarLabel: 'Top'}}
      />
      <Tab.Screen
        name="Hot"
        component={PublicationScreen}
        options={{tabBarLabel: 'Hot'}}
      />

      <Tab.Screen
        name="Controversial"
        component={PublicationScreen}
        options={{tabBarLabel: 'Contr...'}}
      />
    </Tab.Navigator>
  );
};
export const StackTabNavigation = () => {
  return <Tabs />;
};
