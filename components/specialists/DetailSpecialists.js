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

class DetailSpecialists extends Component {
  static navigationOptions = {
    title: "Специальность"
  };
  render() {
    const specialist = this.props.navigation.getParam("specialist");
    const logo = this.props.navigation.getParam("logo");
    const arr = global.data.allUniversities
      .map(
        univer =>
          univer.majorPoints
            .map(major => major.majorName === specialist.name)
            .includes(true) && univer
      )
      .filter(univer => univer !== false);
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
          {/* <Image source={logo} style={{ width: 100, height: 100 }} /> */}
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
            backgroundColor: "#848587",
            height: 25,
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              marginLeft: "5%",
              fontSize: 18,
              color: "white"
            }}
          >
            Университеты
          </Text>
        </View>

        <FlatList
          data={arr}
          keyExtractor={(_, index) => index}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
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
