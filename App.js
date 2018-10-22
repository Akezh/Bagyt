import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import WelcomeScreen from './components';

const client = new ApolloClient({
	uri: 'https://api.graph.cool/simple/v1/cjjtqcm414sdm0134g5rhzsjz',
});

export default class App extends React.Component {
	render() {
		console.disableYellowBox = true;
		return (
			<ApolloProvider client={client}>
				<WelcomeScreen />
			</ApolloProvider>
		);
	}
}
