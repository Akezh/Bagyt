import React from "react";
import { View, Text } from "react-native";
import {
  StyleSheet,
  TextInput,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import { Constants } from "expo";
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from "react-native-elements";

export default class FavouriteList extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 24, color: "#148EFE" }}>Избранное:</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inp: {
    width: 170,
    height: 50,
    marginRight: 10,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#148EFE"
  }
});
