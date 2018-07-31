import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Constants } from 'expo';
import ListUniversities from '../universities/ListUniversities';

class DetailSpecialists extends Component {
	static navigationOptions = {
		title: 'Специальность',
	};

	name = this.props.navigation.getParam('specialist').name;

	state = {
		universityData: global.data.allUniversities
			.map(univer => univer.majorPoints.map(major => major.majorName === this.name).includes(true) && univer)
			.filter(univer => univer !== false),
	};
	render() {
		const specialist = this.props.navigation.getParam('specialist');
		const logo = this.props.navigation.getParam('logo');

		return (
			<ScrollView>
				<Image source={logo} />
				<Text>{specialist.name} </Text>
				<Text>{specialist.description} </Text>

				<Text> Universities </Text>

				<ListUniversities universityData={this.state.universityData} />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		marginTop: Constants.statusBarHeight,
	},
});
export default DetailSpecialists;
