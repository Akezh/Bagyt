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

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ModeProvider>
					<ModeContext.Consumer>
						{context => {
							let favouriteUnivers = global.data.allUniversities.map(univer =>
								context.favouriteUniversID.map(storageId => storageId === univer.id && univer)
							);
							favouriteUnivers = _.flatten(favouriteUnivers).filter(univer => univer !== false);
							return (
								<ListUniversities
									universityData={
										this.props.universityData ? this.props.universityData : favouriteUnivers
									}
									navigateDetailUnversity={
										this.props.navigateDetailUnversity
											? item => this.props.navigateDetailUnversity(item)
											: item =>
													this.props.navigation.navigate('DetailUniversities', {
														item: item,
													})
									}
									favouriteUniversID={context.favouriteUniversID}
									changeFavourites={context.changeFavourites}
									retrieveData={context.retrieveData}
								/>
							);
						}}
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
