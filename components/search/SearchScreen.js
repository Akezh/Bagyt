import React from 'react';
import { StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, View, Text, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox, Button } from 'react-native-elements';

const DismissKeyBoard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

export default class SearchScreen extends React.Component {
	state = {
		inputValue: '',
		universityData: global.data.allUniversities,
		checked: false,
		rusChecked: false,
		kazChecked: true,
		buttonBack: '#EF8B8B',
		disabled: true,
	};

	onChange = inputValue => {
		this.setState({
			inputValue,
		});

		if (parseInt(this.state.inputValue) > 0 && parseInt(this.state.inputValue) < 141) {
			this.setState({
				disabled: false,
			});
		}
	};

	saveFilteredUniversityData = navigation => {
		const inputValue = parseInt(this.state.inputValue);
		let { universityData } = this.state;
		universityData = universityData
			.map(
				univer1 =>
					univer1.majorPoints
						.map(
							univer =>
								this.state.checked
									? this.state.kazChecked
										? univer.kazSelPoint <= inputValue
										: univer.kazSelPoint <= inputValue
									: this.state.kazChecked
										? univer.kazPoint <= inputValue
										: univer.kazPoint <= inputValue
						)
						.includes(true) && univer1
			)
			.filter(univer => univer !== false);

		this.props.navigation.navigate('MainUniversitiesEnter', {
			universityData,
			navigation: this.props.navigation,
		});
	};

	onPressCheckboxes = () => {
		this.setState({
			rusChecked: !this.state.rusChecked,
			kazChecked: !this.state.kazChecked,
		});
	};
	render() {
		const { navigation } = this.props;

		return (
			<DismissKeyBoard>
				<ScrollView style={{ backgroundColor: 'white' }}>
					<View style={{ flex: 1 }}>
						<View style={{ marginTop: '5%', alignItems: 'center' }}>
							<View style={{ width: '90%', alignItems: 'flex-start' }}>
								<Text style={{ color: 'grey', fontSize: 12 }}>
									*Данная страница предназначена для приблизительного поиска грантов в университетах.{' '}
								</Text>
								<Text style={{ color: 'grey', fontSize: 12 }}>
									*Данные о минимальных баллах ЕНТ для приобретения гранта взяты с прошлых годов.
								</Text>
							</View>

							<View
								style={{
									marginTop: '8%',
									marginBottom: 5,
									flexDirection: 'row',
									alignItems: 'center',
									backgroundColor: 'white',
								}}
							>
								<Icon name="ios-home-outline" size={20} color="#F94040" />
								<TextInput
									value={this.state.inputValue}
									onChangeText={inputValue => this.onChange(inputValue)}
									style={styles.inp}
									placeholder="Введите балл ЕНТ"
									keyboardType="numeric"
									placeholderTextColor={'#595a5b'}
								/>
							</View>
							<View
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									width: '100%',
									paddingRight: 5,
									borderRadius: 5,
									marginTop: '20%',
									height: '30%',
								}}
							>
								<CheckBox
									center
									title="Сельская квота"
									textStyle={{ color: 'white' }}
									checked={this.state.checked}
									onPress={() => this.setState({ checked: !this.state.checked })}
									containerStyle={{
										backgroundColor: '#F94040',
										width: 200,
										borderRadius: 5,
									}}
									checkedColor={'white'}
								/>
								<CheckBox
									center
									title="Русская Школа"
									textStyle={{ color: 'white' }}
									checked={this.state.rusChecked}
									onPress={() => this.onPressCheckboxes()}
									containerStyle={{
										backgroundColor: '#F94040',
										width: 200,
										borderRadius: 5,
									}}
									checkedColor={'white'}
								/>
								<CheckBox
									center
									title="Казахская Школа"
									textStyle={{ color: 'white' }}
									checked={this.state.kazChecked}
									onPress={() => this.onPressCheckboxes()}
									containerStyle={{
										backgroundColor: '#F94040',
										width: 200,
										borderRadius: 5,
									}}
									checkedColor={'white'}
								/>
							</View>
						</View>
						<View style={{ marginTop: '3%', height: '50%', justifyContent: 'center' }}>
							<View style={{ marginTop: '3%', alignItems: 'center', height: '20%' }}>
								<Button
									title="Найти"
									titleStyle={{
										fontSize: 15,
										color: this.state.buttonBack,
									}}
									onPress={() => this.saveFilteredUniversityData(navigation)}
									disabled={this.state.disabled}
									buttonStyle={{
										backgroundColor: '#F94040',
										borderWidth: 1,
										borderColor: '#FFF',
										borderRadius: 18,
										margin: 5,
										height: '80%',
										width: '100%',
									}}
								/>
							</View>
						</View>
					</View>
				</ScrollView>
			</DismissKeyBoard>
		);
	}
}

const styles = StyleSheet.create({
	inp: {
		width: 200,
		height: 50,
		borderBottomWidth: 1.5,
		fontSize: 18,
		borderBottomColor: '#F94040',
		backgroundColor: 'white',
		paddingLeft: 20,
	},
	opacity1: {
		marginTop: '2%',
		height: '14%',
		justifyContent: 'center',
		borderBottomWidth: 0.5,
		borderBottomColor: 'grey',
		borderTopWidth: 0.5,
		borderTopColor: 'grey',
	},
	opacity: {
		height: '14%',
		justifyContent: 'center',
		borderBottomWidth: 0.5,
		borderBottomColor: 'grey',
	},
	text: { marginLeft: 18, fontSize: 18, color: '#148EFE' },
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
});
