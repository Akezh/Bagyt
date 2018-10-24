import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ItemSearched extends React.Component {
	renderPhoneNumber = itemNumber => {
		if (itemNumber !== '')
			return (
				<Text style={{ color: 'grey', marginLeft: 20, fontSize: 12 }}>
					<Icon name="ios-call-outline" size={12} color={'grey'} /> {itemNumber}
				</Text>
			);
	};
	navigateToDetail = item => {
		this.props.navigateToDetail(item);
	};
	renderImage = link => {
		if (link !== '') {
			return link;
		} else {
			return 'http://www.turan-edu.kz/wp-content/uploads/2017/06/94191.jpg';
		}
	};
	render() {
		const item = this.props.item;

		return (
			<TouchableOpacity style={styles.itemButton} onPress={() => this.navigateToDetail(item)}>
				<Image
					style={styles.image}
					source={{
						uri: this.renderImage(item.photo),
					}}
				/>

				<View style={{ flex: 1, justifyContent: 'center' }}>
					<Text style={styles.nameText}>{item.name}</Text>

					<Text style={styles.cityText}>
						<Icon name="ios-pin-outline" size={12} color={'grey'} /> {item.city}
					</Text>
					{this.renderPhoneNumber(item.phone)}
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	itemButton: {
		height: 70,
		width: '100%',
		flexDirection: 'row',
		marginLeft: 10,
		marginBottom: 5,
		marginTop: 5,
	},
	nameText: {
		fontSize: 15,
		color: 'black',
		marginRight: 10,
		marginLeft: 20,
	},
	cityText: {
		color: 'grey',
		marginLeft: 20,
		fontSize: 12,
	},
	text: {
		marginLeft: 18,
		fontSize: 18,
		color: '#b13638',
	},
	image: {
		width: 100,
		height: 70,
		borderRadius: 10,
	},
});
