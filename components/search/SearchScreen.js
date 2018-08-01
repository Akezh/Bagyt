import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Button,
  View,
  Text
} from "react-native";
import FilterScreen from "../universities/FilterScreen";
import { Constants } from "expo";
import Icon from "react-native-vector-icons/Ionicons";
import { CheckBox } from "react-native-elements";

const DismissKeyBoard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class SearchScreen extends React.Component {
  state = {
    inputValue: "",
    universityData: global.data.allUniversities,
    checked: false,
    rusChecked: false,
    kazChecked: true
  };

  saveFilteredUniversityData = navigation => {
    const inputValue = parseInt(this.state.inputValue);
    let { universityData } = this.state;
    universityData = universityData
      .map(
        univer1 =>
          univer1.majorPoints
            .map(
              univer =>
                this.state.checked
                  ? this.state.kazChecked
                    ? univer.kazSelPoint === inputValue
                    : univer.rusSelPoint  === inputValue
                  : this.state.kazChecked
                    ? univer.kazPoint === inputValue
                    : univer.rusPoint  === inputValue
            )
            .includes(true) && univer1
      )
      .filter(univer => univer !== false);

    this.props.navigation.navigate("MainUniversitiesEnter", {
      universityData,
      navigation: this.props.navigation
    });
  };

  onPressCheckboxes = () => {
    this.setState({
      rusChecked: !this.state.rusChecked,
      kazChecked: !this.state.kazChecked
    });
  };

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginTop: "50%", alignItems: "center" }}>
          <DismissKeyBoard>
            <View style={{ marginTop: "10%", marginLeft: "5%" }}>
              <Text style={{ fontSize: 24, color: "#148EFE" }}>Балл:</Text>

              <TextInput
                value={this.state.inputValue}
                onChangeText={inputValue => this.setState({ inputValue })}
                style={styles.inp}
                keyboardType="numeric"
                placeholder="Введите балл ЕНТ"
              />

              <CheckBox
                center
                title="Сельская квота"
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
              />
              <CheckBox
                center
                title="Руская Школа"
                checked={this.state.rusChecked}
                onPress={() => this.onPressCheckboxes()}
              />
              <CheckBox
                center
                title="Казахская Школа"
                checked={this.state.kazChecked}
                onPress={() => this.onPressCheckboxes()}
              />
            </View>
          </DismissKeyBoard>
        </View>
        <View style={{ marginTop: "6%", height: "50%" }}>
          <View
            style={{ marginTop: "5%", alignItems: "center", height: "15%" }}
          >
            <Button
              style={{ fontSize: 30 }}
              title="Найти"
              onPress={() => this.saveFilteredUniversityData(navigation)}
            />
          </View>
        </View>
      </ScrollView>
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
  },
  opacity1: {
    marginTop: "2%",
    height: "14%",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    borderTopWidth: 0.5,
    borderTopColor: "grey"
  },
  opacity: {
    height: "14%",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey"
  },
  text: { marginLeft: 18, fontSize: 18, color: "#148EFE" },
  searchView1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15
  },
  searchView2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
