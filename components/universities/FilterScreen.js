import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
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
	};
	array = [
		{
			name: 'Город',
			iconName: 'ios-home-outline',
			array: ['Cancel', 'All', ...new Set(global.data.allUniversities.map(univer => univer.city))],
			initialState: 'city',
		},
		{
			name: 'Предмет',
			iconName: 'ios-book-outline',
			array: ['Cancel', 'All', ...new Set(global.data.allMajors.map(major => major.subject))],
			initialState: 'subject',
		},
		{
			name: 'Специальность',
			iconName: 'ios-people-outline',
			array: ['Cancel', 'All'].concat(global.data.allMajors.map(major => major.name)),
			initialState: 'major',
		},
	];

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
		if (this.state.city === 'All' || this.state.major === 'All' || this.state.subject === 'All') {
			universityData = constData;
		}

		if (this.state.city !== '' && this.state.city !== 'All') {
			universityData = constData.filter(univer => univer.city === this.state.city);
		}
		if (this.state.major !== '' && this.state.major !== 'All') {
			universityData = constData
				.map(
					univer =>
						univer.majorPoints.map(major => major.majorName === this.state.major).includes(true) && univer
				)
				.filter(univer => univer !== false);
		}

		if (this.state.subject !== '' && this.state.subject !== 'All') {
			universityData = constData
				.map(
					univer =>
						univer.majorPoints
							.map(majorPoint => majorPoint.major && majorPoint.major.subject === this.state.subject)
							.includes(true) && univer
				)
				.filter(univer => univer !== false);
		}

		params.saveFilteredUniversityData(universityData);
	};
	render() {
		let universityData, params;
		const constData = this.props.navigation.getParam('constData');
		this.props.nameButton
			? ((universityData = this.props.universityData), (params = this.props))
			: ((universityData = this.props.navigation.getParam('universityData')),
			  ({ params } = this.props.navigation.state));
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<FlatList
					data={this.array}
					keyExtractor={(_, index) => index}
					numColumns={1}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity style={styles.opacity} onPress={() => this.showActionSheet(item)}>
								<View style={styles.searchView1}>
									<View style={styles.searchView2}>
										<Icon name={item.iconName} size={32} color={'#b13638'} />
										<Text style={styles.text}>{item.name}</Text>
									</View>
									<Icon name="ios-arrow-forward-outline" size={26} color={'#b13638'} />
								</View>
							</TouchableOpacity>
						);
					}}
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
							this.setState({
								city: this.state.initialActionSheet[index],
							});
						} else if (this.state.initialActionSheetName === 'Предмет') {
							this.setState({
								subject: this.state.initialActionSheet[index],
							});
						} else if (this.state.initialActionSheetName === 'Специальность') {
							this.setState({
								major: this.state.initialActionSheet[index],
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
	},
	searchView2: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: '2%',
	},
});
