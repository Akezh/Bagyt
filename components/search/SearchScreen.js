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

const DismissKeyBoard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class SearchScreen extends React.Component {
  state = {
    inputValue: '',
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DismissKeyBoard>
          <View style={{ marginTop: '5%', marginLeft: '5%' }}>
            <Text style={{ fontSize: 24, color: '#148EFE' }}>Балл:</Text>

            <TextInput
              value={this.state.inputValue}
              onChangeText={this.handleTextChange}
              style={styles.inp}
              keyboardType="numeric"
              placeholder="Введите балл ЕНТ"
            />
          </View>
        </DismissKeyBoard>

        <View style={{ marginTop: '6%', height: '50%' }}>
          <TouchableOpacity
            style={styles.opacity1}
            onPress={() => this.props.navigation.navigate('CityList')}>
            <View style={styles.searchView1}>
              <View style={styles.searchView2}>
                <Icon name="ios-home-outline" size={32} color={'#148EFE'}/>
                <Text style={styles.text}>Город</Text>
              </View>
              <Icon name="ios-arrow-forward-outline" size={26} color={'#148EFE'}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.opacity}
            onPress={() => this.props.navigation.navigate('CityList')}>
            <View style={styles.searchView1}>
              <View style={styles.searchView2}>
                <Icon name="ios-book-outline" size={32} color={'#148EFE'}/>
                <Text style={styles.text}>Предмет</Text>
              </View>
              <Icon name="ios-arrow-forward-outline" size={26} color={'#148EFE'}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.opacity}
            onPress={() => this.props.navigation.navigate('CityList')}>
            <View style={styles.searchView1}>
              <View style={styles.searchView2}>
                <Icon name="ios-people-outline" size={30} color={'#148EFE'}/>
                <Text style={styles.text}>
                  Специальность
                </Text>
              </View>
              <Icon name="ios-arrow-forward-outline" size={26} color={'#148EFE'}/>
            </View>
          </TouchableOpacity>

          <View
            style={{ marginTop: '5%', alignItems: 'center', height: '15%' }}>
            <Button style={{ fontSize: 30 }} title="Найти" />
          </View>
        </View>
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
