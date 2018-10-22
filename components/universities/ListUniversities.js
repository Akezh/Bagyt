import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ListUniversities extends React.Component {
	static navigationOptions = {
		title: 'Университет',
	};
	state = {
		refreshing: false,
	};

	favouriteUniversChecking = id => {
		{
			if (this.props.favouriteUniversID.includes(id)) {
				return <Icon name="md-heart" size={33} color={'red'} />;
			} else {
				return <Icon name="md-heart-outline" size={33} color={'white'} />;
			}
		}
	};

	render() {
		const { universityData } = this.props;
		const { favouriteUniversID } = this.props;

		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<FlatList
					data={universityData}
					extraData={this.props.favouriteUniversID}
					keyExtractor={(_, index) => index}
					ItemSeparatorComponent={this.renderSeparator}
					refreshing={this.state.refreshing}
					onRefresh={() =>
						this.setState(
							{
								refreshing: true,
							},
							() => {
								this.props.retrieveData();
								this.setState({
									refreshing: false,
								});
							}
						)
					}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								style={styles.touch}
								onPress={() => this.props.navigateDetailUnversity(item)}
							>
								<View style={styles.container}>
									<View style={styles.background} />
									<Image
										style={styles.image}
										source={{
											uri: item.photo,
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
													style={styles.favButton}
													onPress={() => this.props.changeFavourites(item)}
												>
													{this.favouriteUniversChecking(item.id)}
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
					}}
				/>
			</View>
		);
	}

	renderSeparator = () => {
		return <View style={{ width: '100%', marginLeft: '27%' }} />;
	};
}

const styles = StyleSheet.create({
	favButton: {
		flex: 5,
		alignItems: 'flex-end',
		height: 40,
		width: 40,
	},
	touch: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: '2%',
		overflow: 'visible',
		shadowColor: 'grey',
		shadowOpacity: 5,
		shadowRadius: 5,
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
