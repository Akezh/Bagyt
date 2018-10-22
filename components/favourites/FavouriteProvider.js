import React from 'react';
import { AsyncStorage } from 'react-native';

export const ModeContext = React.createContext('light');

export default class FavouriteProvider extends React.Component {
	state = {
		favouriteUniversID: [],
	};

	retrieveData = async () => {
		try {
			const favouriteUniversID = await AsyncStorage.getItem('favouriteUnivers');
			if (favouriteUniversID !== null) {
				this.setState({
					favouriteUniversID: JSON.parse(favouriteUniversID),
				});
			}
		} catch (error) {
			console.log('Error retrieving data', error);
		}
	};
	componentDidMount() {
		this.retrieveData();
	}

	changeFavourites = currentUniversity => {
		const { favouriteUniversID } = this.state;

		const newFavouriteUniversIds = favouriteUniversID.includes(currentUniversity.id)
			? favouriteUniversID.filter(univer => univer !== currentUniversity.id)
			: [...favouriteUniversID, currentUniversity.id];

		try {
			this.setState({ favouriteUniversID: newFavouriteUniversIds }, () => {
				AsyncStorage.setItem('favouriteUnivers', JSON.stringify(newFavouriteUniversIds));
			});
		} catch (error) {
			console.log('error', error);
		}
	};

	render() {
		return (
			<ModeContext.Provider
				value={{
					favouriteUniversID: this.state.favouriteUniversID,
					changeFavourites: currentUniversity => this.changeFavourites(currentUniversity),
					retrieveData: () => this.retrieveData(),
				}}
			>
				{this.props.children}
			</ModeContext.Provider>
		);
	}
}
