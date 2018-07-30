import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {Constants} from 'expo';

class DetailSpecialists extends Component{

    static navigationOptions = {
        title: 'Специальность'
      };
render(){
    const specialist = this.props.navigation.getParam('specialist');
    const logo = this.props.navigation.getParam('logo');
    const arr = global.data.allUniversities.map(
        univer =>
            univer.majorPoints.map(
                major=>
                   major.majorName===specialist.name 
            ).includes(true)
         && univer ).filter(
             univer=> univer !== false
         )
    return (
        <ScrollView>
            <Image 
            source = {logo}
          />
             <Text>{specialist.name} </Text>
             <Text>{specialist.description} </Text>

             <Text> Universities </Text>
             <FlatList
          data={arr}
          keyExtractor={(_, index) => index}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity >
                <Text>{item.name}</Text>
              </TouchableOpacity >
            );
          }}
        />
        </ScrollView>
    )
}
}

const styles= StyleSheet.create({
    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        marginTop: Constants.statusBarHeight,
    }
})
export default DetailSpecialists;