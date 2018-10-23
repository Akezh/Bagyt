import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated, PanResponder, Dimensions, Image } from 'react-native';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const window = Dimensions.get('window');

export default class App extends Component {
	state = {
		cardsPan: new Animated.ValueXY(),
		cardsStackedAnim: new Animated.Value(0), // add this statement
		currentIndex: 1,
		testArr: global.data.allTests,
	};
	static navigationOptions = {
		header: null,
	};
	cardsPanResponder = PanResponder.create({
		onMoveShouldSetPanResponder: () => false,
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
			Animated.timing(this.state.cardsPan, {
				toValue: 0,
				duration: 800,
			}).start();
			Animated.timing(this.state.cardsStackedAnim, {
				toValue: 1,
				duration: 300,
			}).start(() => {
				this.state.cardsStackedAnim.setValue(0);
				this.setState({
					currentIndex: this.state.currentIndex === 2 ? 0 : this.state.currentIndex + 1,
				});
			});
		},
	});

	render() {
		const num = 3;
		const { testArr } = this.state;

		return (
			<React.Fragment>
				<View style={styles.container}>
					{testArr.map(item => (
						<Animated.View
							{...this.cardsPanResponder.panHandlers}
							style={{
								flex: 1,
								width: '100%',
								height: window.height * 0.7 + testArr.indexOf(item) * 10,
								marginHorizontal: 20,
								marginTop: '7%',
								marginBottom: '5%',
								position: 'absolute',
								backgroundColor: '#F94040',
								zIndex: testArr.indexOf(item),

								right: this.state.cardsStackedAnim.interpolate({
									inputRange: [0, 1],
									outputRange: [
										(testArr.indexOf(item) * 50) / num,
										50 - (testArr.indexOf(item) * 40) / num,
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
							<View style={styles.main}>
								<View style={styles.imageView}>
									<Image
										style={styles.image}
										source={{
											uri: testArr[this.state.currentIndex].photo
												? testArr[this.state.currentIndex].photo
												: 'https://moeobrazovanie.ru/data/ckfinder/images/K%20chemu%20lezhit%20vasha%20dusha.jpg',
										}}
									/>
								</View>
								<View style={styles.textView}>
									<Text style={styles.text}>{testArr[this.state.currentIndex].name}</Text>
								</View>
								<View style={styles.questView}>
									<Text style={styles.quest}>
										Вопрос {testArr[this.state.currentIndex].questionNum}
									</Text>
								</View>

								<View style={styles.starView}>
									<Ionicons name="ios-star-outline" size={15} color={'#e5e853'} />
									<Ionicons name="ios-star-outline" size={15} color={'#e5e853'} />
									<Ionicons name="ios-star-outline" size={15} color={'#e5e853'} />
									<Ionicons name="ios-star-outline" size={15} color={'#e5e853'} />
									<Ionicons name="ios-star-outline" size={15} color={'#e5e853'} />
								</View>
							</View>

							<View style={styles.buttonView}>
								<TouchableOpacity
									style={styles.button}
									title="Начать"
									onPress={() =>
										this.props.navigation.navigate('TestData', {
											testiD: testArr[this.state.currentIndex].id,
											questionNum: testArr[this.state.currentIndex].questionNum,
										})
									}
								>
									<Text>Начать</Text>
								</TouchableOpacity>
							</View>
						</Animated.View>
					))}
				</View>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#eae3e3',
		padding: 30,
	},
	main: {
		flex: 1,
	},
	button: {
		backgroundColor: '#e5a204',
		width: '70%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
	},
	buttonView: {
		alignItems: 'center',
		paddingBottom: '5%',
	},
	starView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 5,
		padding: 2,
		flexDirection: 'row',
	},
	imageView: {
		flex: 3,
		margin: 5,
		height: '60%',
		width: '90%',
	},
	quest: {
		fontSize: 10,
		color: '#FFF',
		marginVertical: 5,
		textAlign: 'center',
	},
	questView: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
	},

	image: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '80%',
		width: '100%',
		margin: 5,
	},
	textView: {
		alignItems: 'center',
		justifyContent: 'center',

		marginHorizontal: 5,
	},
	text: {
		fontSize: 17,
		color: '#FFF',
		marginVertical: 10,
		fontWeight: 'bold',

		textAlign: 'center',
		justifyContent: 'center',
	},
});
