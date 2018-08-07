import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ProgressBarAndroid,
  ProgressViewIOS
} from "react-native";
import { Constants } from "expo";
import * as Progress from "react-native-progress";

export default class App extends Component {
  renderSeparator = () => {
    return <View style={{ paddingTop: 10 }} />;
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.onSelect(item.point)}
      >
        <Text style={{ fontSize: 14, color: "black", marginHorizontal: 15 }}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { question } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ flex: 0.6, alignItems: "center" }}>
          <View style={styles.progress}>
            <Progress.Bar
              progress={this.props.progress}
              width={250}
              height={30}
              color={"#FFF"}
            />
          </View>

          <View
            style={{
              marginTop: "5%",
              paddingHorizontal: 20,
              width: "100%",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>
              {question.question}
            </Text>
          </View>
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={question.answerSheetses}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F94040"
  },
  progress: {
    marginTop: "5%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 350,
    height: 100,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15
  }
});
