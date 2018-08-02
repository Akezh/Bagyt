import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, PanResponder, FlatList, Image } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json
const colors = ['aSS', '#FFFF', '#F94040', '#'];
export default class App extends Component {
	state = {
		cardsPan: new Animated.ValueXY(),
		cardsStackedAnim: new Animated.Value(0), // add this statement
		currentIndex: 0,
	};
	static navigationOptions = {
		header: null,
	};
	cardsPanResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onStartShouldSetPanResponderCapture: () => true,
		onMoveShouldSetPanResponder: () => true,
		onMoveShouldSetPanResponderCapture: () => true,
		onPanResponderMove: (event, gestureState) => {
			this.state.cardsPan.setValue({
				x: gestureState.dx,
				y: this.state.cardsPan.y,
				cardsStackedAnim: new Animated.Value(0), // add this statement
				currentIndex: 0,
			});
		},
		onPanResponderTerminationRequest: () => false,
		onPanResponderRelease: (event, gestureState) => {
			// bring the translationX back to 0
			Animated.timing(this.state.cardsPan, {
				toValue: 0,
				duration: 800,
			}).start();
			// will be used to interpolate values in each view
			Animated.timing(this.state.cardsStackedAnim, {
				toValue: 1,
				duration: 300,
			}).start(() => {
				// reset cardsStackedAnim's value to 0 when animation ends
				this.state.cardsStackedAnim.setValue(0);
				// increment card position when animation ends
				this.setState({
					currentIndex: this.state.currentIndex + 1,
				});
			});
		},
	});

	render() {
		const a = 0;
		const num = 4;

		return (
			<View style={styles.container}>
				{colors.map(item => (
					<Animated.View
						{...this.cardsPanResponder.panHandlers}
						style={{
							flex: 1,
							width: 250,
							height: 350 + colors.indexOf(item) * 10,
							marginHorizontal: 20,
							position: 'absolute',
							backgroundColor: '#FFFF',
							zIndex: colors.indexOf(item),
							right: this.state.cardsStackedAnim.interpolate({
								inputRange: [0, 1],
								outputRange: [
									(colors.indexOf(item) * 50) / num,
									50 - (colors.indexOf(item) * 40) / num,
								],
							}),
							opacity: this.state.cardsStackedAnim.interpolate({
								inputRange: [0, 1],
								outputRange: [1, 0.3],
							}),
							transform: [
								{ translateX: this.state.cardsPan.x },
								{
									scale: this.state.cardsStackedAnim.interpolate({
										inputRange: [0, 1],
										outputRange: [1, 0.9],
									}),
								},
							],
						}}
					>
						<View style={styles.imageView}>
							<Image style={styles.image} source={require('./4.jpg')} />
						</View>
						<View style={styles.textView}>
							<Text style={styles.text}>К чему лежит ваша душа?</Text>
						</View>
						<View style={styles.questView}>
							<Text style={styles.quest}>Вопрос 17</Text>
						</View>

						<Icon style={styles.backIcon} name="star" type="entypo" size={40} color="#FFFF" />
						<Icon style={styles.backIcon} name="star" type="entypo" size={40} color="#FFFF" />
						<Icon style={styles.backIcon} name="star" type="entypo" size={40} color="#FFFF" />
						<Icon style={styles.backIcon} name="star-outlined" type="entypo" size={40} color="#FFFF" />
						<Icon style={styles.backIcon} name="star-outlined" type="entypo" size={40} color="#FFFF" />
					</Animated.View>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#F94040',
		padding: 50,
	},
	imageView: {
		margin: 5,
		height: '50%',
		width: '90%',
	},
	quest: {
		fontSize: 10,
		color: '#F94040',
		marginVertical: 20,
	},
	questView: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
	},

	image: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
		margin: 5,
	},
	textView: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 17,
		color: '#F94040',
		marginVertical: 20,
		fontWeight: 'bold',
	},
});
