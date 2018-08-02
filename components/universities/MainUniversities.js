import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, TextInput, Alert, FlatList, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import ListUniversities from './ListUniversities';

export default class MainUniversities extends React.Component {
	state = {
		universityData: this.props.universityData,
	};
	saveFilteredUniversityData = university => {
		this.setState({
			universityData: university,
		});
		this.props.navigation.navigate('Specialists');
	};

	render() {
		const { universityData } = this.state;
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.opacity}
					onPress={() =>
						navigation.navigate('FilterScreen', {
							universityData,
							saveFilteredUniversityData: university => this.saveFilteredUniversityData(university),
							nameButton: 'Сохранить',
						})
					}
				>
					<View style={styles.searchView1}>
						<View style={styles.searchView2}>
							<Icon name="ios-menu-outline" size={30} color={'#148EFE'} />
							<Text style={styles.text}>Все категории</Text>
						</View>
						<Icon name="ios-arrow-forward-outline" size={26} color={'#148EFE'} />
					</View>
				</TouchableOpacity>

				<ListUniversities
					universityData={universityData}
					navigateDetailUnversity={item =>
						navigation.navigate('DetailUniversities', {
							item: item,
						})
					}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	opacity: {
		height: '8%',
		justifyContent: 'center',
		borderBottomWidth: 0.5,
		borderBottomColor: 'grey',
	},
	text: { marginLeft: 18, fontSize: 18, color: '#b13638' },
	searchView1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 15,
	},
	searchView2: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	filterText: {
		fontSize: 24,
		marginLeft: '2%',
		color: '#148EFE',
	},
	filterButton: {
		marginTop: '2%',
		marginLeft: '5%',
	},
	filterView: {
		width: '100%',
		height: '8%',
		borderBottomWidth: 0.5,
		borderBottomColor: 'grey',
	},
	image: {
		width: '100%',
		borderRadius: 10,
		height: '100%',
		opacity: 0.5,
	},
	background: {
		width: '100%',
		borderRadius: 10,
		height: '100%',
		backgroundColor: 'black',
		position: 'absolute',
	},
	titleContainer: {
		flex: 3,
		padding: 15,
		paddingBottom: 0,
	},
	synopsisContainer: {
		flex: 7,
		justifyContent: 'flex-end',
		padding: 15,
		paddingBottom: 10,
		alignItems: 'center',
	},
	textContainer: {
		width: '100%',
		borderRadius: 10,
		height: '100%',
		position: 'absolute',
		padding: 0,
	},
});
