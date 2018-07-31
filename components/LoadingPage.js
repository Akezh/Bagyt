import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Animated,
	Image,
	Easing,
	TouchableHighlight,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Button, Icon } from 'native-base';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ModeProvider from './ModeProvider';

const GET_BY_SUBJECT = gql`
	{
		allMajors {
			id
			name
			index
			description
			subject
		}

		allUniversities {
			id
			name
			address
			city
			description
			email
			phone
			webSite
			majorPoints {
				id
				majorName
				major {
					id
					subject
				}
			}
		}
		allMajorPoints {
			id
			kazPoint
			kazSelPoint
			major {
				id
				subject
			}
			majorIndex
			rusPoint
			rusSelPoint
			university {
				id
			}
		}
	}
`;

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
			transform: [{ translateY: this.animatedValue }],
		};

		return (
			<React.Fragment>
				<Container>
					<View style={styles.container}>
						<TouchableOpacity style={styles.button} onPress={() => this.onPress(data)} />
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
						<Animated.View style={[styles.box, animatedStyle]}>
							<Image source={require('../assets/mulTriangle.png')} />
						</Animated.View>
					</View>
				</Container>
				<Query query={GET_BY_SUBJECT}>
					{({ loading, data, error }) =>
						loading ? <ActivityIndicator /> : <ModeProvider data={data} setTimer={this.props.setTimer} />
					}
				</Query>
			</React.Fragment>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#148EFE',
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
