import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Home from '../screens/home';

const screens = {
    Login: {
        screen: Login
    },
    SignUp: {
        screen: SignUp
    },
   
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);