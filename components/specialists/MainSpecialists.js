import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { Constants } from 'expo';

const { width } = Dimensions.get('window');

export default class SpecialistsMain extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		const arr = [
			{
				name: 'Биология',
				backImage: require('./files/1.jpg'),
				logo: require('./files/1logo.png'),
				colorLogo: require('./files/logo11.png'),
			},
			{
				name: 'Физика',
				backImage: require('./files/9.jpg'),
				logo: require('./files/9logo.png'),
				colorLogo: require('./files/logo99.png'),
			},
			{
				name: 'Химия',
				backImage: require('./files/2.jpg'),
				logo: require('./files/2logo.png'),
				colorLogo: require('./files/logo22.png'),
			},
			{
				name: 'География',
				backImage: require('./files/3.jpg'),
				logo: require('./files/3logo.png'),
				colorLogo: require('./files/logo33.png'),
			},
			{
				name: 'История',
				backImage: require('./files/4.jpg'),
				logo: require('./files/4logo.png'),
				colorLogo: require('./files/logo44.png'),
			},
			{
				name: 'Литература',
				backImage: require('./files/5.jpg'),
				logo: require('./files/5logo.png'),
				colorLogo: require('./files/logo55.png'),
			},
			{
				name: 'Языки',
				backImage: require('./files/6.jpg'),
				logo: require('./files/6logo.png'),
				colorLogo: require('./files/logo66.png'),
			},
			{
				name: 'Информат.',
				backImage: require('./files/7.jpg'),
				logo: require('./files/7logo.png'),
				colorLogo: require('./files/logo77.png'),
			},
			{
				name: 'Творч.экз',
				backImage: require('./files/8.jpg'),
				logo: require('./files/8logo.png'),
				colorLogo: require('./files/logo88.png'),
			},
		];

		return (
			<View style={styles.content}>
				<FlatList
					data={arr}
					keyExtractor={(_, index) => index}
					numColumns={2}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								transform="scale(0.5, 0.5)"
								style={styles.button}
								onPress={() => {
									this.props.toListSpecialists(item);
								}}
							>
								<ImageBackground
									source={item.backImage}
									style={styles.backImage}
									imageStyle={{ borderRadius: 20 }}
								>
									<Image source={item.logo} style={styles.logo} />
									<Text style={styles.text}> {item.name} </Text>
								</ImageBackground>
							</TouchableOpacity>
						);
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},
	text: {
		fontSize: 22,
		color: 'white',
		fontWeight: 'bold',
		marginTop: 5,
	},
	backImage: {
		alignItems: 'center',
		justifyContent: 'center',
		width: width / 2 - 15,
		height: width / 2 - 15,
		borderRadius: 20,
		marginHorizontal: 6,
		marginVertical: 10,
	},

	logo: {
		width: 81,
		height: 81,
	},
});
