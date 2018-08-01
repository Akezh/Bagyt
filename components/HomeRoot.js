import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import ListSpecialists from './specialists/ListSpecialists';
import DetailSpecialists from './specialists/DetailSpecialists';
import HomeScrollTab from './HomeScrollTab';
import DetailUniversities from './universities/DetailUniversities';
import ListUniversities from './universities/ListUniversities';
import FilterScreen from './universities/FilterScreen';
import MainUniversities from './universities/MainUniversities'
import SearchScreen from './search/SearchScreen';

export default createStackNavigator(
  {
    Specialists: {
      screen: HomeScrollTab
    },
    ListSpecialists: {
      screen: ListSpecialists,
    },
    DetailSpecialists: {
      screen: DetailSpecialists,
    },
    DetailUniversities:{
        screen:DetailUniversities
    },
    ListUniversities:{
        screen:ListUniversities
    },
    FilterScreen:{
        screen: FilterScreen
    }
  },
  {headerBackTitleVisible :true,
  mode: 'modal', 
    headerMode: 'screen',
  }
);
