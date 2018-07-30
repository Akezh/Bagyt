import React, {Component} from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeRoot from './HomeRoot';
import SearchScreen from './search/SearchScreen';
import Constants from 'expo';


export default TabNavigator(
  {
    Артисты: {
      screen: HomeRoot,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-list-box-outline" size={32} color={tintColor} />
        ),
      },
    },
    Поиск: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-analytics-outline" size={32} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
  }
  );