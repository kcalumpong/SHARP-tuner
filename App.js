import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ViolinScreen from './src/screens/ViolinScreen';
import ViolaScreen from './src/screens/ViolaScreen';
import CelloScreen from './src/screens/CelloScreen';
import BassScreen from './src/screens/BassScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Violin: ViolinScreen,
    Viola: ViolaScreen,
    Cello: CelloScreen,
    Bass: BassScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
