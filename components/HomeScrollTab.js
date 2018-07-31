import React, { Component } from 'react';
import { View } from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import Constants from 'expo';

import MainSpecialists from './specialists/MainSpecialists';
import MainUniversities from './universities/MainUniversities';

export default class HomeScrollTab extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    universityData: global.data.allUniversities
}

saveFilteredUniversityData=(university)=>{
     this.setState({
       universityData: university
     }, () => console.log(this.state.universityData))
     
}

  render() {
    return (
      <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
        <ScrollableTabView
          tabBarActiveTextColor="#148EFE"
          tabBarUnderlineStyle={{ backgroundColor: '#148EFE' }}
          style={{ marginTop: '5%' }}
          initialPage={1}
          renderTabBar={() => <DefaultTabBar />}>
          <View
            style={{ flex: 1, backgroundColor: 'white' }}
            tabLabel="Специальности">
            <MainSpecialists
              toListSpecialists={item =>
                this.props.navigation.navigate('ListSpecialists', {
                  item: item,
                })
              }
            />
          </View>
          <View 
          
          style={{ flex: 1, backgroundColor: 'white' }}
          tabLabel="Университеты">
            <MainUniversities
              toFilterScreen={() =>
                this.props.navigation.navigate('FilterScreen',{
                  universityData: this.state.universityData,
                  saveFilteredUniversityData:(university) =>this.saveFilteredUniversityData(university)
                })
              }

              universityData = {this.state.universityData}
            />
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}
