import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainTabNavigator from './MainTabNavigator';
import DeckTabNavigator from './DeckTabNavigator';
import Cards from './Cards';
import { primary } from '../utils/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const StackNavigator = createStackNavigator({
  Home: {
    screen: MainTabNavigator
  },
  DeckStart: {
    screen: DeckTabNavigator,
    navigationOptions: () => ({
      headerBackTitle: null,
      headerBackTitleStyle: { color: primary, fontSize: 16, paddingLeft: 10 },
      headerBackImage: <Ionicons name="ios-arrow-round-back" size={30} style={{ color: primary, paddingLeft: 10, paddingTop: 2 }} />
    }),
  },
  Cards: {
    screen: Cards,
    navigationOptions: () => ({
      headerBackImage: <Ionicons name="ios-refresh" size={25} style={{ color: primary, paddingLeft: 10, paddingTop: 2 }} />
    }),
  }
});

export default createAppContainer(StackNavigator);