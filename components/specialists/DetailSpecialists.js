import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { Constants } from "expo";
import ListUniversities from "../universities/ListUniversities";

class DetailSpecialists extends Component {
  static navigationOptions = {
    title: "Специальность"
  };
  name = this.props.navigation.getParam("specialist").name;

  state = {
    universityData: global.data.allUniversities
      .map(
        univer =>
          univer.majorPoints
            .map(major => major.majorName === this.name)
            .includes(true) && univer
      )
      .filter(univer => univer !== false)
  };

  navigateDetailUnversity = item => {
    this.props.navigation.navigate("DetailUniversities", {
      item: item
    });
  };
  render() {
    const specialist = this.props.navigation.getParam("specialist");
    const logo = this.props.navigation.getParam("logo");

    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View
          style={{
            alignItems: "center",
            width: "90%",
            marginHorizontal: "5%",
            marginTop: 25
          }}
        >
          <Text
            style={{ fontSize: 22, fontWeight: "bold", alignItems: "center" }}
          >
            {specialist.name}
          </Text>
        </View>

        <ScrollView
          style={{
            marginTop: "5%",
            width: "90%",
            marginHorizontal: "5%",
            marginBottom: "5%"
          }}
        >
          <Text>{specialist.description} </Text>
        </ScrollView>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              alignItems: "center",
              color: "black"
            }}
          >
            Университеты
          </Text>
        </View>

        <ListUniversities
          universityData={this.state.universityData}
          navigateDetailUnversity={item => this.navigateDetailUnversity(item)}
          retrieveData={() => console.log("ok")}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: Constants.statusBarHeight
  }
});
export default DetailSpecialists;
