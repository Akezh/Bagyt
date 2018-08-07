import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo';

import HomeRoot from './HomeRoot';
import SearchRoot from './SearchRoot';
import FavouriteRoot from './favourites/FavouriteRoot';
import TestRoot from './test/TestRoot';

export default createBottomTabNavigator(
	{
		Универы: {
			screen: HomeRoot,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-list-box-outline" size={32} color={tintColor} />,
			},
		},
		Поиск: {
			screen: SearchRoot,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-search-outline" size={32} color={tintColor} />,
			},
		},
		Избранное: {
			screen: FavouriteRoot,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-star-outline" size={32} color={tintColor} />,
			},
		},
		Тесты: {
			screen: TestRoot,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-paper-outline" size={32} color={tintColor} />,
			},
		},
	},
	{
		tabBarPosition: 'bottom',
		tabBarOptions: {
			style: {
				paddingTop: 2,
				height: 50,
				backgroundColor: '#F94040',
			},
			activeTintColor: 'white',
			inactiveTintColor: '#3d3a3a',
			labelStyle: {
				fontSize: 12,
				backgroundColor: 'transparent',
			},
		},
		animationEnabled: true,
	}
);
