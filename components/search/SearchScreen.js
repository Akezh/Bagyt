import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  ScrollView
} from "react-native";
import FilterScreen from "../universities/FilterScreen";
import { Constants } from "expo";
import Icon from "react-native-vector-icons/Ionicons";
import { CheckBox, Button } from "react-native-elements";

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
    kazChecked: true,
    buttonBack: "#FFFF",
    disabled: true
  };

  onChange = inputValue => {
    this.setState({
      inputValue
    });

    if (
      parseInt(this.state.inputValue) > 0 &&
      parseInt(this.state.inputValue) < 141
    ) {
      this.setState({
        buttonBack: "#F94040",
        disabled: false
      });
    }
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
                    ? univer.kazSelPoint >= inputValue
                    : univer.kazSelPoint >= inputValue
                  : this.state.kazChecked
                    ? univer.kazPoint >= inputValue
                    : univer.kazPoint >= inputValue
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
      <DismissKeyBoard>
        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={{ flex: 1 }}>
            <View style={{ marginTop: "10%", alignItems: "center" }}>
              <View style={{ width: "90%", alignItems: "center" }}>
                <Text style={{ color: "grey", fontSize: 14 }}>
                  Данная страница предназначена для приблизительного поиска
                  грантов в университетах. Данные о минимальных баллах ЕНТ для
                  приобретения гранта взяты с прошлых годов.
                </Text>
              </View>

              <View
                style={{
                  marginTop: "5%",
                  marginBottom: 50,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "white"
                }}
              >
                <Icon name="ios-home-outline" size={20} color="#F94040" />
                <TextInput
                  value={this.state.inputValue}
                  onChangeText={inputValue => this.onChange(inputValue)}
                  style={styles.inp}
                  placeholder="Введите балл ЕНТ"
                  keyboardType="numeric"
                />
              </View>

              <View>
                <CheckBox
                  center
                  title="Сельская квота"
                  textStyle={{ color: "white" }}
                  checked={this.state.checked}
                  onPress={() =>
                    this.setState({ checked: !this.state.checked })
                  }
                  containerStyle={{
                    backgroundColor: "#F94040",
                    width: 200,
                    borderRadius: 5
                  }}
                  checkedColor={"white"}
                />
                <CheckBox
                  center
                  title="Русская Школа"
                  textStyle={{ color: "white" }}
                  checked={this.state.rusChecked}
                  onPress={() => this.onPressCheckboxes()}
                  containerStyle={{
                    backgroundColor: "#F94040",
                    width: 200,
                    borderRadius: 5
                  }}
                  checkedColor={"white"}
                />
                <CheckBox
                  center
                  title="Казахская Школа"
                  textStyle={{ color: "white" }}
                  checked={this.state.kazChecked}
                  onPress={() => this.onPressCheckboxes()}
                  containerStyle={{
                    backgroundColor: "#F94040",
                    width: 200,
                    borderRadius: 5
                  }}
                  checkedColor={"white"}
                />
              </View>
            </View>
            <View style={{ marginTop: "6%", height: "50%" }}>
              <View
                style={{ marginTop: "5%", alignItems: "center", height: "15%" }}
              >
                <Button
                  title="Найти"
                  onPress={() => this.saveFilteredUniversityData(navigation)}
                  disabled={this.state.disabled}
                  buttonStyle={{
                    backgroundColor: this.state.buttonBack,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 30,
                    width: 150
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </DismissKeyBoard>
    );
  }
}

const styles = StyleSheet.create({
  inp: {
    width: 200,
    height: 50,
    borderBottomWidth: 1.5,
    fontSize: 18,
    borderBottomColor: "#F94040",
    backgroundColor: "white",
    paddingLeft: 20
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
