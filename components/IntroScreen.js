import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Constants } from 'expo';
import Swiper from 'react-native-swiper';


export default class IntroScreen extends React.Component {
render(){
  return(
    <Swiper
    dot={
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,.2)',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      />
    }
    activeDot={
      <View
        style={{
          backgroundColor: '#148EFE',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      />
    }>
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          style={styles.circleImage}
          source={require('../assets/swiper1.png')}
        />
      </View>
      <Text style={styles.paragraph}>
        Верный помощник при выборе университета
      </Text>
    </View>
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          style={styles.circleImage}
          source={require('../assets/swiper2.png')}
        />
      </View>
      <Text style={styles.paragraph}>
      Гид по специальностям в Казахстане
      </Text>
    </View>
    <View  showsPagination={false} style={styles.container}>
      <View style={styles.circle}>
        <Image
          style={styles.circleImage}
          source={require('../assets/swiper3.png')}
        />
      </View>
      <Text style={styles.paragraph}>
      Психологические тесты для выбора специальности
      </Text>
    <TouchableOpacity 
    style={styles.nextButton}
    onPress={() =>this.props.changeScreen('MainTab')}>
        <Text
        style={styles.nextText}
        >
            Дальше
            </Text>
    </TouchableOpacity>
    </View>
  </Swiper>
  )
} 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFF',
  },
  circleImage: {
    width: '50%',
    height: '50%',
  },
  circle: {
    width: 235,
    height: 235,
    borderRadius: 235 / 2,
    backgroundColor: '#148EFE',

    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton:{
      width:'35%',
      height:'8%',
      position:'absolute',
      bottom:'8%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
      backgroundColor:  '#148EFE',
      zIndex:5,
  },
  nextText:{
      color:'white'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#148EFE',
  },
});
