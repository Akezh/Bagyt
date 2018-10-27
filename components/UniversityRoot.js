import { createStackNavigator } from "react-navigation";
import DetailUniversities from "./universities/DetailUniversities";
import ListUniversities from "./universities/ListUniversities";
import FilterScreen from "./universities/FilterScreen";
import University from "./universities/index";

export default createStackNavigator(
	{
		University: {
			screen: University,
			navigationOptions: {
				title: "Университеты",
				headerTintColor: "white",
				headerStyle: {
					backgroundColor: "#F94040"
				}
			}
		},
		DetailUniversities: {
			screen: DetailUniversities,
			navigationOptions: {
				headerTintColor: "white",
				headerStyle: {
					backgroundColor: "#F94040"
				}
			}
		},
		ListUniversities: {
			screen: ListUniversities,
			navigationOptions: {
				headerStyle: {
					backgroundColor: "#F94040"
				}
			}
		},
		FilterScreen: {
			screen: FilterScreen,
			navigationOptions: {
				headerTintColor: "white",
				headerStyle: {
					backgroundColor: "#F94040"
				}
			}
		}
	},
	{
		headerBackTitleVisible: true,
		headerMode: "screen",
		mode: "modal"
	}
);
