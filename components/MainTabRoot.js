import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import UniversityRoot from "./UniversityRoot";
import SpecialistRoot from "./SpecialistRoot";
import SearchRoot from "./SearchRoot";
import FavouriteRoot from "./FavouriteRoot";

export default createBottomTabNavigator(
	{
		Универы: {
			screen: UniversityRoot,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<FontAwesome name="university" size={28} color={tintColor} />
				)
			}
		},
		Специальности: {
			screen: SpecialistRoot,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<MaterialCommunityIcons
						name="account-multiple-outline"
						size={32}
						color={tintColor}
					/>
				)
			}
		},
		Поиск: {
			screen: SearchRoot,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Ionicons name="ios-search-outline" size={32} color={tintColor} />
				)
			}
		},
		Избранное: {
			screen: FavouriteRoot,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Ionicons name="ios-star-outline" size={32} color={tintColor} />
				)
			}
		}
	},
	{
		tabBarPosition: "bottom",
		tabBarOptions: {
			style: {
				paddingTop: 2,
				height: 50,
				backgroundColor: "#F94040"
			},
			activeTintColor: "white",
			inactiveTintColor: "#3d3a3a",
			labelStyle: {
				fontSize: 12,
				backgroundColor: "transparent"
			}
		},
		animationEnabled: true
	}
);
