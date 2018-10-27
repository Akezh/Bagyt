import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SearchInput, { createFilter } from "react-native-search-filter";

export default class MainUniversitiesEnter extends React.Component {
	state = {
		universityData: this.props.universityData,
		searchTerm: ""
	};

	searchUpdated(term) {
		this.props.searchUpdated(term);
	}

	render() {
		return (
			<View style={styles.header}>
				<View style={styles.searchView}>
					<Icon
						name="ios-search"
						style={{ margin: 5 }}
						size={20}
						color={"grey"}
					/>
					<SearchInput
						onChangeText={term => {
							this.searchUpdated(term);
						}}
						inputViewStyles={{ width: Platform.OS === "ios" ? "85%" : "93%" }}
						placeholder="Найти"
					/>
				</View>
				<View style={styles.wrapperIcon}>
					<TouchableOpacity
						onPress={() => this.props.navigateToFilter()}
						style={styles.filterButton}
					>
						<Icon
							name="ios-funnel"
							style={{ alignSelf: "flex-end" }}
							size={30}
							color={"#b13638"}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	filterButton: {
		alignItems: "flex-end",
		justifyContent: "flex-end"
	},
	itemButton: {
		height: 70,
		width: "100%",
		flexDirection: "row",
		marginLeft: 10,
		marginBottom: 5,
		marginTop: 5
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: "3%",
		width: "100%"
	},
	searchView: {
		width: "90%",
		flexDirection: "row",
		paddingRight: 15,
		paddingTop: 5,
		alignItems: "center",
		borderBottomWidth: 0.5,
		borderBottomColor: "grey"
	},
	wrapperIcon: {
		width: "8%",
		marginRight: "2%"
	}
});
