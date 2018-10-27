import React from 'react';
import { ScrollView, View, FlatList, StyleSheet } from 'react-native';
import { createFilter } from 'react-native-search-filter';
import Filter from '../Filter';
import ItemSearched from './ItemSearched';

export default class MainUniversitiesEnter extends React.Component {
	state = {
		universityData: this.props.navigation.getParam('universityData'),
		searchTerm: '',
	};
	renderSeparator = () => {
		return <View style={styles.seperator} />;
	};

	searchUpdated(term) {
		this.setState({ searchTerm: term });
	}
	saveFilteredUniversityData = university => {
		this.setState({
			universityData: university,
		});
		this.props.navigation.navigate('MainUniversitiesEnter');
	};

	navigateToFilter = () => {
		this.props.navigation.navigate('FilterScreen', {
			constData: this.props.navigation.getParam('universityData'),
			universityData: this.state.universityData,
			saveFilteredUniversityData: university => this.saveFilteredUniversityData(university),
			nameButton: 'Сохранить',
		});
	};

	navigateToDetail = item => {
		this.props.navigation.navigate('DetailUniversities', {
			item: item,
		});
	};
	render() {
		const universityData = this.state.universityData;
		const filteredEmails = universityData.filter(createFilter(this.state.searchTerm, 'name'));

		return (
			<ScrollView style={styles.container}>
				<Filter
					searchUpdated={term => this.searchUpdated(term)}
					navigateToFilter={() => this.navigateToFilter()}
				/>
				<FlatList
					renderItem={({ item }) => (
						<ItemSearched item={item} navigateToDetail={() => this.navigateToDetail(item)} />
					)}
					keyExtractor={(_, index) => index}
					data={filteredEmails}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	seperator: {
		backgroundColor: 'grey',
		height: 0.5,
		width: '100%',
		marginLeft: 10,
		marginVertical: 3,
		marginRight: 20,
	},
});
