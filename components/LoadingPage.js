import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Animated,
	Image,
	Easing,
	AsyncStorage,
	TouchableOpacity,
	ActivityIndicator,
	Platform,
	Dimensions,
	ImageBackground,
} from 'react-native';
import { Container } from 'native-base';
import Mode from './ModeProvider';

const { height } = Dimensions.get('window');

export default class Colors extends Component {
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

	render() {
		const interpolateColor = this.animatedValue.interpolate({
			inputRange: [0, 150],
			outputRange: ['rgb(0,0,0)', 'rgb(51, 250, 170)'],
		});

		const RotateData = this.RotateValueHolder.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg'],
		});

		const animatedStyle = {
			backgroundColor: 'white',
			// transform: [{ translateY: this.animatedValue }]
		};

		return (
			<React.Fragment>
				<Container>
					<View style={styles.container}>
						<Image
							style={{
								width: 297,
								height: 139,
								left: 40,
							}}
							source={require('../assets/logoBagy.png')}
						/>
						<Animated.Image
							style={{
								bottom: 40,
								right: 80,
								width: 128,
								height: 146,
								transform: [{ rotate: RotateData }],
							}}
							source={require('../assets/logoT.png')}
						/>
						{/* <Animated.View>
              <Image
                style={animatedStyle}
                source={require("../assets/mulTriangle.png")}
              />>
            </Animated.View> */}
					</View>
				</Container>
				<View
					style={{
						backgroundColor: '#F94040',
					}}
				>
					<Mode setTimer={() => this.props.setTimer()} />
				</View>
			</React.Fragment>
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
	box: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	button: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white',
		padding: 10,
	},
});
