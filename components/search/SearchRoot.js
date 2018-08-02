import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import MainUniversities from "../universities/MainUniversities";
import SearchScreen from "./SearchScreen";

export default createStackNavigator(
  {
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        title: "Поиск по баллам ЕНТ",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#F94040"
        }
      }
    },
    MainUniversities: {
      screen: MainUniversities
    }
  },
  {
    headerBackTitleVisible: true,
    mode: "modal",
    headerMode: "screen"
  }
);
