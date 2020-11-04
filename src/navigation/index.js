import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ViewLogin from '../views/ViewLogin';
import ViewHome from '../views/ViewHome';

const AuthStack = createStackNavigator(
  {
    ViewLogin: {screen: ViewLogin},
    ViewHome: {screen: ViewHome}
  },
  {
    initialRouteName: 'ViewLogin'
  }
);

// 최상단 네비게이터
const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(AppNavigator);