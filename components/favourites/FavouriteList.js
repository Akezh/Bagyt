import React from 'react';
import { View } from 'react-native';

import _ from 'lodash';

import ListUniversities from '../universities/ListUniversities';
import ModeProvider, { ModeContext } from './FavouriteProvider';

export default class FavouriteList extends React.Component {
	state = {
		favouriteUnivers: [],
	};

	navigateDetailUnversity = item => {
		if (this.props.navigateDetailUnversity) {
			return this.props.navigateDetailUnversity(item);
		} else {
			return this.props.navigation.navigate('DetailUniversities', {
				item: item,
			});
		}
	};

	getUniversityData = context => {
		if (this.props.universityData) {
			return this.props.universityData;
		} else {
			let favouriteUnivers = global.data.allUniversities.map(univer =>
				context.favouriteUniversID.map(storageId => storageId === univer.id && univer)
			);
			favouriteUnivers = _.flatten(favouriteUnivers).filter(univer => univer !== false);
			return favouriteUnivers;
		}
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ModeProvider>
					<ModeContext.Consumer>
						{context => {
							return (
								<ListUniversities
									universityData={this.getUniversityData(context)}
									navigateDetailUnversity={item => this.navigateDetailUnversity(item)}
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
