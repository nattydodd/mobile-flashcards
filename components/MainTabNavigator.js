import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Home from './Home';
import NewDeck from './NewDeck';
import { highlight, inactive } from '../utils/colors';

const BottomTabNavigatorConfig = {
  tabBarOptions: {
    showLabel: false,
    activeTintColor: highlight,
    inactiveTintColor: inactive
  }
}

const MainTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name="th-large" size={25} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-add" size={35} color={tintColor} />
    }
  },
}, BottomTabNavigatorConfig);

export default createAppContainer(MainTabNavigator);