import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Constants } from "expo";
import FavouriteList from "../favourites/FavouriteList";

class DetailSpecialists extends Component {
	name = this.props.navigation.getParam("specialist").name;

	state = {
		universityData: global.data.allUniversities
			.map(
				univer =>
					univer.majorPoints
						.map(major => major.majorName === this.name)
						.includes(true) && univer
			)
			.filter(univer => univer !== false)
	};

	navigateDetailUnversity = item => {
		this.props.navigation.navigate("DetailUniversities", {
			item: item
		});
	};
	render() {
		const specialist = this.props.navigation.getParam("specialist");
		const logo = this.props.navigation.getParam("logo");

		return (
			<ScrollView style={{ backgroundColor: "white" }}>
				<View
					style={{
						alignItems: "center",
						width: "90%",
						marginHorizontal: "5%",
						marginTop: 25
					}}
				>
					<Text style={styles.heading}>{specialist.name}</Text>
				</View>

				<ScrollView
					style={{
						width: "90%",
						marginHorizontal: "5%",
						marginBottom: "5%"
					}}
				>
					<Text style={styles.subHeading}>Где вы будете работать</Text>
					<Text style={styles.desSpec}>{specialist.object} </Text>

					<Text style={styles.subHeading}>Чем будете заниматься</Text>
					<Text style={styles.desSpec}>{specialist.description} </Text>
				</ScrollView>

				<View style={styles.univerListView}>
					<Text style={styles.univerText}>Университеты</Text>
				</View>

				<FavouriteList
					universityData={this.state.universityData}
					navigateDetailUnversity={item => this.navigateDetailUnversity(item)}
				/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#dbdde0",
		marginTop: Constants.statusBarHeight
	},
	desSpec: {
		color: "#232931",
		fontSize: 14,
		marginTop: 5
	},
	heading: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
		color: "#232931"
	},
	subHeading: {
		color: "#232931",
		fontWeight: "bold",
		fontSize: 18,
		marginTop: 20,
		marginBottom: 5
	},
	univerListView: {
		justifyContent: "center",
		alignItems: "center",
		borderBottomColor: "#232931",
		borderTopColor: "#232931",
		borderBottomWidth: 0.5,
		margin: 5,
		padding: 5
	},
	univerText: {
		fontSize: 22,
		fontWeight: "500",
		color: "#232931",
		marginLeft: 10
	}
});
export default DetailSpecialists;
