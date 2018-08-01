import React from 'react';
import {View} from 'react-native';
import MainUniversities from '../universities/MainUniversities'

export default class MainUniversitiesEnter extends React.Component{

    render(){

     const navigation = this.props.navigation
     const universityData  = navigation.getParam("universityData");
     console.log(universityData)
        return(
                <MainUniversities universityData={universityData}
                navigation={navigation}
                />
        )
    }
}