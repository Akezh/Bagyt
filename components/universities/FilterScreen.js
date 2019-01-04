import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import { Button } from 'react-native-elements';

export default class FilterScreen extends React.Component {
	state = {
		city: '',
		subject: '',
		major: '',
		initialActionSheet: [],
		initialState: '',
		initialActionSheetName: '',
		array: [
			{
				name: 'Город',
				iconName: 'ios-home-outline',
				array: ['Назад', 'Все', ...new Set(global.data.allUniversities.map(univer => univer.city))],
				initialState: 'city',
				initalValue: 'Все',
			},
			{
				name: 'Предмет',
				iconName: 'ios-book-outline',
				array: ['Назад', 'Все', ...new Set(global.data.allMajors.map(major => major.subject))],
				initialState: 'subject',
				initalValue: 'Все',
			},
			{
				name: 'Специальность',
				iconName: 'ios-people-outline',
				array: ['Назад', 'Все'].concat(global.data.allMajors.map(major => major.name)),
				initialState: 'major',
				initalValue: 'Все',
			},
		],
	};

	showActionSheet = item => {
		this.setState(
			{
				initialActionSheet: item.array,
				initialState: item.initialState,
				initialActionSheetName: item.name,
			},
			() => {
				this.ActionSheet.show();
			}
		);
	};
	finalUniversitytydata = (constData, universityData, params) => {
		const { state } = this;
		if (this.state.city === 'Все' || this.state.major === 'Все' || this.state.subject === 'Все') {
			universityData = constData;
		}

		if (this.state.city !== '' && this.state.city !== 'Все') {
			universityData = constData.filter(univer => univer.city === this.state.city);
		}
		if (this.state.major !== '' && this.state.major !== 'Все') {
			universityData = constData
				.map(
					univer =>
						univer.majorPoints.map(major => major.majorName === this.state.major).includes(true) && univer
				)
				.filter(univer => univer !== false);
		}

		if (this.state.subject !== '' && this.state.subject !== 'Все') {
			universityData = constData
				.map(
					univer =>
						univer.majorPoints
							.map(majorPoint => majorPoint.major && majorPoint.major.subject === this.state.subject)
							.includes(true) && univer
				)
				.filter(univer => univer !== false);
		}
		try {
			AsyncStorage.setItem('city', JSON.stringify(state.array[0].initialValue));
			AsyncStorage.setItem('major', JSON.stringify(state.array[2].initialValue));
			AsyncStorage.setItem('subject', JSON.stringify(state.array[1].initialValue));
		} catch (error) {
			console.log('error', error);
		}
		params.saveFilteredUniversityData(universityData);
	};

	renderItem = item => {
		return (
			<TouchableOpacity style={styles.opacity} onPress={() => this.showActionSheet(item)}>
				<View style={styles.searchView1}>
					<View style={styles.searchView2}>
						<Icon name={item.iconName} size={32} color={'#b13638'} />
						<Text style={styles.text}>{item.name}</Text>
					</View>
					<View style={styles.searchView3}>
						<Text style={styles.initalValue}>{item.initialValue}</Text>
						<Icon name="ios-arrow-forward-outline" size={26} color={'#b13638'} />
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	retrieveData = async () => {
		try {
			const city = await AsyncStorage.getItem('city');
			const major = await AsyncStorage.getItem('major');
			const subject = await AsyncStorage.getItem('subject');

			let array = this.state.array;
			array[0].initialValue = city !== null ? JSON.parse(city) : 'Все';
			console.log(city);
			array[1].initialValue = subject !== null ? JSON.parse(subject) : 'Все';
			array[2].initialValue = major !== null ? JSON.parse(major) : 'Все';
			this.setState({
				array: array,
			});
		} catch (error) {
			console.log('Error retrieving data', error);
		}
	};
	componentDidMount() {
		this.retrieveData();
	}
	render() {
		let universityData, params;
		const constData = this.props.navigation.getParam('constData');
		this.props.nameButton
			? ((universityData = this.props.universityData), (params = this.props))
			: ((universityData = this.props.navigation.getParam('universityData')),
			  ({ params } = this.props.navigation.state));
		const { state } = this;
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<FlatList
					data={state.array}
					keyExtractor={(_, index) => index}
					numColumns={1}
					extraData={this.state}
					renderItem={({ item }) => this.renderItem(item)}
				/>

				<View style={{ alignItems: 'center' }}>
					<Button
						title={params.nameButton}
						onPress={() => this.finalUniversitytydata(constData, universityData, params)}
						buttonStyle={{
							backgroundColor: '#F94040',
							borderColor: 'white',
							borderWidth: 1,
							borderRadius: 10,
							width: 200,
						}}
					/>
				</View>
				<TouchableOpacity
					style={{
						flex: 6,
						alignItems: 'center',
					}}
				>
					<Text style={styles.text} />
				</TouchableOpacity>

				<ActionSheet
					ref={o => (this.ActionSheet = o)}
					title={<Text style={{ color: '#000', fontSize: 18 }}>{this.state.initialActionSheetName}</Text>}
					options={this.state.initialActionSheet}
					cancelButtonIndex={0}
					destructiveButtonIndex={4}
					onPress={index => {
						if (this.state.initialActionSheetName === 'Город') {
							let array = state.array;
							array[0].initialValue = this.state.initialActionSheet[index];
							this.setState({
								array: array,
							});
						} else if (this.state.initialActionSheetName === 'Предмет') {
							let array = state.array;
							array[1].initialValue = this.state.initialActionSheet[index];
							this.setState({
								array: array,
							});
						} else if (this.state.initialActionSheetName === 'Специальность') {
							let array = state.array;
							array[2].initialValue = this.state.initialActionSheet[index];
							this.setState({
								array: array,
							});
						}
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	opacity: {
		height: '10%',
		justifyContent: 'center',
		borderBottomWidth: 0.5,
		borderBottomColor: 'grey',
		flex: 1,
	},
	text: { marginLeft: 18, fontSize: 18, color: '#b13638' },
	searchView1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 15,

		marginVertical: '2%',
	},
	searchView2: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	searchView3: {
		flexDirection: 'row',
		alignItems: 'right',
	},
	initalValue: {
		color: 'grey',
		marginVertical: 4,
		marginHorizontal: 5,
	},
});
