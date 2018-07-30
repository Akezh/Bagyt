import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity, 
        FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';


export default class FilterScreen extends React.Component {

    state= {
        city: '',
        subject:'',
        major:'',
        initialActionSheet:this.cities,
        initialState: ''
    }

    
    allSubject = global.data.allMajors.map(
        major => major.subject
        )  
    
     subject =   [...new Set(this.allSubject)];
     majors = global.data.allMajors.map(
        major => major.name
        )   
    
     allCities=global.data.allUniversities.map(
        univer => univer.city
        ); 
     cities =  [...new Set(this.allCities)]; 

     array = [{
        name: 'Город',
        array:this.cities,
        initialState: 'city'
    },
    {
        name: 'Предмет',
        array: this.majors,
        initialState: 'subject'
    },
    {
        name: 'Специальность',
        array: this.subject,
        initialState:'major'
    }]


    showActionSheet = (arrayName, initialState) => {
        this.setState({
            initialState: initialState
        }, () =>{
            this.ActionSheet.show()
        })
       
      }

  render() {
    
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.array}
          keyExtractor={(_, index) => index}
          numColumns={1}
          renderItem={({ item }) => {
            return (
                <TouchableOpacity
                style={styles.opacity}
                onPress={() => this.showActionSheet(
                    item.array, item.initialState
                )}
                >
                <Text style={styles.text}>
                  <Icon name="ios-city-outline" size={30} />    
                  {item.name}                                           
                   <Icon styname="ios-arrow-forward-outline" size={26} />
                </Text>
              </TouchableOpacity>
            );
          }}
        />
       
                
         
         <ActionSheet
          ref={o => this.ActionSheet = o}
          title={<Text style={{color: '#000', fontSize: 18}}> Город</Text>}
          options={this.majors}
          cancelButtonIndex={0}
          destructiveButtonIndex={4}
          onPress={(index) => { 
           switch(this.state.initialState){
                case 'city': 
                this.setState({
                    city: this.cities[index]
              });
                 case 'subject':
                 this.setState({
                    subject: this.cities[index]
              });
              case 'specialist':
              this.setState({
                specialist: this.cities[index]
		   });}
              
		  }}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  opacity: { 
    marginTop: '2%', 
    height: '8%', 
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey' 
  },
  text: {
    fontSize: 24, 
    marginLeft: '4%', 
    color: '#148EFE'
  }
});

