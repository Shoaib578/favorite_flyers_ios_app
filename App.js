import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Icon } from 'native-base';
import Home from './src/screens/user/home';
import Merchant from './src/screens/user/merchant';
import Profile from './src/screens/user/profile';

import Favourites from './src/screens/user/favourites';

import History from './src/screens/user/history';
import Explore from './src/screens/user/explore';

import Notification from './src/screens/user/notification';

import Auth from './src/screens/auth';
import CreateAccount from './src/screens/auth/create';
import ForgotPassword from './src/screens/auth/forgot';

import BusinessHome from './src/screens/business/home';
import BusinessCoupons from './src/screens/business/coupons';
import AddCoupon from './src/screens/business/coupons/add';
import EditCoupon from './src/screens/business/coupons/edit';
import AddLocation from './src/screens/business/location/add';
import BusinessLocation from './src/screens/business/location/';
import MyBusiness from './src/screens/business/business';
import BusinessPlan from './src/screens/business/plans';
import Visits from './src/screens/business/visits';
import BusinessMessage from './src/screens/business/messages';
import SetLocation from './src/screens/business/location/set';
import Settings from './src/screens/business/settings';

import Intro from './src/screens/intro';
import Splash from './src/screens/splash';




import Blog from './src/screens/user/blogs';
import ViewBlog from './src/screens/user/blogs/ViewBlog'


const transition = fromRight(700); // Or whichever you prefer
const config = {
  animation: 'timing',
  config: transition.transitionSpec,
};

const styles = tintColor =>
  StyleSheet.create({
    icon: {
      fontSize: 23,
      color: tintColor,
    },
  });

const cardStyleInterpolator = ({ current, next, index, closing, layouts }) => {
  const { progress } = closing._value ? next : current;
  const { width, height } = layouts.screen;
  const containerStyle = transition.screenInterpolator({
    layout: {
      initWidth: width,
      initHeight: height,
    },
    position: progress,
    scene: { index: 1 },
  });
  return { containerStyle };
};
const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Merchant: {
      screen: Merchant,
    },
    Explore: {
      screen: Explore,
    },
    Notification: {
      screen: Notification,
    },

  },
  {
    defaultNavigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
      cardStyleInterpolator,
      headerTitleStyle: {
        fontSize: 17,
        // fontFamily: 'Roboto-Medium',
      },
      headerTransparent: false,
    },
  },
);






HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'Home') {
    tabBarVisible = true;
  }

  return {
    tabBarVisible,
  };
};






const BlogStack = createStackNavigator(
  {
    Home: {
      screen: Blog,
    },
    ViewBlog: {
      screen: ViewBlog,
      navigationOptions: { headerTitle: 'Blog' },

    },
    Explore: {
      screen: Explore,
    },
    Notification: {
      screen: Notification,
    },

  },
  {
    defaultNavigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
      cardStyleInterpolator,
      headerTitleStyle: {
        fontSize: 17,
        // fontFamily: 'Roboto-Medium',
      },
      headerTransparent: false,
    },
  },
);



const MyFavoriteFlyerStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Merchant: {
      screen: Merchant,
    },
    Explore: {
      screen: Explore,
    },
    Notification: {
      screen: Notification,
    },

  },
  {
    defaultNavigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
      cardStyleInterpolator,
      headerTitleStyle: {
        fontSize: 17,
        // fontFamily: 'Roboto-Medium',
      },
      headerTransparent: false,
    },
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
    },
    Favourites: {
      screen: Favourites,
    },

    History: {
      screen: History,
    },



  },
  {
    defaultNavigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
      cardStyleInterpolator,
      headerTitleStyle: {
        fontSize: 17,
        // fontFamily: 'Roboto-Medium',
      },
      headerTransparent: false,
    },
  },
);

ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'Profile') {
    tabBarVisible = true;
  }

  return {
    tabBarVisible,
  };
};






const UserTab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },

    Blogs: {
      screen: BlogStack,
    },
    Favorite_Flyers: {
      screen: MyFavoriteFlyerStack,
    },
    Profile: {
      screen: ProfileStack,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused ? 'ios-home' : 'ios-home';
        } else if (routeName === 'Profile') {
          iconName = focused ? 'ios-person' : 'ios-person';
        } else if (routeName === 'Blogs') {
          iconName = focused ? 'ios-book' : 'ios-book';
        }
        else if (routeName === 'Favorite_Flyers') {
          iconName = focused ? 'ios-heart' : 'ios-heart';
        }

        let x = iconName;
        return <Icon name={x} style={styles(tintColor).icon} />;
      },

    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#A1FFDE',
      borderColor: 'black',
      showLabel: true,
      style: {
        backgroundColor: '#26BE8D',
      },
      labelStyle: {
        // fontFamily: 'bold',
      },
    },
    lazy: false,
  },
);
const BusinessStack = createStackNavigator(
  {
    Plans: {
      screen: BusinessPlan,
    },
    Home: {
      screen: BusinessHome,
    },
    Coupons: {
      screen: BusinessCoupons,
    },
    AddCoupon: {
      screen: AddCoupon,
    },
    EditCoupon: {
      screen: EditCoupon,
    },
    Location: {
      screen: BusinessLocation,
    },
    AddLocation: {
      screen: AddLocation,
    },
    MyBusiness: {
      screen: MyBusiness,
    },
    Visits: {
      screen: Visits,
    },
    Messages: {
      screen: BusinessMessage,
    },
    SetLocation: {
      screen: SetLocation,
    },
    Settings: {
      screen: Settings,
    },
  },
  {
    defaultNavigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
      cardStyleInterpolator,
      headerTitleStyle: {
        fontSize: 17,
        // fontFamily: '',
      },
      headerTransparent: false,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Auth: {
      screen: Auth,
    },
    Create: {
      screen: CreateAccount,
    },
    Forgot: {
      screen: ForgotPassword,
    },
  },
  {
    defaultNavigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
      cardStyleInterpolator,
      headerTitleStyle: {
        fontSize: 17,
        // fontFamily: 'Roboto-Medium',
      },
      headerTransparent: false,
    },
  },
);

const MainNavigator = createSwitchNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Intro: {
      screen: Intro,
    },
    Auth: {
      screen: AuthStack,
    },
    User: {
      screen: UserTab,
    },
    Business: {
      screen: BusinessStack,
    },
  },
  {
    defaultNavigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
      cardStyleInterpolator,
      headerTitleStyle: {
        fontSize: 17,
        // fontFamily: 'Roboto-Medium',
      },
      headerTransparent: false,
    },
  },
);

export default createAppContainer(MainNavigator);
