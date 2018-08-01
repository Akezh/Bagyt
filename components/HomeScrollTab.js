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
                         navigation={this.props.navigation}
						/>
					</View>
				</ScrollableTabView>
			</View>
		);
	}
}
