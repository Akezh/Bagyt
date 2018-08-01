import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeRoot from './HomeRoot';
import SearchRoot from './search/SearchRoot';
import Constants from 'expo';

export default createBottomTabNavigator(
	{	Поиск: {
			screen: SearchRoot,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-analytics-outline" size={32} color={tintColor} />,
			},
		},
		Универы: {
			screen: HomeRoot,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-list-box-outline" size={32} color={tintColor} />,
			},
		},
	
	},
	{
		tabBarPosition: 'bottom',
	}
);
