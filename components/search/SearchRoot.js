import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import MainUniversities from '../universities/MainUniversities'
import SearchScreen from './SearchScreen';

export default createStackNavigator(
  {
    SearchScreen:{
        screen:SearchScreen
    },
    MainUniversities:{
      screen:MainUniversities
    }
  },
  {headerBackTitleVisible :true,
  mode: 'modal', 
    headerMode: 'screen',
  }
);
