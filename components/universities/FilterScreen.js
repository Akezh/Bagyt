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
        array: ['Cancel','All',...new Set(global.data.allUniversities.map(
            univer => univer.city
            ))],
        initialState: 'city'
    },
    {
        name: 'Предмет',
        array:  ['Cancel','All', ...new Set(global.data.allMajors.map(
            major => major.subject
            )  )],
        initialState: 'subject'
    },
    {
        name: 'Специальность',
        array: ['Cancel','All'].concat(global.data.allMajors.map(
            major => major.name
            )) ,
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
    finalUniversitytydata = (universityData, params) =>{
      
      if(this.state.city==='All' || this.state.major==='All' ||this.state.subject==='All'){
          universityData= global.data.allUniversities
      }

      if(this.state.city!=='' && this.state.city!=='All')  {
          
        universityData = universityData.filter(
            univer => univer.city === this.state.city
        )
      }
        
        console.log('with city ',universityData)

        if(this.state.major!=='' && this.state.major!=='All') {

            universityData = universityData.map(
                univer =>
                    univer.majorPoints.map(
                        major=>
                           major.majorName=== this.state.major
                    ).includes(true)
                 && univer ).filter(
                     univer=> univer !== false
                 )
        }
        
        console.log('with major ',universityData)

        if(this.state.subject!==''&& this.state.subject!=='All') {

            universityData = universityData.map(univer =>
                    
                univer.majorPoints.map(
                    (majorPoint) => majorPoint.major && (
                        (majorPoint.major.subject 
                        ===  this.state.subject))
                    ).includes(true) 
                    && univer).filter(
                        univer=> univer !== false
                    
            )
        }
        
        params.saveFilteredUniversityData(universityData)
    }
  render() {
    let universityData = this.props.navigation.getParam('universityData');
    const { params} = this.props.navigation.state;
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

         <TouchableOpacity
                style={styles.opacity}
                onPress={() => 
                    this.finalUniversitytydata(universityData, params)
                   // params.saveFilteredUniversityData(universityData)
                }
                >
                <Text style={styles.text}>
                  <Icon name="ios-arrow-forward-outline" size={30} />    
                  Press me                                       
                   <Icon styname="ios-arrow-forward-outline" size={26} />
                </Text>
              </TouchableOpacity>
       
                
         
         <ActionSheet
          ref={o => this.ActionSheet = o}
          title={<Text style={{color: '#000', fontSize: 18}}>
           {this.state.initialActionSheetName}
           </Text>}
          options={this.state.initialActionSheet}
          cancelButtonIndex={0}
          destructiveButtonIndex={4}
          onPress={(index) => { 
           if(this.state.initialActionSheetName==='Город'){
                
                this.setState({
                    city: this.state.initialActionSheet[index]
                }, 
                () =>console.log(this.state.city, 'city')) 
            }
               else if(this.state.initialActionSheetName==='Предмет'){
                 this.setState({
                    subject: this.state.initialActionSheet[index]
                },
                () =>console.log(this.state.subject, 'subject'))
            } 
            else if(this.state.initialActionSheetName==='Специальность'){
                this.setState({
                    major: this.state.initialActionSheet[index]
                },
                () =>console.log(this.state.major, 'major'))


        }
		  }}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    opacity: {
        height: '10%',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        flex: 1
      },
      text: { marginLeft: 18, fontSize: 24, color: '#148EFE' },
      searchView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
      },
      searchView2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
});

