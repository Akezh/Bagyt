import React, {Component} from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeRoot from './HomeRoot';
import Constants from 'expo';


export default TabNavigator(
    {
      Home: { screen: HomeRoot },
    },
    {
      initialRouteName: 'Home',
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home-outline${focused ? '' : '-outline'}`;
          }
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {},
        tabStyle: {
          width: 100,
        },
        style: {
          marginTop: Constants.statusBarHeight,
        },
      },
      animationEnabled: false,
      swipeEnabled: false,
    }
  );