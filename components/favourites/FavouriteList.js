import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet, TextInput, Alert, FlatList, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import ListUniversities from '../universities/ListUniversities';

export default class FavouriteList extends React.Component {

   try {
    const favouriteUnivers = await AsyncStorage.getItem('favouriteUnivers');
    if (favouriteUnivers !== null) {
      this.setState(
        {
          favouriteUnivers: JSON.parse(favouriteUnivers),
        },
        () => {
          console.log(favouriteUnivers);
        }
      );
    }
  } catch (error) {
    // Error retrieving data
  }
	render() {
		return;
		<ListUniversities
			universityData={universityData}
			navigateDetailUnversity={item => this.navigateDetailUnversity(item)}
		/>;
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
