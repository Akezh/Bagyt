import React from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const ModeContext = React.createContext();

export default class ModeProvider extends React.Component {
	saveGlobal = data => {
		// console.log(data);
		this.props.setUniversity(data);
		global.data = {
			...data,
			allUniversities: data.allUniversities.map(university => ({ ...university, isFav: false })),
		};
	};

	render() {
		this.props.setTimer;
		this.saveGlobal(this.props.data);
		return <Text />;
	}
}
