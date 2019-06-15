import React, { Component } from 'react';
import {
  createAppContainer, createStackNavigator,
  createDrawerNavigator, StackActions, NavigationActions,
   createMaterialTopTabNavigator, createSwitchNavigator
} from 'react-navigation';
import { Icon } from 'native-base'

import Header2 from './app/components/Header'
import Banner from './app/components/Banner'
import HomeScreen from './app/components/HomeScreen'
import ContentContainer from './app/components/ContentContainer'
import Details from './app/components/Details'
import Login from './app/components/Login';


export default class App extends Component {

  render() {
    return (
      <AppContainer />
    );
  }
}
const FeedStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'My Appointments',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          ),
        };
      }
    },
    Detail: {
      screen: Details
    },
    Banner: {
      screen: Banner
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);


const ProfileStack = createStackNavigator({
  Profile: {
    screen: Details,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Details',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
});



const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: FeedStack,
      navigationOptions: () => {
        return {
          drawerLabel: 'Home Alone',
          drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
          ),
        };
      }
    },
    Details: {
      screen: ProfileStack,
      navigationOptions: () => {
        return {
          drawerLabel: 'More  Details',
          drawerIcon: ({ tintColor }) => (
            <Icon name="bookmarks" style={{ fontSize: 24, color: tintColor }} />
          ),
        };
      }
    },
  }
);

const LandingNavigator = createSwitchNavigator({
  Landing: {
    screen: Login
  },
  HomeApp: {
    screen: AppDrawerNavigator
  },
});

const AppContainer = createAppContainer(LandingNavigator);
