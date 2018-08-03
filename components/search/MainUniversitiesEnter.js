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
  state = {
    dataSource: [
      {
        name: "MUIT University",
        city: "Almaty",
        photo:
          "https://www.wikicity.kz/fotos_ms/Company_616_WiaqoAQuBEf6woApawKzl9yl.jpeg",
        phone: "8 (7172) 756 886"
      },
      {
        name: "Nazarbayev University",
        city: "Astana",
        photo:
          "https://www.wikicity.kz/fotos_ms/Company_616_WiaqoAQuBEf6woApawKzl9yl.jpeg",
        phone: "8 (7222) 321 886"
      },

      {
        name: "Shakarim University",
        city: "Semey",
        photo:
          "https://www.wikicity.kz/fotos_ms/Company_616_WiaqoAQuBEf6woApawKzl9yl.jpeg",
        phone: "8 (7112) 654 886"
      },

      {
        name: "Taraz University",
        city: "Taraz",
        photo:
          "https://www.wikicity.kz/fotos_ms/Company_616_WiaqoAQuBEf6woApawKzl9yl.jpeg",
        phone: "8 (7172) 221 886"
      },

      {
        name: "KBTU University",
        city: "Almaty",
        photo:
          "https://www.wikicity.kz/fotos_ms/Company_616_WiaqoAQuBEf6woApawKzl9yl.jpeg",
        phone: "8 (7172) 654 886"
      },

      {
        name: "SDU University",
        city: "Almaty",
        photo:
          "https://www.wikicity.kz/fotos_ms/Company_616_WiaqoAQuBEf6woApawKzl9yl.jpeg",
        phone: "8 (7172) 654 886"
      }
    ]
  };

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
      >
        <Image
          style={{ width: 100, height: 70, borderRadius: 10 }}
          source={{ uri: item.photo }}
        />

        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 18,
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
          data={this.state.dataSource}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </ScrollView>
    );
  }
}
