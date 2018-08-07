import React, { Component } from 'react';
import {
	Platform,
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	ProgressBarAndroid,
	ProgressViewIOS,
	Dimensions,
	ScrollView,
} from 'react-native';
import { Constants } from 'expo';
import * as Progress from 'react-native-progress';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default class App extends Component {
	renderSeparator = () => {
		return <View style={{ paddingTop: 10 }} />;
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
			<ScrollView style={styles.container}>
				<View style={{ alignItems: 'center' }}>
					<View style={styles.progress}>
						<Progress.Bar progress={this.props.progress} width={250} height={30} color={'#FFF'} />
					</View>

					<View
						style={{
							marginTop: '5%',
							paddingHorizontal: 20,
							width: '100%',
							alignItems: 'center',
							margin: 5,
						}}
					>
						<Text
							style={{
								color: 'white',
								fontSize: Platform.OS === 'ios' ? (height === 812 ? 18 : 16) : 16,
							}}
						>
							{question.question}
						</Text>
					</View>
				</View>
				<FlatList
					style={{ flex: 1 }}
					data={question.answerSheetses}
					renderItem={this.renderItem}
					ItemSeparatorComponent={this.renderSeparator}
					keyExtractor={(item, index) => index}
				/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#F94040',
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
