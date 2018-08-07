import React from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';
export const ModeContext = React.createContext();

export default class FavouriteProvider extends React.Component {
	state = {
		favouriteUnivers: [],
	};

	retrieveData = async () => {
		try {
			const favouriteUnivers = await AsyncStorage.getItem('favouriteUnivers');
			if (favouriteUnivers !== null) {
				this.setState({
					favouriteUnivers: JSON.parse(favouriteUnivers),
				});
			}
		} catch (error) {
			console.log('Error retrieving data', error);
		}
		this.props.setTimer();
	};
	componentDidMount() {
		this.retrieveData();
	}
	render() {
		return (
			<ModeContext.Provider
				value={{
					favouriteUnivers: this.state.favouriteUnivers,
					retrieveData: () => this.retrieveData(),
				}}
			>
				{this.props.children}
			</ModeContext.Provider>
		);
	}
}
