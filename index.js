import { createStackNavigator, TabNavigator } from 'react-navigation';
import React from 'react';
import { View } from 'react-native';

import LoadingPage from './components/LoadingPage';
import IntroScreen from './components/IntroScreen';
import ModeProvider from './components/ModeProvider';
import MainTab from './components/MainTab';

export default class NavigatorClass extends React.Component {
	state = {
		screen: 'LoadingPage',
		universities: [],
	};

	componentWillUnmount() {
		clearTimeout(this.timeoutHandle);
	}

	setUniversity = universities => {
		// this.setState({ universities });
	};
	componentDidMount() {
		// Start counting when the page is loaded
	}

	setTimer = () => {
		this.timeoutHandle = setTimeout(() => {
			// Add your logic for the transition
			this.setState({ screen: 'IntroScreen' });
		}, 5000);
	};
	changeScreen = screen => {
		this.setState({
			screen: screen,
		});
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.state.screen === 'LoadingPage' && (
					<LoadingPage setUniversity={this.setUniversity} setTimer={this.setTimer()} />
				)}
				{this.state.screen === 'IntroScreen' && (
					<IntroScreen changeScreen={screen => this.changeScreen(screen)} />
				)}
				{this.state.screen === 'MainTab' && <MainTab />}
			</View>
		);
	}
}
