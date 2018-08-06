import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Container } from "native-base";
import Mode from "./ModeProvider";

const { height } = Dimensions.get("window");

export default class Colors extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPress(data)}
            />
            <Image
              style={{
                width: 297,
                height: 139,
                left: 40
              }}
              source={require("../assets/logoBagy.png")}
            />
            <Animated.Image
              style={{
                bottom: 40,
                right: 80,
                width: 128,
                height: 146
              }}
              source={require("../assets/logoT.png")}
            />
          </View>
        </Container>
        <Mode setTimer={() => this.props.setTimer()} />
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F94040",
    flexDirection: "row"
  },
  box: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10
  }
});
