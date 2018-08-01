import React from 'react';
import { Button, View, Text } from 'react-native';
import { StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FilterScreen from '../universities/FilterScreen';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';

const DismissKeyBoard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

export default class SearchScreen extends React.Component {
	state = {
		inputValue: '',
		universityData: global.data.allUniversities,
	};

	saveFilteredUniversityData = university => {
		this.setState({
			universityData: university,
		});
		//	this.props.navigation.navigate('Specialists');
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ marginTop: '50%', alignItems: 'center' }}>
					<DismissKeyBoard>
						<View style={{ marginTop: '10%', marginLeft: '5%' }}>
							<Text style={{ fontSize: 24, color: '#148EFE' }}>Балл:</Text>

							<TextInput
								value={this.state.inputValue}
								onChangeText={this.handleTextChange}
								style={styles.inp}
								keyboardType="numeric"
								placeholder="Введите балл ЕНТ"
							/>
						</View>
					</DismissKeyBoard>
				</View>
				<View style={{ marginTop: '6%', height: '50%' }}>
					<FilterScreen
						universityData={this.state.universityData}
						saveFilteredUniversityData={university => this.saveFilteredUniversityData(university)}
						nameButton={'Поиск'}
					/>
					<View style={{ marginTop: '5%', alignItems: 'center', height: '15%' }}>
						<Button style={{ fontSize: 30 }} title="Найти" />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inp: {
		width: 170,
		height: 50,
		marginRight: 10,
		fontSize: 18,
		borderBottomWidth: 2,
		borderBottomColor: '#148EFE',
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
