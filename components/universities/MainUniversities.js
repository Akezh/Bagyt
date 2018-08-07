import React from "react";
import { View } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Constants } from "expo";
import SearchInput, { createFilter } from "react-native-search-filter";
import Icon from "react-native-vector-icons/Ionicons";
import ListUniversities from "./ListUniversities";

export default class MainUniversities extends React.Component {
  state = {
    universityData: this.props.universityData,
    searchTerm: ""
  };

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
  saveFilteredUniversityData = university => {
    this.setState({
      universityData: university
    });
    this.props.navigation.navigate("Specialists");
  };

  render() {
    const { universityData } = this.state;
    const filteredEmails = universityData.filter(
      createFilter(this.state.searchTerm, "name")
    );
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchView}>
            <Icon
              name="ios-search"
              style={{ margin: 5 }}
              size={15}
              color={"#b13638"}
            />
            <SearchInput
              onChangeText={term => {
                this.searchUpdated(term);
              }}
              inputViewStyles={styles.searchItem}
              placeholder="Найти"
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FilterScreen", {
                universityData,
                saveFilteredUniversityData: university =>
                  this.saveFilteredUniversityData(university),
                nameButton: "Сохранить"
              })
            }
            style={{ justifyContent: "flex-end" }}
          >
            <Icon name="ios-funnel" size={26} color={"#b13638"} />
          </TouchableOpacity>
        </View>

        <ListUniversities
          universityData={filteredEmails}
          navigateDetailUnversity={item =>
            navigation.navigate("DetailUniversities", {
              item: item
            })
          }
          retrieveData={() => console.log("ok")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  searchItem: {
    width: "85%"
  },
  text: {
    marginLeft: 18,
    fontSize: 18,
    color: "#b13638"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    width: "100%"
  },
  searchView: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#b13638"
  },
  filterText: {
    fontSize: 24,
    marginLeft: "2%",
    color: "#148EFE"
  },
  filterButton: {
    marginTop: "2%",
    marginLeft: "5%"
  },
  filterView: {
    width: "100%",
    height: "8%"
  },
  image: {
    width: "100%",
    borderRadius: 10,
    height: "100%",
    opacity: 0.5
  },
  background: {
    width: "100%",
    borderRadius: 10,
    height: "100%",
    backgroundColor: "black",
    position: "absolute"
  },
  titleContainer: {
    flex: 3,
    padding: 15,
    paddingBottom: 0
  },
  synopsisContainer: {
    flex: 7,
    justifyContent: "flex-end",
    padding: 15,
    paddingBottom: 10,
    alignItems: "center"
  },
  textContainer: {
    width: "100%",
    borderRadius: 10,
    height: "100%",
    position: "absolute",
    padding: 0
  }
});
