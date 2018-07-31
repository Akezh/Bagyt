import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, TextInput, Alert, FlatList, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

export default class UniversityScreen extends React.Component {
	static navigationOptions = {
		title: 'Университет',
	};

	render() {
		const { navigation } = this.props;
		const item = navigation.getParam('item');
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
						<View>
							<Text>Контакты</Text>
						</View>
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
