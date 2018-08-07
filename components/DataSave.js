import React from 'react';
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_BY_SUBJECT = gql`
	{
		allMajors {
			id
			name
			index
			description
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
			major {
				id
				subject
			}
			majorIndex
			rusPoint
			rusSelPoint
			university {
				id
			}
		}
	}
`;

export const ModeContext = React.createContext('light');

export default class DataSave extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Query query={GET_BY_SUBJECT}>
					{({ loading, data, error }) =>
						error ? (
							<Text>Плохой Интернет</Text>
						) : loading ? (
							<ActivityIndicator />
						) : (
							<ModeProvider data={data} setTimer={() => this.props.setTimer()} />
						)
					}
				</Query>

				<Check />
			</React.Fragment>
		);
	}
}

export class ModeProvider extends React.Component {
	state = {
		favouriteUnivers: [],
		univer: [],
	};

	retrieveData = async () => {
		try {
			const favouriteUnivers = await AsyncStorage.getItem('favouriteUnivers');
			if (favouriteUnivers !== null) {
				this.setState(
					{
						favouriteUnivers: JSON.parse(favouriteUnivers),
						univer: this.props.data,
					},
					() => {
						this.state.univer && console.log('props DataS');
					}
				);
			}
		} catch (error) {
			console.log('Error retrieving data', error);
		}
		this.props.setTimer();
	};

	componentDidMount() {
		this.retrieveData();
		this.saveGlobal(this.props.data);
	}
	saveGlobal = data => {
		global.data = data;
		global.onFavListChange = favouriteUnivers => this.onFavListChange(favouriteUnivers);
	};
	onFavListChange = favouriteUnivers => {
		this.setState(
			{
				favouriteUnivers: favouriteUnivers,
			},
			() => console.log(this.state.favouriteUnivers)
		);
	};
	render() {
		return (
			<ModeContext.Provider
				value={{
					univer: this.state.univer,
					favouriteUnivers: this.state.favouriteUnivers,
					onFavListChange: favouriteUnivers => this.onFavListChange(favouriteUnivers),
				}}
			>
				{this.props.children}
			</ModeContext.Provider>
		);
	}
}
class Check extends React.Component {
	ok = favouriteUnivers => {
		favouriteUnivers.favouriteUnivers
			? console.log(favouriteUnivers.favouriteUnivers)
			: console.log('No data from ModeProvider');
		return <Text>vlkdnvlkd</Text>;
	};
	render() {
		return (
			<ModeProvider>
				<ModeContext.Consumer>
					{context => {
						this.ok(context);
					}}
				</ModeContext.Consumer>
			</ModeProvider>
		);
	}
}
