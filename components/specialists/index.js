import React, { Component } from "react";
import { View, Platform, Dimensions } from "react-native";

import MainSpecialists from "./MainSpecialists";
const { height } = Dimensions.get("window");

export default class Specialist extends Component {
	render() {
		return (
			<MainSpecialists
				toListSpecialists={item =>
					this.props.navigation.navigate("ListSpecialists", {
						item: item
					})
				}
			/>
		);
	}
}
