import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MainUniversities from "../universities/MainUniversities";

export default class MainUniversitiesEnter extends React.Component {
  state = {};

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          height: 70,
          width: "100%",
          flexDirection: "row",
          marginLeft: 10,
          marginBottom: 5,
          marginTop: 5
        }}
        onPress={() =>
          this.props.navigation.navigate("DetailUniversities", {
            item: item
          })
        }
      >
        <Image
          style={{ width: 100, height: 70, borderRadius: 10 }}
          source={{
            uri: item.photo
              ? item.photo
              : "http://www.turan-edu.kz/wp-content/uploads/2017/06/94191.jpg"
          }}
        />

        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 15,
              color: "black",
              marginRight: 10,
              marginLeft: 20
            }}
          >
            {item.name}
          </Text>

          <Text style={{ color: "grey", marginLeft: 20, fontSize: 12 }}>
            <Icon name="ios-pin-outline" size={12} color={"grey"} /> {item.city}
          </Text>

          <Text style={{ color: "grey", marginLeft: 20, fontSize: 12 }}>
            <Icon name="ios-call-outline" size={12} color={"grey"} />{" "}
            {item.phone}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          backgroundColor: "grey",
          height: 0.5,
          width: "100%",
          marginLeft: 10
        }}
      />
    );
  };

  render() {
    const navigation = this.props.navigation;
    const universityData = navigation.getParam("universityData");
    console.log(universityData);
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          renderItem={this.renderItem}
          keyExtractor={(_, index) => index}
          data={universityData}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </ScrollView>
    );
  }
}
