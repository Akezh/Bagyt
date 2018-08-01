import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { Constants } from 'expo';

export default class ListSpecialists extends React.Component {
	static navigationOptions = {
		header: null,
	};

	navToDetail = (item, colorLogo) => {
		this.props.navigation.navigate('DetailSpecialists', {
			specialist: item,
			logo: colorLogo,
		});
	};

	render() {
		const subject = this.props.navigation.getParam('item');
		const arr = global.data.allMajors.filter(word => word.subject === subject.name);

		return (
			<View style={styles.content}>
				<ImageBackground style={styles.backImage} source={subject.backImage} blur={10}>
					<Icon
						style={styles.backIcon}
						name="ios-arrow-back-outline"
						type="ionicon"
						size={40}
						color="#FFFF"
						onPress={() => this.props.navigation.navigate('Specialists')}
					/>
					<Image source={subject.logo} style={styles.logo} />
					<Text style={styles.text}> {subject.name} </Text>
				</ImageBackground>

				<FlatList
					data={arr}
					keyExtractor={(_, index) => index}
					numColumns={1}
					renderItem={({ item }) => {
						return (
							<TouchableHighlight
								onPress={() => this.navToDetail(item, subject.colorLogo)}
								style={styles.listButton}
							>
								<View
									style={{
										marginLeft: 20,
										width: '80%',
									}}
								>
									<Text style={styles.listText}>{item.name}</Text>
								</View>
							</TouchableHighlight>
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
		backgroundColor: 'white',
	},
	listButton: {
		borderWidth: 1,
		borderColor: '#148EFE',
		borderRadius: 20,
		height: '20%',
		flex: 1,
		flexDirection: 'row',
		marginVertical: '1.5%',
		marginHorizontal: '3%',
	},
	listText: {
		color: 'grey',
		fontSize: 18,
		marginHorizontal: '2%',
		marginVertical: '1%',
		fontWeight: 'bold',
	},
	text: {
		fontSize: 30,
		color: 'white',
		fontWeight: 'bold',
		marginTop: 5,
	},
	backImage: {
		flex: 0.6,
		alignItems: 'center',
		justifyContent: 'center',
	},
	backIcon: {
		position: 'absolute',
	},
	logo: {
		width: '30%',
		height: '40%',
	},
});
