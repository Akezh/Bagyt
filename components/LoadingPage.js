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
} from 'react-native';
import { Container } from 'native-base';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ModeProvider from './ModeProvider';

const { height } = Dimensions.get('window');

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
				kazPoint
				kazSelPoint
				rusPoint
				rusSelPoint
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
	render() {
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
							}}
							source={require('../assets/logoT.png')}
						/>
					</View>
				</Container>
				<Query query={GET_BY_SUBJECT}>
					{({ loading, data, error }) =>
						loading ? (
							<ActivityIndicator />
						) : (
							<ModeProvider
								data={data}
								setUniversity={this.props.setUniversity}
								setTimer={this.props.setTimer}
							/>
						)
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
