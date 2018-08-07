import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import ItemUniversity from "./ItemUniversity";
import FavouriteProvider, { ModeContext } from "../favourites/FavouriteList";

export default class UniversityScreen extends React.Component {
  static navigationOptions = {
    title: "Университет"
  };

  state = {
    favouriteUnivers: [],
    isTrue: true
  };

  renderSeparator = () => {
    return <View style={{ width: "100%", marginLeft: "27%" }} />;
  };

  setAsyncUniver = async (currentUniversity, retrieveData) => {
    const { favouriteUnivers } = this.state;

    const newFavouriteUniversIds = favouriteUnivers.includes(
      currentUniversity.id
    )
      ? favouriteUnivers.filter(univer => univer !== currentUniversity.id)
      : [...favouriteUnivers, currentUniversity.id];

    try {
      retrieveData();
      this.setState({ favouriteUnivers: newFavouriteUniversIds }, () => {
        AsyncStorage.setItem(
          "favouriteUnivers",
          JSON.stringify(newFavouriteUniversIds)
        );
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  retrieveData = async () => {
    try {
      const favouriteUnivers = await AsyncStorage.getItem("favouriteUnivers");
      if (favouriteUnivers !== null) {
        this.setState(
          {
            favouriteUnivers: JSON.parse(favouriteUnivers)
          }
        );
      }
    } catch (error) {
      console.log("Error retrieving data", error);
    }
    this.props.setTimer();
  };
  componentDidMount() {
    this.retrieveData();
  }
  render() {
    const { universityData } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          data={universityData}
          extraData={[this.state.favouriteUnivers]}
          keyExtractor={(_, index) => index}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) => {
            return (
              <ItemUniversity
                item={item}
                setAsyncUniver={item =>
                  this.setAsyncUniver(item, this.props.retrieveData)
                }
                favouriteUnivers={this.state.favouriteUnivers}
                navigateDetailUnversity={this.props.navigateDetailUnversity}
              />
            );
          }}
        />
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touch: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%"
  },
  opacity: {
    height: "10%",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey"
  },
  searchView1: {
    paddingHorizontal: 15
  },
  searchView2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  container: {
    flex: 1,
    paddingBottom: 15,
    alignItems: "center",
    height: 200,
    borderRadius: 10,
    marginLeft: "3%",
    marginRight: "3%"
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
  text2: {
    color: "white",
    fontSize: 16
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
