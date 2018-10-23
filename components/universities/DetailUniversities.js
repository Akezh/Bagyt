import React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, TextInput, Alert, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import ShowPointsItem from './ShowPointsItem.js';

export default class UniversityScreen extends React.Component {
	state = {
		modalVisible: false,
	};

	showPoints = () => {
		this.setState({
			modalVisible: !this.state.modalVisible,
		});
	};

	renderItem = ({ item }) => {
		return <ShowPointsItem item={item} />;
	};

	studentNumber = numberOfStudents => {
		if (numberOfStudents === null) {
			return <Text style={styles.text}>(нету инф) </Text>;
		} else {
			return <Text style={styles.text}>{numberOfStudents}</Text>;
		}
	};

	detail = (det, iconName) => {
		if (det !== '') {
			return (
				<View style={styles.searchView1}>
					<Icon name={iconName} size={30} color={'black'} />
					<Text style={styles.text2}>{det}</Text>
				</View>
			);
		}
	};
	render() {
		const { navigation } = this.props;
		const item = navigation.getParam('item');
		const specialList = item.majorPoints;

		return (
			<View style={styles.container}>
				<Image
					style={styles.imagePoint}
					source={{
						uri: item.photo ? item.photo : 'http://www.turan-edu.kz/wp-content/uploads/2017/06/94191.jpg',
					}}
				/>
				<Text style={styles.textName}>{item.name}</Text>
				<ScrollableTabView
					tabBarActiveTextColor="#F94040"
					tabBarUnderlineStyle={{ backgroundColor: '#F94040' }}
					tabBarBackgroundColor={'white'}
					style={{
						marginTop: '3%',
					}}
					tabBarTextStyle={{ fontSize: 13 }}
					initialPage={1}
					renderTabBar={() => <DefaultTabBar />}
				>
					<ScrollView tabLabel="Описание">
						<View style={styles.searchView1}>
							<View style={styles.searchView2}>
								<Text
									style={[
										styles.text,
										{
											color: ' #9a9ca0',
										},
									]}
								>
									Количество студентов
								</Text>
							</View>
							{this.studentNumber(item.numberOfStudents)}
						</View>

						<View style={styles.descriptionView}>
							<Text style={styles.decription}>{item.description}</Text>
						</View>
					</ScrollView>

					<ScrollView tabLabel="Специальности" style={{ fontSize: 30 }}>
						<FlatList
							data={specialList}
							extraData={this.state.modalVisible}
							keyExtractor={(_, index) => index}
							numColumns={1}
							renderItem={this.renderItem}
						/>
					</ScrollView>

					<ScrollView tabLabel="Контакты">
						{this.detail(item.webSite, 'ios-information-circle-outline')}
						{this.detail(item.phone, 'ios-call-outline')}
						{this.detail(item.email, 'ios-mail-open-outline')}
						{this.detail(item.address, 'ios-home-outline')}
					</ScrollView>
				</ScrollableTabView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	imagePoint: {
		width: '100%',
		flex: 0.75,
	},
	textName: {
		fontSize: 19,
		marginTop: '2%',
		marginHorizontal: '2%',
	},
	searchView1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: '5%',
		borderBottomWidth: 0.5,
		height: 50,
	},
	decription: {
		fontSize: 14,
		color: 'grey',
	},
	descriptionView: {
		marginTop: '5%',
		marginLeft: '5%',
		marginRight: '5%',
	},
	searchView0: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: '5%',
		borderBottomWidth: 0.5,
		height: 50,
	},
	searchView2: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: '2%',
	},
	text: {
		fontSize: 16,
		color: 'black',
	},
	text2: {
		fontSize: 16,
		color: 'black',
		marginLeft: 30,
	},
});
