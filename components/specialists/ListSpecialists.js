import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
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
				<View
					style={{
						position: 'absolute',
						backgroundColor: 'transparent',
						top: '2%',
						left: 14,
						right: 0,
						height: 44,
						alignItems: 'flex-start',
						zIndex: 100,
					}}
				>
					<Icon
						style={styles.backIcon}
						name="ios-arrow-back-outline"
						type="ionicon"
						size={40}
						color="#FFFF"
						onPress={() => this.props.navigation.navigate('Specialists')}
					/>
				</View>
				<ImageBackground style={styles.backImage} source={subject.backImage} blur={10}>
					<Image source={subject.logo} style={styles.logo} />
					<Text style={styles.text}> {subject.name} </Text>
				</ImageBackground>

				<FlatList
					data={arr}
					keyExtractor={(_, index) => index}
					numColumns={1}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								onPress={() => this.navToDetail(item, subject.colorLogo)}
								style={styles.listButton}
							>
								<View
									style={{
										width: '100%',
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
									}}
								>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}
									>
										<Text style={styles.listText}>{item.name}</Text>
									</View>
									<Icon
										name="ios-arrow-forward-outline"
										type="ionicon"
										size={26}
										color="grey"
										onPress={() => this.props.navigation.navigate('Specialists')}
									/>
								</View>
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
		backgroundColor: 'white',
	},
	listButton: {
		borderBottomWidth: 0.5,
		borderBottomColor: 'grey',
		height: '15%',
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: '2%',
		paddingBottom: '3%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	listText: {
		color: 'grey',
		fontSize: 16,
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
		paddingTop: 44,
		alignItems: 'center',
		justifyContent: 'center',
	},
	backIcon: {
		position: 'absolute',
	},
	logo: {
		zIndex: 105,
	},
});
