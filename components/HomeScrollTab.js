import React, { Component } from 'react';
import { View, Platform, Dimensions } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Constants from 'expo';

import MainSpecialists from './specialists/MainSpecialists';
import MainUniversities from './universities/MainUniversities';

const { height } = Dimensions.get('window');

export default class HomeScrollTab extends Component {
	static navigationOptions = {
		header: null,
	};

	state = {
		universityData: global.data.allUniversities,
	};

	saveFilteredUniversityData = university => {
		this.setState({
			universityData: university,
		});
		this.props.navigation.navigate('Specialists');
	};

	navigateDetailUnversity = item => {
		this.props.navigation.navigate('DetailUniversities', {
			item: item,
		});
	};

	render() {
		return (
			<View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? (height === 812 ? 44 : 20) : 0 }}>
				<ScrollableTabView
					tabBarActiveTextColor="#148EFE"
					tabBarUnderlineStyle={{ backgroundColor: '#148EFE' }}
					initialPage={1}
					renderTabBar={() => <DefaultTabBar />}
				>
					<View style={{ flex: 1, backgroundColor: 'white' }} tabLabel="Специальности">
						<MainSpecialists
							toListSpecialists={item =>
								this.props.navigation.navigate('ListSpecialists', {
									item: item,
								})
							}
						/>
					</View>
					<View style={{ flex: 1, backgroundColor: 'white' }} tabLabel="Университеты">
						<MainUniversities
							toFilterScreen={() =>
								this.props.navigation.navigate('FilterScreen', {
									universityData: this.state.universityData,
									saveFilteredUniversityData: university =>
										this.saveFilteredUniversityData(university),
									nameButton: 'Сохранить',
								})
							}
							universityData={this.state.universityData}
							navigateDetailUnversity={item => this.navigateDetailUnversity(item)}
						/>
					</View>
				</ScrollableTabView>
			</View>
		);
	}
}
