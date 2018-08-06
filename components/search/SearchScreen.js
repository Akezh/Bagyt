import React from 'react';
import { StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, View, Text, ScrollView } from 'react-native';
import FilterScreen from '../universities/FilterScreen';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox, Button } from 'react-native-elements';

const DismissKeyBoard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

export default class SearchScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	state = {
		inputValue: '',
		universityData: global.data.allUniversities,
		checked: false,
		rusChecked: false,
		kazChecked: true,
		buttonBack: '#FFFF',
		disabled: true,
	};

	onChange = inputValue => {
		this.setState({
			inputValue,
		});

		if (parseInt(this.state.inputValue) > 0 && parseInt(this.state.inputValue) < 141) {
			this.setState({
				buttonBack: '#F94040',
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
										? univer.kazSelPoint === inputValue
										: univer.rusSelPoint === inputValue
									: this.state.kazChecked
										? univer.kazPoint === inputValue
										: univer.rusPoint === inputValue
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
				<ScrollView style={{ backgroundColor: '#F94040' }}>
					<View style={{ flex: 1 }}>
						<View style={{ marginTop: '10%', alignItems: 'center' }}>
							<View
								style={{
									marginTop: '30%',
									marginBottom: 50,
									flexDirection: 'row',
									alignItems: 'center',
									backgroundColor: '#F94040',
								}}
							>
								<Icon name="ios-home-outline" size={20} color="#FFF" />
								<TextInput
									value={this.state.inputValue}
									onChangeText={inputValue => this.onChange(inputValue)}
									style={styles.inp}
									keyboardType="numeric"
									title={'Балл ЕНТ'}
								/>
							</View>

							<View>
								<CheckBox
									center
									title="Сельская квота"
									textStyle={{ color: '#F94040' }}
									checked={this.state.checked}
									onPress={() => this.setState({ checked: !this.state.checked })}
									containerStyle={{ backgroundColor: 'white', width: 200 }}
									checkedColor={'#F94040'}
								/>
								<CheckBox
									center
									title="Руская Школа"
									textStyle={{ color: '#F94040' }}
									checked={this.state.rusChecked}
									onPress={() => this.onPressCheckboxes()}
									containerStyle={{ backgroundColor: 'white', width: 200 }}
									checkedColor={'#F94040'}
								/>
								<CheckBox
									center
									title="Казахская Школа"
									textStyle={{ color: '#F94040' }}
									checked={this.state.kazChecked}
									onPress={() => this.onPressCheckboxes()}
									containerStyle={{ backgroundColor: 'white', width: 200 }}
									checkedColor={'#F94040'}
								/>
							</View>
						</View>
						<View style={{ marginTop: '6%', height: '50%' }}>
							<View style={{ marginTop: '5%', alignItems: 'center', height: '15%' }}>
								<Button
									title="Найти"
									onPress={() => this.saveFilteredUniversityData(navigation)}
									disabled={this.state.disabled}
									buttonStyle={{
										backgroundColor: this.state.buttonBack,
										borderWidth: 1,
										borderColor: 'white',
										borderRadius: 30,
										width: 150,
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
		borderBottomColor: 'white',
		backgroundColor: '#F94040',
		color: '#FFFF',
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
