import React, { Component } from "react";
import { View, Platform, Dimensions } from "react-native";
import MainUniversities from "./MainUniversities";

const { height } = Dimensions.get("window");

export default class University extends Component {
	render() {
		return <MainUniversities navigation={this.props.navigation} />;
	}
}
