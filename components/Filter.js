import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchInput, { createFilter } from 'react-native-search-filter';

export default class MainUniversitiesEnter extends React.Component {
	state = {
		universityData: this.props.universityData,
		searchTerm: '',
	};

	searchUpdated(term) {
		this.props.searchUpdated(term);
	}

	render() {
		return (
			<View style={styles.header}>
				<View style={styles.searchView}>
					<Icon name="ios-search" style={{ margin: 5 }} size={15} color={'grey'} />
					<SearchInput
						onChangeText={term => {
							this.searchUpdated(term);
						}}
						inputViewStyles={{ width: Platform.OS === 'ios' ? '85%' : '93%' }}
						placeholder="Найти"
					/>
				</View>
				<TouchableOpacity onPress={() => this.props.navigateToFilter()} style={styles.filterButton}>
					<Icon name="ios-funnel" style={{ alignSelf: 'flex-end' }} size={26} color={'#b13638'} />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	filterButton: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	itemButton: {
		height: 70,
		width: '100%',
		flexDirection: 'row',
		marginLeft: 10,
		marginBottom: 5,
		marginTop: 5,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 5,
		width: '100%',
	},
	searchView: {
		flexDirection: 'row',
		padding: 5,
		alignItems: 'center',

		borderBottomWidth: 0.5,
		borderBottomColor: 'grey',
	},
});
