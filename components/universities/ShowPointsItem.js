import React from 'react';
import { Button, View, Text, ScrollView, LayoutAnimation, Platform, UIManager } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, TextInput, Alert, FlatList, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ShowPointsItem extends React.Component {
	state = {
		modalVisible: false,
		degree: '0deg',
	};

	showPoints = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		if (this.state.degree == '90deg') {
			this.setState({
				modalVisible: !this.state.modalVisible,
				degree: '0deg',
			});
		} else {
			this.setState({
				modalVisible: !this.state.modalVisible,
				degree: '90deg',
			});
		}
	};

	componentDidMount() {
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	render() {
		const { item } = this.props;
		return (
			<React.Fragment>
				<TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={() => this.showPoints()}>
					<Text> {item.majorName}</Text>
					<Icon
						type="ionicon"
						name="ios-arrow-forward-outline"
						size={26}
						color="black"
						style={{
							transform: [{ rotate: this.state.degree }],
						}}
					/>
				</TouchableOpacity>
				{this.state.modalVisible && (
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<Text> kazPoint: {item.kazPoint}</Text>
						<Text> kazSelPoint :{item.kazSelPoint} </Text>
						<Text> rusPoint: {item.rusPoint}</Text>
						<Text> rusSelPoint: {item.rusSelPoint}</Text>
					</View>
				)}
			</React.Fragment>
		);
	}
}
