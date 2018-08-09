import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet, TextInput, Alert, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import _ from 'lodash';

import ListUniversities from '../universities/ListUniversities';
import { ModeContext, ModeProvider } from '../ModeProvider';

export default class FavouriteList extends React.Component {
	state = {
		favouriteUnivers: [],
	};

	navigateDetailUnversity = item => {
		this.props.navigation.navigate('DetailUniversities', {
			item: item,
		});
	};

	// retrieveData = async () => {
	// 	try {
	// 		const favouriteUnivers = await AsyncStorage.getItem('favouriteUnivers');
	// 		if (favouriteUnivers !== null) {
	// 			const parsedIds = JSON.parse(favouriteUnivers);

	// 			favouriteUnivers = global.data.allUniversities.map(univer =>
	// 				parsedIds.map(storageId => storageId === univer.id && univer)
	// 			);
	// 			favouriteUnivers = _.flatten(favouriteUnivers).filter(univer => univer !== false);
	// 			this.setState({
	// 				favouriteUnivers: favouriteUnivers,
	// 			});
	// 		}
	// 	} catch (error) {
	// 		console.log('Error retrieving data', error);
	// 	}
	// };
	// componentDidMount() {
	// 	this.retrieveData();
	// }

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ModeProvider>
					<ModeContext.Consumer>
						{context => (
							<ListUniversities
								universityData={context.favouriteUnivers}
								navigateDetailUnversity={item =>
									this.props.navigation.navigate('DetailUniversities', {
										item: item,
									})
								}
								changeFavourites={currentUniversity => context.changeFavourites(currentUniversity)}
							/>
						)}
					</ModeContext.Consumer>
				</ModeProvider>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inp: {
		width: 170,
		height: 50,
		marginRight: 10,
		fontSize: 18,
		borderBottomWidth: 2,
		borderBottomColor: '#148EFE',
	},
});
