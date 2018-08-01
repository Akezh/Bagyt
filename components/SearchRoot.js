import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import MainUniversitiesEnter from './search/MainUniversitiesEnter'
import SearchScreen from './search/SearchScreen';

export default createStackNavigator(
  {
    SearchScreen:{
        screen:SearchScreen
    },
    MainUniversitiesEnter:{
      screen:MainUniversitiesEnter
    }
  },
  {headerBackTitleVisible :true,
  mode: 'modal', 
    headerMode: 'screen',
  }
);
