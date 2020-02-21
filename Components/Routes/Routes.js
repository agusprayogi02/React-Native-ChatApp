import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoadingScreen from '../Screens/LoadingScreen';
import ChatScreen from '../Screens/ChatScreen';
import SigninScreen from '../Screens/SigninScreen';

const home = createStackNavigator({
  Home: {screen: ChatScreen},
});

const Auth = createStackNavigator({
  Auth: {screen: SigninScreen},
});

const router = createSwitchNavigator(
  {
    Loading: {screen: LoadingScreen},
    Chat: home,
    Signin: Auth,
  },
  {
    initialRouteName: 'Loading',
  },
);

const Routes = createAppContainer(router);
export default Routes;
