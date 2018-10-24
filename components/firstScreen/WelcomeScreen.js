import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import TextBagyt from './TextBagyt';
import GetData from './GetData';

export default class WelcomeScreen extends Component {
	state = {
		screen: 'SplashScreen',
	};
	retrieveData = async () => {
		try {
			const screen = await AsyncStorage.getItem('Screen');

			if (screen !== null) {
				this.setState({
					screen: JSON.parse(screen),
				});
			}
		} catch (error) {
			console.log('Error retrieving data', error);
		}
	};
	componentWillMount() {
		this.retrieveData();
	}

	setTimer = () => {
		this.timeoutHandle = setTimeout(() => {
			this.props.navigation.navigate(this.state.screen);
		}, 2000);
	};

	render() {
		return (
			<React.Fragment>
				<TextBagyt />
				<View style={styles.dataView}>
					<GetData setTimer={() => this.setTimer()} />
				</View>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	dataView: {
		backgroundColor: '#F94040',
		position: 'absolute',
	},
});
