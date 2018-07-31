import React from 'react';
import { Button, View, Text } from 'react-native';
import {
  StyleSheet,
  TextInput,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';



export default class SearchScreen extends React.Component {
  

  render() {
    return (
      <View style={{ flex: 1 }}>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inp: {
    width: 170,
    height: 50,
    marginRight: 10,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#148EFE',
  },
  opacity1: {
    marginTop: '2%',
    height: '19%',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
  },
  opacity: {
    height: '19%',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
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
