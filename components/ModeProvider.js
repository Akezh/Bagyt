import React from 'react';
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_BY_SUBJECT = gql`
	{
		allMajors {
			id
			name
			index
			description
			object
			subject
		}

		allUniversities {
			id
			name
			address
			city
			description
			email
			phone
			webSite
			photo
			numberOfStudents
			majorPoints {
				id
				kazPoint
				kazSelPoint

				rusPoint
				rusSelPoint
				majorName
				major {
					id
					subject
				}
			}
		}
		allMajorPoints {
			id
			kazPoint
			kazSelPoint
			rusPoint
			rusSelPoint
			major {
				id
				subject
			}
			majorIndex
			university {
				id
			}
		}
		allTests {
			id
			name
			photo
			stars
			questionNum
		}
	}
`;
export const ModeContext = React.createContext('light');

export default class Mode extends React.Component {
	static navigationOptions = {
		header: null,
	};
	saveGlobal = data => {
		global.data = {
			...data,
			allUniversities: data.allUniversities.map(university => ({
				...university,
				isFav: false,
			})),
		};

		this.props.setTimer();

		return <View />;
	};

	render() {
		return (
			<Query query={GET_BY_SUBJECT}>
				{({ loading, data, error }) =>
					error ? console.log(error) : loading ? <ActivityIndicator /> : this.saveGlobal(data)
				}
			</Query>
		);
	}
}

export class ModeProvider extends React.Component {
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

		console('In retrieve d');
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
		console.log('im g');
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
