import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import HomeRoot from "./HomeRoot";
import SearchRoot from "./search/SearchRoot";
import FavouriteRoot from "./favourites/FavouriteRoot";
import Constants from "expo";

export default createBottomTabNavigator(
  {
    Универы: {
      screen: HomeRoot,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-list-box-outline" size={32} color={tintColor} />
        )
      }
    },
    Поиск: {
      screen: SearchRoot,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search-outline" size={32} color={tintColor} />
        )
      }
    },
    Избранное: {
      screen: FavouriteRoot,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-star-outline" size={32} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        paddingTop: 5,
        height: 50,
        backgroundColor: "#F94040"
      },
      activeTintColor: "white",
      inactiveTintColor: "#b13638",
      labelStyle: {
        fontSize: 12,
        backgroundColor: "transparent"
      }
    },
    animationEnabled: true
  }
);
