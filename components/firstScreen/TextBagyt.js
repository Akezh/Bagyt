import React, { Component } from 'react';
import { StyleSheet, View, Animated, Image, Easing } from 'react-native';
import { Container } from 'native-base';

export default class TextBagyt extends Component {
	constructor() {
		super();

		this.RotateValueHolder = new Animated.Value(0);
	}

	componentWillMount() {
		this.animatedValue = new Animated.Value(0);
	}
	componentDidMount() {
		this.StartImageRotateFunction();
		Animated.timing(this.animatedValue, {
			toValue: 530,
			duration: 3000,
		}).start();
	}

	StartImageRotateFunction() {
		this.RotateValueHolder.setValue(0);

		Animated.timing(this.RotateValueHolder, {
			toValue: 1,
			duration: 3000,
			easing: Easing.linear,
		}).start();
	}

	componentWillUnmount() {
		clearTimeout(this.timeoutHandle);
	}

	render() {
		const RotateData = this.RotateValueHolder.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg'],
		});

		return (
			<Container>
				<View style={styles.container}>
					<Image style={styles.textBagy} source={require('./img/logoBagy.png')} />
					<Animated.Image
						style={[
							styles.textAnimated,
							{
								transform: [{ rotate: RotateData }],
							},
						]}
						source={require('./img/logoT.png')}
					/>
				</View>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F94040',
		flexDirection: 'row',
	},
	textAnimated: {
		bottom: 5,
		right: 80,
		width: 128,
		height: 146,
	},
	textBagy: {
		width: 297,
		height: 139,
		left: 40,
	},
});
