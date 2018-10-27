import { createStackNavigator } from "react-navigation";

import WelcomeScreen from "./firstScreen/WelcomeScreen";
import SplashScreen from "./SplashScreen";
import MainTabRoot from "./MainTabRoot";

export default createStackNavigator(
	{
		WelcomeScreen: {
			screen: WelcomeScreen
		},
		SplashScreen: {
			screen: SplashScreen
		},
		MainTabRoot: {
			screen: MainTabRoot
		}
	},
	{
		headerBackTitleVisible: false,
		headerMode: "none",
		mode: "card "
	}
);
