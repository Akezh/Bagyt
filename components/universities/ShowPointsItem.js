import React from 'react';
import { Button, View, Text, ScrollView, LayoutAnimation, Platform, UIManager } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

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
			<View style={styles.pointView}>
				<TouchableOpacity
					style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
					onPress={() => this.showPoints()}
				>
					<Text style={styles.majorName}> {item.majorName}</Text>
					<Icon
						type="ionicon"
						name="ios-arrow-forward-outline"
						size={26}
						color="black"
						style={[
							styles.forwardIcon,
							{
								transform: [{ rotate: this.state.degree }],
							},
						]}
					/>
				</TouchableOpacity>

				{this.state.modalVisible && (
					<Table
						style={{ flex: 1, flexDirection: 'column' }}
						borderStyle={{
							borderWidth: 0.5,
							borderColor: '#bdbfc1',
						}}
					>
						<Table borderStyle={{ borderColor: '#C1C0B9' }}>
							<Row
								data={['Проходные баллы на грант(по результатам 2018)']}
								widthArr={250}
								heightArr={16}
								textStyle={styles.textTitle}
							/>
						</Table>
						<TableWrapper style={styles.wrapper}>
							<Col
								data={[
									'Казахская Школа',
									'Сельская квота(каз)',
									'Русская Школа',
									'Сельская квота(рус)',
								]}
								style={styles.title}
								heightArr={[28, 28, 28, 28]}
								textStyle={styles.text}
							/>
							<Col
								data={[item.kazPoint, item.kazSelPoint, item.rusPoint, item.rusSelPoint]}
								style={styles.title}
								heightArr={[28, 28, 28, 28]}
								textStyle={styles.text}
							/>
						</TableWrapper>
					</Table>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	majorName: {
		color: '#4e5056',
		fontSize: 13,
		marginBottom: 5,

		fontWeight: 'bold',
	},
	pointView: {
		margin: 5,
		padding: 2,
	},
	wrapper: { flexDirection: 'row', marginTop: 5 },
	title: {
		flex: 2,
		backgroundColor: '#f6f8fa',
		marginHorizontal: 2,
		marginVertical: 3,
		justifyContent: 'flex-start',
	},
	textTitle: {
		textAlign: 'center',
		color: '#4e5056',
		fontSize: 11,
		fontWeight: 'bold',
	},
	row: { flex: 0.5, height: 28, alignItems: 'flex-start' },
	text: { textAlign: 'center', color: '#4e5056', fontSize: 10 },
});
