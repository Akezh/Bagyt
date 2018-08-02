import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import MainUniversities from "../universities/MainUniversities";
import FavouriteList from "./FavouriteList";

export default createStackNavigator(
  {
    FavouriteList: {
      screen: FavouriteList,
      navigationOptions: {
        title: "Избранное",
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
    headerMode: "screen"
  }
);
