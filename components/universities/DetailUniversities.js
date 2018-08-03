import React from "react";
import { Button, View, Text, ScrollView } from "react-native";
import { createStackNavigator } from "react-navigation";
import {
  StyleSheet,
  TextInput,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";
import { Constants } from "expo";
import Icon from "react-native-vector-icons/Ionicons";
import ScrollableTabView, {
  DefaultTabBar
} from "react-native-scrollable-tab-view";

export default class UniversityScreen extends React.Component {
  state = {
    modalVisible: false
  };

  showPoints = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const specialList = item.majorPoints;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white"
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 150
          }}
          source={{
            uri:
              "https://www.wikicity.kz/fotos_ms/Company_616_WiaqoAQuBEf6woApawKzl9yl.jpeg"
          }}
        />
        <Text style={{ fontSize: 22, marginTop: "2%", marginHorizontal: "2%" }}>
          {item.name}
        </Text>
        <ScrollableTabView
          tabBarActiveTextColor="#F94040"
          tabBarUnderlineStyle={{ backgroundColor: "#F94040" }}
          tabBarBackgroundColor={"white"}
          style={{
            marginTop: "3%"
          }}
          initialPage={1}
          renderTabBar={() => <DefaultTabBar />}
        >
          <ScrollView tabLabel="Описание">
            <View style={styles.searchView1}>
              <View style={styles.searchView2}>
                <Text style={styles.text}>Количество студентов</Text>
              </View>
              <Text style={styles.text}> 16,000</Text>
            </View>

            <View style={styles.searchView0}>
              <View style={styles.searchView2}>
                <Text style={styles.text}>Характеристика</Text>
              </View>
              <Text style={styles.text}>959</Text>
            </View>

            <View style={styles.searchView1}>
              <View style={styles.searchView2}>
                <Text style={styles.text}>Характеристика</Text>
              </View>
              <Text style={styles.text}>830</Text>
            </View>

            <View
              style={{
                marginTop: "5%",
                marginLeft: "5%",
                marginRight: "5%"
              }}
            >
              <Text style={{ fontSize: 14, color: "grey" }}>
                {item.description}
              </Text>
            </View>
          </ScrollView>

          <ScrollView tabLabel="Специальности">
            <FlatList
              data={specialList}
              extraData={this.state.modalVisible}
              keyExtractor={(_, index) => index}
              numColumns={1}
              renderItem={({ item }) => {
                console.log(item);
                return (
                  <View style={{ flex: 1 }}>
                    <Text> {item.majorName}</Text>
                    <Icon
                      name="ios-arrow-forward-outline"
                      type="ionicon"
                      size={26}
                      color="black"
                      onPress={() => this.showPoints()}
                    />

                    {this.state.modalVisible && (
                      <React.Fragment>
                        <Text> kazPoint: {item.kazPoint}</Text>
                        <Text> kazSelPoint :{item.kazSelPoint} </Text>
                        <Text> rusPoint: {item.rusPoint}</Text>
                        <Text> rusSelPoint: {item.rusSelPoint}</Text>
                      </React.Fragment>
                    )}
                  </View>
                );
              }}
            />
          </ScrollView>

          <ScrollView tabLabel="Контакты">
            <View style={styles.searchView1}>
              <Icon
                name="ios-information-circle-outline"
                size={30}
                color={"black"}
              />
              <Text style={styles.text2}>{item.webSite}</Text>
            </View>

            <View style={styles.searchView0}>
              <Icon name="ios-call-outline" size={30} color={"black"} />
              <Text style={styles.text2}> {item.phone}</Text>
            </View>

            <View style={styles.searchView1}>
              <Icon name="ios-mail-open-outline" size={30} color={"black"} />
              <Text style={styles.text2}> {item.email}</Text>
            </View>

            <View style={styles.searchView0}>
              <Icon name="ios-home-outline" size={30} color={"black"} />
              <Text style={styles.text2}>{item.address}</Text>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  marginRight: 20,
                  alignItems: "flex-end"
                }}
              >
                <Icon name="ios-call-outline" size={50} color={"green"} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ScrollableTabView>;
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchView1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    borderBottomWidth: 0.5,
    height: 50
  },
  searchView0: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    borderBottomWidth: 0.5,
    height: 50
  },
  searchView2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "2%"
  },
  text: {
    fontSize: 16,
    color: "black"
  },
  text2: {
    fontSize: 16,
    color: "black",
    marginLeft: 30
  }
});
