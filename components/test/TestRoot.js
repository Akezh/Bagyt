import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import TestList from './TestList';

import TestData from './TestData';
import TestMain from './TestMain';
import TestAnswer from './TestAnswer';

export default createStackNavigator(
	{
		TestList: {
			screen: TestList,
		},
		TestMain: {
			screen: TestMain,
		},
		TestData: {
			screen: TestData,
		},
		TestAnswer: {
			screen: TestAnswer,
		},
	},
	{
		headerBackTitleVisible: true,
		headerMode: 'screen',
	}
);
