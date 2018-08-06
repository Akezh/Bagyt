import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';
import { Button } from 'react-native-elements';

export default class App extends Component {
	state = {
		result: '',
		resultDes: '',
	};

	renderSeparator = () => {
		return <View style={{ paddingTop: 10 }} />;
	};

	renderItem = ({ item }) => {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'white',
					width: 350,
					height: 100,
					borderWidth: 1,
					borderColor: 'white',
					borderRadius: 15,
				}}
			>
				<View style={{}}>
					<Text style={{ fontSize: 18, color: 'black', marginRight: 10 }}>{item.answer}</Text>
				</View>
			</View>
		);
	};

	componentDidMount() {
		const score = this.props.score;
		const answer = this.props.answer;
		console.log(answer[0].scoreMax, 'scoreMax');
		console.log(score);
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
				<View style={{ flex: 0.2 }}>
					<Text style={{ color: '#F94040', fontSize: 24 }}>Результаты теста</Text>
				</View>

				<View
					style={{
						flex: 0.2,
						flexDirection: 'row',
						width: '100%',
						justifyContent: 'space-between',
					}}
				>
					<View style={{ justifyContent: 'center' }}>
						<Image
							style={{ width: 100, height: 80, marginLeft: 20 }}
							source={{
								uri:
									'https://d1zil96gdwwtdc.cloudfront.net/images/files/000/000/425/original/Grade_A.jpg?1482170231',
							}}
						/>
					</View>

					<View
						style={{
							alignItems: 'flex-end',
							marginRight: 20,
							justifyContent: 'center',
						}}
					>
						<Text style={{ fontSize: 28, color: '#F94040' }}>{this.state.resultDes}</Text>
					</View>
				</View>

				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						width: '100%',
						justifyContent: 'space-between',
					}}
				>
					<Text style={{ fontSize: 18, color: '#F94040', marginLeft: 20 }}>{this.state.result}</Text>
				</View>

				<View style={{ flex: 1, alignItems: 'center' }}>
					<Button
						title="Пройти еще один тест"
						titleStyle={{ color: 'white' }}
						buttonStyle={{
							backgroundColor: '#F94040',
							width: 200,
							height: 60,
							borderColor: 'transparent',
							borderWidth: 0,
							borderRadius: 20,
						}}
						containerStyle={{ marginTop: 20 }}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: 'white',
	},
});
