import React from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';

import ItemUniversity from './ItemUniversity';
import { ModeContext, ModeProvider } from '../ModeProvider';

export default class UniversityScreen extends React.Component {
	static navigationOptions = {
		title: 'Университет',
	};
	state = {
		refreshing: false,
	};

	render() {
		const { universityData } = this.props;

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
							<ItemUniversity
								item={item}
								changeFavourites={item => this.props.changeFavourites(item)}
								favouriteUniversID={this.props.favouriteUniversID}
								navigateDetailUnversity={this.props.navigateDetailUnversity}
							/>
						);
					}}
				/>
				/>
			</View>
		);
	}

	renderSeparator = () => {
		return <View style={{ width: '100%', marginLeft: '27%' }} />;
	};
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
