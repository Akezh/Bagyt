import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import ListSpecialists from "./specialists/ListSpecialists";
import DetailSpecialists from "./specialists/DetailSpecialists";
import HomeScrollTab from "./HomeScrollTab";
import DetailUniversities from "./universities/DetailUniversities";
import ListUniversities from "./universities/ListUniversities";
import FilterScreen from "./universities/FilterScreen";

export default createStackNavigator(
  {
    Specialists: {
      screen: HomeScrollTab
    },
    ListSpecialists: {
      screen: ListSpecialists
    },
    DetailSpecialists: {
      screen: DetailSpecialists,
      navigationOptions: {
        title: "Специальность",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#F94040"
        }
      }
    },
    DetailUniversities: {
      screen: DetailUniversities,
      navigationOptions: {
        title: "Университет",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#F94040"
        }
      }
    },
    ListUniversities: {
      screen: ListUniversities,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#F94040"
        }
      }
    },
    FilterScreen: {
      screen: FilterScreen,
      navigationOptions: {
        title: "Фильтр",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#F94040"
        }
      }
    }
  },
  {
    headerBackTitleVisible: true,
    headerMode: "screen"
  }
);
