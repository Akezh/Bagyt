import { createStackNavigator, TabNavigator } from "react-navigation";
import React from "react";
import { View, AsyncStorage } from "react-native";

import LoadingPage from "./components/LoadingPage";
import IntroScreen from "./components/IntroScreen";
import ModeProvider from "./components/ModeProvider";
import MainTab from "./components/MainTab";

export default class NavigatorClass extends React.Component {
  state = {
    screen: "LoadingPage",
    universities: [],
    IntroOpened: ""
  };

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  setTimer = () => {
    this.timeoutHandle = setTimeout(() => {
      this.setState({
        screen: AsyncStorage.getItem("IntroOpened") ? "MainTab" : "IntroScreen"
      });
    }, 5000);
  };

  changeScreen = screen => {
    this.setState({
      screen: screen
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.screen === "LoadingPage" && (
          <LoadingPage setTimer={() => this.setTimer()} />
        )}
        {this.state.screen === "IntroScreen" && (
          <IntroScreen changeScreen={screen => this.changeScreen(screen)} />
        )}
        {this.state.screen === "MainTab" && <MainTab />}
      </View>
    );
  }
}
