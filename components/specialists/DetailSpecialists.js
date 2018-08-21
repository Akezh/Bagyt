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
import FavouriteList from "../favourites/FavouriteList";

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
          <Text style={styles.nameSpec}>{specialist.name}</Text>
        </View>

        <ScrollView
          style={{
            marginTop: "5%",
            width: "90%",
            marginHorizontal: "5%",
            marginBottom: "5%"
          }}
        >
          <Text style={styles.object}>Где вы будете работать?</Text>
          <Text style={styles.desSpec}>{specialist.object} </Text>

          <Text style={styles.subject}>Что вы будете изучать?</Text>
          <Text style={styles.desSpec}>{specialist.description} </Text>
        </ScrollView>

        <View style={styles.univerListView}>
          <Text style={styles.univerText}>Университеты</Text>
        </View>

        <FavouriteList
          universityData={this.state.universityData}
          navigateDetailUnversity={item => this.navigateDetailUnversity(item)}
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
    backgroundColor: "#dbdde0",
    marginTop: Constants.statusBarHeight
  },
  desSpec: {
    color: "#616366",
    marginLeft: 5
  },
  object: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  subject: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5
  },
  nameSpec: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#303133"
  },
  univerListView: {
    justifyContent: "flex-end",
    borderBottomColor: "black",
    borderTopColor: "black",
    borderBottomWidth: 0.5,
    margin: 5,
    padding: 5
  },
  univerText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4e5056",
    marginLeft: 10
  }
});
export default DetailSpecialists;
