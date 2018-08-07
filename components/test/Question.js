import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Constants } from 'expo';
import * as Progress from 'react-native-progress';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default class App extends Component {
	renderSeparator = () => {
		return <View style={{ paddingTop: 5 }} />;
	};

	renderItem = ({ item }) => {
		return (
			<TouchableOpacity style={styles.button} onPress={() => this.props.onSelect(item.point)}>
				<Text style={styles.textQuestion}>{item.text}</Text>
			</TouchableOpacity>
		);
	};

	render() {
		const { question } = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.progress}>
					<Progress.Bar
						progress={this.props.progress}
						width={250}
						height={25}
						color={'#FFF'}
						useNativeDriver={true}
						animationType={'timing'}
					/>
				</View>

				<View style={styles.question}>
					<Text
						style={{
							color: 'white',
							fontSize: Platform.OS === 'ios' ? (height === 812 ? 18 : 16) : 16,
							textAlign: 'center',
						}}
					>
						{question.question}
					</Text>
				</View>

				<FlatList
					alwaysBounceVertical={true}
					data={question.answerSheetses}
					renderItem={this.renderItem}
					ItemSeparatorComponent={this.renderSeparator}
					keyExtractor={(item, index) => index}
				/>
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
	},
	question: {
		marginTop: '10%',
		alignItems: 'center',
		marginHorizontal: 5,
		height: '25%',
	},
	progress: {
		marginTop: '5%',
		width: '90%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textQuestion: {
		fontSize: Platform.OS === 'ios' ? (height === 812 ? 14 : 12) : 12,
		color: 'black',
		marginHorizontal: 5,
	},
	button: {
		margin: 5,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		width: width / 1.05,
		height: width / 4,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 10,
	},
});
