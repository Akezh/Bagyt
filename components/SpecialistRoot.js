import { createStackNavigator } from "react-navigation";
import ListSpecialists from "./specialists/ListSpecialists";
import DetailSpecialists from "./specialists/DetailSpecialists";
import Specialist from "./specialists/index";

export default createStackNavigator(
	{
		Specialists: {
			screen: Specialist,
			navigationOptions: {
				title: "Специальности",
				headerTintColor: "white",
				headerStyle: {
					backgroundColor: "#F94040"
				}
			}
		},
		ListSpecialists: {
			screen: ListSpecialists
		},
		DetailSpecialists: {
			screen: DetailSpecialists,
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
