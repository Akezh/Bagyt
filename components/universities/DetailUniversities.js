import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, TextInput, Alert, FlatList, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

export default class UniversityScreen extends React.Component {
	static navigationOptions = {
		title: 'Университет',
	};

	state = {
		clicked: false,
		showed: [
			{
				index: '',
				clicked: false,
			},
		],
	};

	showPoints = index => {
		this.setState({
			clicked: !this.state.clicked,
		});
	};

	render() {
		const { navigation } = this.props;
		const item = navigation.getParam('item');
		const specialList = item.majorPoints;
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<Image
					style={{
						width: '100%',
						height: 150,
					}}
					source={{ uri: 'https://www.wikicity.kz/fotos_ms/Company_616_WiaqoAQuBEf6woApawKzl9yl.jpeg' }}
				/>
				<Text style={{ fontSize: 22, marginTop: '2%' }}>{item.name}</Text>
				<ScrollableTabView
					tabBarActiveTextColor="#148EFE"
					tabBarUnderlineStyle={{ backgroundColor: '#148EFE' }}
					style={{ marginTop: '3%' }}
					initialPage={1}
					renderTabBar={() => <DefaultTabBar />}
				>
					<View tabLabel="Описание">
						<View
							style={{
								marginTop: '5%',
								marginLeft: '5%',
								marginRight: '5%',
							}}
						>
							<Text style={{ fontSize: 16 }}>{item.description}</Text>
						</View>
					</View>

					<View tabLabel="Специальности">
						<FlatList
							data={specialList}
							keyExtractor={(_, index) => index}
							numColumns={1}
							renderItem={({ item }, index) => {
								this.setState(
									{
										showed: [
											...this.state.showed,
											{
												index: index,
												clicked: false,
											},
										],
									},
									() => {
										return (
											<View style={{ flex: 1 }}>
												<Text> {item.majorName}</Text>
												<Icon
													type="entypo"
													name="chevron-small-right"
													size={40}
													color="black"
													onPress={() => this.showPoints(index)}
												/>
												{this.state.clicked && (
													<React.Fragment>
														<Text> kazPoint: {item.kazPoint}</Text>
														<Text> kazSelPoint :{item.kazSelPoint} </Text>
														<Text> rusPoint: {item.rusPoint}</Text>
														<Text> rusSelPoint: {item.rusSelPoint}</Text>
													</React.Fragment>
												)}
											</View>
										);
									}
								);
							}}
						/>
					</View>

					<View tabLabel="Контакты">
						<View style={{ marginTop: '5%', marginLeft: '5%' }}>
							<Text style={{ fontSize: 18 }}>
								<Icon name="ios-information-circle-outline" size={26} />
								{item.webSite}
							</Text>
							<Text style={{ fontSize: 18 }}>
								<Icon name="ios-call-outline" size={26} /> {item.phone}
							</Text>
							<Text style={{ fontSize: 18 }}>
								<Icon name="ios-mail-open-outline" size={26} /> {item.email}
							</Text>
							<Text style={{ fontSize: 18 }}>
								<Icon name="ios-home-outline" size={26} /> {item.address}
							</Text>
						</View>

						<View>
							<TouchableOpacity style={{ marginTop: '47%', marginLeft: '80%' }}>
								<Icon name="ios-call-outline" size={60} color={'green'} />
							</TouchableOpacity>
						</View>
					</View>
				</ScrollableTabView>;
			</View>
		);
	}
}
