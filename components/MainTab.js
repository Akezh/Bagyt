import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import HomeRoot from "./HomeRoot";
import SearchScreen from "./search/SearchScreen";
import FavouriteList from "./favourites/FavouriteList";
import Constants from "expo";

export default TabNavigator(
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
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search-outline" size={32} color={tintColor} />
        )
      }
    },
    Избранное: {
      screen: FavouriteList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-star-outline" size={32} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom"
  }
);
