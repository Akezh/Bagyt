import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {
  StyleSheet,
  TextInput,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import ListUniversities from './ListUniversities'

export default class MainUniversities extends React.Component {
  

  render() {
      const universityData= this.props.universityData;
      return(
        <View style={styles.container}>
                <View style={styles.filterView}>
                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={() => this.props.toFilterScreen()}>
                            <Text style={styles.filterText}>
                            <Icon name="ios-menu-outline" size={24} />
                            Все категории
                            <Icon name="ios-arrow-forward-outline" size={26} />
                            </Text>
                    </TouchableOpacity>
                </View>

                <ListUniversities universityData={universityData}/>
        </View>
  ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  universityView: {
    flex: 1,
    paddingBottom: 15,
    alignItems: 'center',
    height: 200,
    borderRadius: 10,
    marginLeft: '3%',
    marginRight: '3%',
  },

  touch: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
  },
  filterText: {
    fontSize: 24,
    marginLeft: '2%',
    color: '#148EFE',
  },
  filterButton: {
    marginTop: '2%',
    marginLeft: '5%',
  },
  filterView: {
    width: '100%',
    height: '8%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  image: {
    width: '100%',
    borderRadius: 10,
    height: '100%',
    opacity: 0.5,
  },
  background: {
    width: '100%',
    borderRadius: 10,
    height: '100%',
    backgroundColor: 'black',
    position: 'absolute',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  titleContainer: {
    flex: 3,
    padding: 15,
    paddingBottom: 0,
  },
  synopsisContainer: {
    flex: 7,
    justifyContent: 'flex-end',
    padding: 15,
    paddingBottom: 10,
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
    borderRadius: 10,
    height: '100%',
    position: 'absolute',
    padding: 0,
  },
});
