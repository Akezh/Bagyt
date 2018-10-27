import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";

export default class UniversityScreen extends React.Component {
	render() {
		const { item } = this.props;
		const { favouriteUniversID } = this.props;

		return (
			<View>
				<Text>Loading</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	favButton: {
		flex: 5,
		alignItems: "flex-end",
		height: 40,
		width: 40
	},
	touch: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		marginTop: "2%",
		overflow: "visible",
		shadowColor: "grey",
		shadowOpacity: 5,
		shadowRadius: 5
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
		fontSize: 16,
		fontWeight: "bold"
	},
	text1: {
		color: "white",
		fontSize: 13,
		margin: 5,
		fontWeight: "bold"
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
