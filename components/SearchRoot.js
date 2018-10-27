import { createStackNavigator } from 'react-navigation';
import MainUniversitiesEnter from './search/MainUniversitiesEnter';
import SearchScreen from './search/SearchScreen';
import DetailUniversities from './universities/DetailUniversities';
import FilterScreen from './universities/FilterScreen';

export default createStackNavigator(
	{
		SearchScreen: {
			screen: SearchScreen,
			navigationOptions: {
				title: 'Поиск по баллам ЕНТ',
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#F94040',
				},
			},
		},
		MainUniversitiesEnter: {
			screen: MainUniversitiesEnter,
			title: 'Университеты',
			navigationOptions: {
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#F94040',
				},
			},
		},
		DetailUniversities: {
			screen: DetailUniversities,
			navigationOptions: {
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#F94040',
				},
			},
		},
		FilterScreen: {
			screen: FilterScreen,
			navigationOptions: {
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#F94040',
				},
			},
		},
	},
	{
		headerBackTitleVisible: true,
		mode: 'modal',
		headerMode: 'screen',
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
			color: 'white',
		},
	}
);
