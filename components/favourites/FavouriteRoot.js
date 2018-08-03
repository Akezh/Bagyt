import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import DetailUniversities from '../universities/DetailUniversities';
import FavouriteList from './FavouriteList';

export default createStackNavigator(
	{
		FavouriteList: {
			screen: FavouriteList,
			navigationOptions: {
				title: 'Избранное',
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#F94040',
				},
			},
		},
		DetailUniversities: {
			screen: DetailUniversities,
			navigationOptions: {
				title: 'Университет',
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#F94040',
				},
			},
		},
	},
	{
		headerBackTitleVisible: true,
		headerMode: 'screen',
	}
);
