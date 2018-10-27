import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Image,
	ImageBackground
} from "react-native";
import { Icon } from "react-native-elements";

export default class ListSpecialists extends React.Component {
	static navigationOptions = {
		header: null
	};

	navToDetail = (item, colorLogo) => {
		this.props.navigation.navigate("DetailSpecialists", {
			specialist: item,
			logo: colorLogo
		});
	};

	render() {
		const subject = this.props.navigation.getParam("item");
		const arr = global.data.allMajors.filter(
			word => word.subject === subject.name
		);

		return (
			<View style={styles.content}>
				<View style={styles.container}>
					<TouchableOpacity
						style={styles.cardSize}
						onPress={() => this.props.navigation.navigate("Specialists")}
					>
						<Icon
							style={styles.backIcon}
							name="ios-arrow-down"
							type="ionicon"
							size={40}
							color="#FFFF"
						/>
					</TouchableOpacity>
				</View>
				<ImageBackground
					style={styles.backImage}
					source={subject.backImage}
					blur={10}
				>
					<Image source={subject.logo} style={styles.logo} />
					<Text style={styles.text}> {subject.name} </Text>
				</ImageBackground>

				<FlatList
					data={arr}
					keyExtractor={(_, index) => index}
					numColumns={1}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								onPress={() => this.navToDetail(item, subject.colorLogo)}
								style={styles.listButton}
							>
								<View style={styles.wrapperList}>
									<View style={styles.wrapperListInside}>
										<Text style={styles.listText}>{item.name}</Text>
									</View>
									<Icon
										name="ios-arrow-forward-outline"
										type="ionicon"
										size={26}
										color="grey"
										style={{ right: 3, flex: 1 }}
										onPress={() =>
											this.props.navigation.navigate("Specialists")
										}
									/>
								</View>
							</TouchableOpacity>
						);
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: "#eff0f2"
	},
	container: {
		position: "absolute",
		backgroundColor: "transparent",
		top: "2%",
		left: 14,
		right: 0,
		height: 44,
		width: "400%",
		alignItems: "flex-start",
		zIndex: 100
	},
	cardSize: {
		height: 40,
		width: 40
	},
	wrapperList: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	wrapperListInside: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		flex: 8
	},
	listButton: {
		borderBottomWidth: 0.5,
		borderBottomColor: "#565759",
		height: "15%",
		flex: 1,
		flexDirection: "row",
		paddingHorizontal: "2%",
		paddingBottom: "3%",
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 8
	},
	listText: {
		color: "#565759",
		fontSize: 16,
		marginVertical: "1%",
		fontWeight: "bold"
	},
	text: {
		fontSize: 30,
		color: "white",
		fontWeight: "bold",
		marginVertical: 5
	},
	backImage: {
		flex: 0.65,
		paddingTop: 44,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10
	},
	backIcon: {
		position: "absolute"
	},
	logo: {
		zIndex: 105
	}
});
