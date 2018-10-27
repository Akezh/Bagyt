import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { createFilter } from 'react-native-search-filter';
import Filter from '../Filter';
import FavouriteList from '../favourites/FavouriteList';

export default class MainUniversities extends React.Component {
	state = {
		universityData: global.data.allUniversities,
		searchTerm: '',
	};

	searchUpdated(term) {
		this.setState({ searchTerm: term });
	}
	saveFilteredUniversityData = university => {
		this.setState({
			universityData: university,
		});
		this.props.navigation.navigate('University');
	};

	navigateToFilter = () => {
		this.props.navigation.navigate('FilterScreen', {
			constData: global.data.allUniversities,
			universityData: this.state.universityData,
			saveFilteredUniversityData: university => this.saveFilteredUniversityData(university),
			nameButton: 'Сохранить',
		});
	};

	render() {
		const { universityData } = this.state;
		const filteredEmails = universityData.filter(createFilter(this.state.searchTerm, 'name'));
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Filter
					searchUpdated={term => this.searchUpdated(term)}
					navigateToFilter={() => this.navigateToFilter()}
				/>
				<FavouriteList
					universityData={filteredEmails}
					navigateDetailUnversity={item =>
						navigation.navigate('DetailUniversities', {
							item: item,
						})
					}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});
