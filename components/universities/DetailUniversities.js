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
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

export default class UniversityScreen extends React.Component {
  static navigationOptions = {
    title: 'Университет',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        
      </View>
    );
  }
}