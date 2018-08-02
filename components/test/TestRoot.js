import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import TestList from './TestList'

export default createStackNavigator(
  {
    TestList:{
        screen:TestList
    },
  },
  {headerBackTitleVisible :true,
    //mode: 'modal', 
    headerMode: 'screen',
  }
);
