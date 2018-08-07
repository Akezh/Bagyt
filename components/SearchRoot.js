import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import MainUniversitiesEnter from './search/MainUniversitiesEnter';
import SearchScreen from './search/SearchScreen';
import DetailUniversities from './universities/DetailUniversities';
import FilterScreen from './universities/FilterScreen';

export default createStackNavigator(
	{
		SearchScreen: {
			screen: SearchScreen,
			navigationOptions: {
				title: 'Поиск по баллам ЕНТ',
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#F94040',
				},
			},
		},
		MainUniversitiesEnter: {
			screen: MainUniversitiesEnter,
			navigationOptions: {
				title: 'Результаты',
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#F94040',
				},
			},
		},
		DetailUniversities: {
			screen: DetailUniversities,
		},
		FilterScreen: {
			screen: FilterScreen,
		},
	},
	{
		headerBackTitleVisible: true,
		mode: 'modal',
		headerMode: 'screen',
	}
);
