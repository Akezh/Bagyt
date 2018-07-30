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
        iconName: 'ios-home-outline',
        array: ['Cancel',...new Set(global.data.allUniversities.map(
            univer => univer.city
            ))],
        initialState: 'city'
    },
    {
        name: 'Предмет',
        iconName: 'ios-book-outline',
        array:  ['Cancel', ...new Set(global.data.allMajors.map(
            major => major.subject
            )  )],
        initialState: 'subject'
    },
    {
        name: 'Специальность',
        iconName: 'ios-people-outline',
        array: ['Cancel',global.data.allMajors.map(
            major => major.name
            )  ],
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
        style={{ flex: 1 }}
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
                <View style={styles.searchView1}>
              <View style={styles.searchView2}>
                <Icon name={item.iconName} size={30} color={'#148EFE'}/>
                <Text style={styles.text}>
                  {item.name}
                </Text>
              </View>
              <Icon name="ios-arrow-forward-outline" size={26} color={'#148EFE'}/>
            </View>
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
                ), console.log(univerData)


                 case 'subject':
                 univerData = universityData.map(
                    univer =>
                        univer.majorPoints.map(
                            ({subject}) => subject)

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
                 ),
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
        height: '20%',
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

