import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  PanResponder,
  FlatList,
  Image
} from "react-native";
import { Constants } from "expo";
import { Icon } from "react-native-elements";

export default class App extends Component {
  state = {
    cardsPan: new Animated.ValueXY(),
    cardsStackedAnim: new Animated.Value(0), // add this statement
    currentIndex: 0,
    testArr: global.data.allTests
  };
  static navigationOptions = {
    header: null
  };
  cardsPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (event, gestureState) => {
      this.state.cardsPan.setValue({
        x: gestureState.dx,
        y: this.state.cardsPan.y,
        cardsStackedAnim: new Animated.Value(0), // add this statement
        currentIndex: 0
      });
    },
    onPanResponderTerminationRequest: () => false,
    onPanResponderRelease: (event, gestureState) => {
      Animated.timing(this.state.cardsPan, {
        toValue: 0,
        duration: 800
      }).start();
      Animated.timing(this.state.cardsStackedAnim, {
        toValue: 1,
        duration: 300
      }).start(() => {
        this.state.cardsStackedAnim.setValue(0);
        this.setState({
          currentIndex:
            this.state.currentIndex === 2 ? 0 : this.state.currentIndex + 1
        });
      });
    }
  });

  render() {
    const num = 3;
    const { testArr } = this.state;

    return (
      <React.Fragment>
        <View style={styles.container}>
          {testArr.map(item => (
            <Animated.View
              {...this.cardsPanResponder.panHandlers}
              style={{
                flex: 1,
                width: 250,
                height: 350 + testArr.indexOf(item) * 10,
                marginHorizontal: 20,
                position: "absolute",
                backgroundColor: "#FFFF",
                zIndex: testArr.indexOf(item),
                right: this.state.cardsStackedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    (testArr.indexOf(item) * 50) / num,
                    50 - (testArr.indexOf(item) * 40) / num
                  ]
                }),
                opacity: this.state.cardsStackedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.3]
                }),
                transform: [
                  { translateX: this.state.cardsPan.x },
                  {
                    scale: this.state.cardsStackedAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.9]
                    })
                  }
                ]
              }}
            >
              <View style={styles.imageView}>
                <Image style={styles.image} source={require("./4.jpg")} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.text}>
                  {testArr[this.state.currentIndex].name}
                </Text>
              </View>
              <View style={styles.questView}>
                <Text style={styles.quest}>
                  Вопрос {testArr[this.state.currentIndex].questionNum}
                </Text>
              </View>

              <View style={styles.starView}>
                <Icon
                  style={styles.backIcon}
                  name="star"
                  type="entypo"
                  size={15}
                  color="#e5e853"
                />
                <Icon
                  style={styles.backIcon}
                  name="star"
                  type="entypo"
                  size={15}
                  color="#e5e853"
                />
                <Icon
                  style={styles.backIcon}
                  name="star"
                  type="entypo"
                  size={15}
                  color="#e5e853"
                />
                <Icon
                  style={styles.backIcon}
                  name="star"
                  type="entypo"
                  size={15}
                  color="#e5e853"
                />
                <Icon
                  style={styles.backIcon}
                  name="star"
                  type="entypo"
                  size={15}
                  color="#e5e853"
                />
              </View>
            </Animated.View>
          ))}
        </View>
        <View style={styles.questView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate("TestData", {
                testiD: testArr[this.state.currentIndex].id,
                questionNum: testArr[this.state.currentIndex].questionNum
              })
            }
          >
            <Text>Начать</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F94040",
    padding: 50
  },
  button: {
    borderColor: "grey",
    borderWidth: 1,
    marginVertical: 20,
    zIndex: 100
  },
  starView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    padding: 2,
    flexDirection: "row"
  },
  imageView: {
    flex: 8,
    margin: 5,
    height: "50%",
    width: "90%"
  },
  quest: {
    fontSize: 10,
    color: "#F94040",
    marginVertical: 20
  },
  questView: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },

  image: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    margin: 5
  },
  textView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 17,
    color: "#F94040",
    marginVertical: 10,
    fontWeight: "bold"
  }
});
