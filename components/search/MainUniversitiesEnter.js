import React from 'react';
import { ScrollView, View, TouchableOpacity, FlatList, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchInput, { createFilter } from 'react-native-search-filter';

export default class MainUniversitiesEnter extends React.Component {
	state = {
		universityData: this.props.navigation.getParam('universityData'),
		searchTerm: '',
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
	renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={{
					height: 70,
					width: '100%',
					flexDirection: 'row',
					marginLeft: 10,
					marginBottom: 5,
					marginTop: 5,
				}}
				onPress={() =>
					this.props.navigation.navigate('DetailUniversities', {
						item: item,
					})
				}
			>
				<Image
					style={{ width: 100, height: 70, borderRadius: 10 }}
					source={{
						uri: item.photo ? item.photo : 'http://www.turan-edu.kz/wp-content/uploads/2017/06/94191.jpg',
					}}
				/>

				<View style={{ flex: 1, justifyContent: 'center' }}>
					<Text
						style={{
							fontSize: 18,
							color: 'black',
							marginRight: 10,
							marginLeft: 20,
						}}
					>
						{item.name}
					</Text>

					<Text style={{ color: 'grey', marginLeft: 20, fontSize: 12 }}>
						<Icon name="ios-pin-outline" size={12} color={'grey'} /> {item.city}
					</Text>

					<Text style={{ color: 'grey', marginLeft: 20, fontSize: 12 }}>
						<Icon name="ios-call-outline" size={12} color={'grey'} /> {item.phone}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};

	renderSeparator = () => {
		return (
			<View
				style={{
					backgroundColor: 'grey',
					height: 0.5,
					width: '100%',
					marginLeft: 10,
				}}
			/>
		);
	};

	render() {
		const universityData = this.state.universityData;
		const filteredEmails = universityData.filter(createFilter(this.state.searchTerm, 'name'));
		const constData = this.props.navigation.getParam('universityData');
		return (
			<ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
				<View style={styles.header}>
					<View style={styles.searchView}>
						<Icon name="ios-search" style={{ margin: 5 }} size={15} color={'grey'} />
						<SearchInput
							onChangeText={term => {
								this.searchUpdated(term);
							}}
							inputViewStyles={styles.searchItem}
							placeholder="Найти"
						/>
					</View>
					<TouchableOpacity
						onPress={() =>
							this.props.navigation.navigate('FilterScreen', {
								constData,
								universityData,
								saveFilteredUniversityData: university => this.saveFilteredUniversityData(university),
								nameButton: 'Сохранить',
							})
						}
						style={{ justifyContent: 'flex-end' }}
					>
						<Icon name="ios-funnel" size={26} color={'#b13638'} />
					</TouchableOpacity>
				</View>
				<FlatList
					renderItem={this.renderItem}
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
	searchItem: {
		width: '85%',
	},
	text: {
		marginLeft: 18,
		fontSize: 18,
		color: '#b13638',
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
