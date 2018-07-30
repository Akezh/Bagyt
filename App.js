import React from 'react';
import {Text, View} from 'react-native';
import { createStackNavigator, TabNavigator } from 'react-navigation';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import LoadingPage from './index';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjjtqcm414sdm0134g5rhzsjz',
});
const MainRoot = createStackNavigator({

    LoadingPage:{
        screen: LoadingPage
      }
    } , {
      headerMode: 'none',
    }

);

export default class App extends React.Component {
  
  render() {  
    console.disableYellowBox = true;
    return ( 
     <ApolloProvider client={client}>
     <LoadingPage />
     </ApolloProvider>
    );
  }
}

