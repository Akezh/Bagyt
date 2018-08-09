import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet, ScrollView, Alert, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native';

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

	_refreshListView() {
		return (
			<ModeProvider>
				<ModeContext.Consumer>
					{context => {
						let favouriteUnivers = global.data.allUniversities.map(univer =>
							context.favouriteUniversID.map(storageId => storageId === univer.id && univer)
						);
						favouriteUnivers = _.flatten(favouriteUnivers).filter(univer => univer !== false);
						return (
							<ListUniversities
								universityData={favouriteUnivers}
								navigateDetailUnversity={item =>
									this.props.navigation.navigate('DetailUniversities', {
										item: item,
									})
								}
								retrieveData={context.retrieveData}
							/>
						);
					}}
				</ModeContext.Consumer>
			</ModeProvider>
		);
	}

	_refreshControl() {
		return <RefreshControl refreshing={this.state.refreshing} onRefresh={() => this._refreshListView()} />;
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView
					refreshControl={this._refreshControl()}
					dataSource={this.state.dataSource}
					renderRow={car => this._renderListView(car)}
				/>
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
