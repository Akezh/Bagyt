import React from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

export default class UniversityScreen extends React.Component {
	static navigationOptions = {
		title: 'Университет',
	};

	renderSeparator = () => {
		return <View style={{ width: '100%', marginLeft: '27%' }} />;
	};

	renderItem = ({ item }) => {
		return (
			<TouchableOpacity style={styles.touch} onPress={item => this.props.navigateToDetails(item)}>
				<View style={styles.container}>
					<View style={styles.background} />
					<Image
						style={styles.image}
						source={{
							uri: 'https://www.wikicity.kz/fotos_ms/Company_616_WiaqoAQuBEf6woApawKzl9yl.jpeg',
						}}
					/>
					<View style={styles.textContainer}>
						<View style={styles.titleContainer}>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<View style={{ flex: 5 }}>
									<Text numberOfLines={2} style={styles.text2}>
										<Icon name="ios-pin-outline" size={25} color={'white'} />
										{item.city}
									</Text>
								</View>
								<View style={{ flex: 5, alignItems: 'flex-end' }}>
									<Icon name="md-heart-outline" size={40} color={'white'} />
								</View>
							</View>
						</View>
						<View style={styles.synopsisContainer}>
							<Text numberOfLines={2} style={styles.text2}>
								{item.name}
							</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	render() {
		const universityData = this.props.universityData;
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<FlatList
					data={universityData}
					keyExtractor={(_, index) => index}
					ItemSeparatorComponent={this.renderSeparator}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	touch: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: '2%',
	},
	opacity: {
		height: '10%',
		justifyContent: 'center',
		borderBottomWidth: 0.5,
		borderBottomColor: 'grey',
	},
	text: { marginLeft: 18, fontSize: 24, color: '#148EFE' },
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
	container: {
		flex: 1,
		paddingBottom: 15,
		alignItems: 'center',
		height: 200,
		borderRadius: 10,
		marginLeft: '3%',
		marginRight: '3%',
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
	text2: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
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
