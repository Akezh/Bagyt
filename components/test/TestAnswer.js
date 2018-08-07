import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Platform, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { Button } from 'react-native-elements';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

export default class TestAnswer extends Component {
	state = {
		result: '',
		resultDes: '',
	};

	renderSeparator = () => {
		return <View style={{ paddingTop: 10 }} />;
	};

	renderItem = ({ item }) => {
		return (
			<View style={styles.viewItem}>
				<View style={{}}>
					<Text style={styles.answerText}>{item.answer}</Text>
				</View>
			</View>
		);
	};

	componentDidMount() {
		const score = this.props.score;
		const answer = this.props.answer;
		answer.forEach(ans => {
			ans.scoreMax >= score && ans.scoreMin <= score
				? this.setState({
						result: ans.result,
						resultDes: ans.resultDes,
				  })
				: null;
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					alwaysBounceVertical={true}
					contentContainerStyle={{
						width: width,
					}}
				>
					<View style={styles.resultView}>
						<Text style={styles.resultText}>Результаты теста</Text>
					</View>

					<View style={styles.answerView}>
						<View style={styles.imageView}>
							<Image
								style={{ width: 80, height: 65 }}
								source={{
									uri:
										'https://d1zil96gdwwtdc.cloudfront.net/images/files/000/000/425/original/Grade_A.jpg?1482170231',
								}}
							/>
						</View>

						<View
							style={{
								alignItems: 'flex-end',
								marginRight: 3,
								justifyContent: 'center',
								width: '50%',
								flex: 2,
							}}
						>
							<Text style={{ fontSize: 18, color: '#F94040' }}>{this.state.resultDes}</Text>
						</View>
					</View>

					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							width: '98%',
							paddingHorizontal: '3%',
						}}
					>
						<Text
							style={{
								fontSize: Platform.OS === 'ios' ? (height === 812 ? 18 : 16) : 16,
								color: '#8b9099',
							}}
						>
							{this.state.result}
						</Text>
					</View>

					<View style={{ alignItems: 'center', marginTop: 30 }}>
						<Button
							title="Пройти другой тест"
							titleStyle={{ color: 'white' }}
							buttonStyle={styles.buttonStyle}
							containerStyle={{ marginTop: 20 }}
							onPress={() => this.props.navigateToList()}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: 'white',
	},
	answerText: {
		fontSize: 20,
		color: 'black',
		marginRight: 10,
		fontWeight: 'bold',
	},
	resultText: { color: '#F94040', fontSize: 22, fontWeight: 'bold' },
	resultView: {
		margin: 5,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	answerView: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: '5%',
		height: 100,
	},
	imageView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	viewItem: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		width: 350,
		height: 100,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 15,
	},
	buttonStyle: {
		marginBottom: 20,
		backgroundColor: '#F94040',
		width: 200,
		height: 55,
		borderColor: 'transparent',
		borderWidth: 0,
		borderRadius: 20,
	},
});
