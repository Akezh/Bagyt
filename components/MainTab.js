import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeRoot from './HomeRoot';
import SearchScreen from './search/SearchScreen';
import Constants from 'expo';

export default createBottomTabNavigator(
	{
		Универы: {
			screen: HomeRoot,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-list-box-outline" size={32} color={tintColor} />,
			},
		},
		Поиск: {
			screen: SearchScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-analytics-outline" size={32} color={tintColor} />,
			},
		},
	},
	{
		tabBarPosition: 'bottom',
	}
);
