import React from 'react';
import { ActivityIndicator, AsyncStorage, Text } from 'react-native';
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

export default class GetData extends React.Component {
	static navigationOptions = {
		header: null,
	};
	state = {
		dataStored: false,
		data: [],
	};
	saveGlobal = () => {
		const { data } = this.state;

		global.data = {
			...data,
			allUniversities: data.allUniversities.map(university => ({
				...university,
				isFav: false,
			})),
		};

		this.props.setTimer();
	};

	saveData = data => {
		try {
			this.setState(
				{ data: data },
				() => {
					AsyncStorage.setItem('data', JSON.stringify(data));
				},
				() => {
					this.saveGlobal();
				}
			);
		} catch (error) {
			console.log('error', error);
		}

		return <Text />;
	};
	retrieveData = async () => {
		try {
			const data = await AsyncStorage.getItem('data');
			if (data !== null) {
				this.setState(
					{
						dataStored: true,
						data: JSON.parse(data),
					},
					() => {
						this.saveGlobal();
					}
				);
			}
		} catch (error) {
			console.log('Error retrieving data', error);
		}
	};
	componentDidMount() {
		this.retrieveData();
	}

	render() {
		return (
			<React.Fragment>
				{this.state.dataStored ? (
					<Text />
				) : (
					<Query query={GET_BY_SUBJECT}>
						{({ loading, data, error }) =>
							error ? <Text>Плохой Интернет</Text> : loading ? <ActivityIndicator /> : this.saveData(data)
						}
					</Query>
				)}
			</React.Fragment>
		);
	}
}
