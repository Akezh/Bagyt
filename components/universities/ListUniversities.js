import React from 'react';
import { Button, View, Text } from 'react-native';
import {
  StyleSheet,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

export default class UniversityScreen extends React.Component {
  static navigationOptions = {
    title: 'Университет',
  };

  render() {

    const universityData= this.props.universityData;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        
        <FlatList
          data={universityData}
          keyExtractor={(_, index) => index}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight 
              onPress = {() => this.navToDetail(item,subject.colorLogo)}
              style={styles.listButton}>
                <Text style={styles.listText}>{item.name}</Text>
              </TouchableHighlight>
            );
          }}
        />
      </View>
    );
  }
}

const styles=StyleSheet.create({
    listButton: {
        borderBottomColor: '#148EFE',
        borderBottomWidth: 1,
        marginHorizontal: 8,
      },
      listText: {
        color: '#148EFE',
        fontSize: 18,
        marginHorizontal: 8,
        marginVertical: 10,
      },
})