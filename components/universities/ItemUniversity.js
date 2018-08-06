import React from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class UniversityScreen extends React.Component {
	render() {
		const { item } = this.props;
		const { favouriteUnivers } = this.props;
		return (
			<TouchableOpacity style={styles.touch} onPress={() => this.props.navigateDetailUnversity(item)}>
				<View style={styles.container}>
					<View style={styles.background} />
					<Image
						style={styles.image}
						source={{
							uri: item.photo
								? item.photo
								: 'http://www.turan-edu.kz/wp-content/uploads/2017/06/94191.jpg',
						}}
					/>
					<View style={styles.textContainer}>
						<View style={styles.titleContainer}>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<View style={{ flex: 5, flexDirection: 'row', padding: 5 }}>
									<Icon name="ios-pin-outline" size={25} color={'white'} />
									<Text numberOfLines={2} style={styles.text1}>
										{item.city}
									</Text>
								</View>
								<TouchableOpacity
									style={{ flex: 5, alignItems: 'flex-end' }}
									onPress={() => this.props.setAsyncUniver(item)}
								>
									{favouriteUnivers.includes(item.id) ? (
										<Icon name="md-heart" size={33} color={'red'} />
									) : (
										<Icon name="md-heart-outline" size={33} color={'white'} />
									)}
								</TouchableOpacity>
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
	searchView1: {
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
		fontSize: 16,
		fontWeight: 'bold',
	},
	text1: {
		color: 'white',
		fontSize: 13,
		margin: 5,
		fontWeight: 'bold',
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
