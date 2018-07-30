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
        initialActionSheet:[],
        initialState: '',
        initialActionSheetName: '',
    }
     array = [{
        name: 'Город',
        array: ['Cancel',...new Set(global.data.allUniversities.map(
            univer => univer.city
            ))],
        initialState: 'city'
    },
    {
        name: 'Предмет',
        array:  ['Cancel', ...new Set(global.data.allMajors.map(
            major => major.subject
            )  )],
        initialState: 'subject'
    },
    {
        name: 'Специальность',
        array: global.data.allMajors.map(
            major => major.name
            )  ,
        initialState:'major'
    }]


    showActionSheet = (item) => {
        this.setState({
            initialActionSheet:item.array,
            initialState: item.initialState, 
            initialActionSheetName: item.name
        }, () =>{
            this.ActionSheet.show()
        })
       
      }

  render() {
    const { navigation } = this.props;
    const universityData = navigation.getParam('universityData');
   const saveFilteredUniversityData = navigation.getParam('saveFilteredUniversityData');
    
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
                    item
                )}
                >
                <Text style={styles.text}>
                  <Icon name="ios-arrow-forward-outline" size={30} />    
                  {item.name}                                           
                   <Icon styname="ios-arrow-forward-outline" size={26} />
                </Text>
              </TouchableOpacity>
            );
          }}
        />
       
                
         
         <ActionSheet
          ref={o => this.ActionSheet = o}
          title={<Text style={{color: '#000', fontSize: 18}}>
           {this.state.initialActionSheetName}
           </Text>}
          options={this.state.initialActionSheet}
          cancelButtonIndex={0}
          destructiveButtonIndex={4}
          onPress={(index) => { 
           switch(this.state.initialState){
                case 'city': 
                univerData = universityData.filter(
                    univer => univer.city === this.state.initialActionSheet[index]
                )
                
                console.log(univerData)


                 case 'subject':
                 univerData = universityData.map(univer =>
                    univer.majorPoints.map(
                        (majorPoint) => majorPoint.major && (
                            majorPoint.major.subject 
                            ===  this.state.initialActionSheet[index] 
                            && majorPoint.major)
                        ) && univer
                )
                console.log(univerData)

              case 'specialist':
              univerData = universityData.map(
                univer =>
                    univer.majorPoints.map(
                        major=>
                           major.majorName=== this.state.initialActionSheet[index]
                    ).includes(true)
                 && univer ).filter(
                     univer=> univer !== false
                 )
                 
                 console.log(univerData);
        }
              
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

