import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Dimensions
} from "react-native";
import { Constants } from "expo";
import { Button } from "react-native-elements";

const { height } = Dimensions.get("window");

export default class TestAnswer extends Component {
  state = {
    result: "",
    resultDes: ""
  };

  renderSeparator = () => {
    return <View style={{ paddingTop: 10 }} />;
  };

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          width: 350,
          height: 100,
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 15
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 18, color: "black", marginRight: 10 }}>
            {item.answer}
          </Text>
        </View>
      </View>
    );
  };

  componentDidMount() {
    const score = this.props.score;
    const answer = this.props.answer;
    console.log(answer[0].scoreMax, "scoreMax");
    console.log(score);
    answer.forEach(ans => {
      ans.scoreMax >= score && ans.scoreMin <= score
        ? this.setState({
            result: ans.result,
            resultDes: ans.resultDes
          })
        : null;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ color: "#F94040", fontSize: 24 }}>
            Результаты теста
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: "5%",
            height: 100
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: "5%",
              height: 100
            }}
          >
            <Image
              style={{ width: 80, height: 65 }}
              source={{
                uri:
                  "https://d1zil96gdwwtdc.cloudfront.net/images/files/000/000/425/original/Grade_A.jpg?1482170231"
              }}
            />
          </View>

          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 20, color: "#F94040" }}>
              {this.state.resultDes}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: "3%"
          }}
        >
          <Text
            style={{
              fontSize: Platform.OS === "ios" ? (height === 812 ? 14 : 12) : 12,
              color: "black"
            }}
          >
            {this.state.result}
          </Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Button
            title="Пройти другой тест"
            titleStyle={{ color: "white" }}
            buttonStyle={{
              backgroundColor: "#F94040",
              width: 200,
              height: 70,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 20
            }}
            containerStyle={{ marginTop: 20 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white"
  }
});
