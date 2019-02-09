import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainTabNavigator from './MainTabNavigator';
import DeckTabNavigator from './DeckTabNavigator';
import Card from './Card';
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
      headerBackTitleStyle: { color: primary, fontSize: 14, paddingLeft: 5 },
      headerBackImage: <Ionicons name="ios-arrow-round-back" size={25} style={{ color: primary, paddingLeft: 5, paddingTop: 2 }} />
    }),
  },
  Card: {
    screen: Card,
    navigationOptions: () => ({
      headerBackImage: <Ionicons name="ios-refresh" size={25} style={{ color: primary, paddingLeft: 5, paddingTop: 2 }} />
    }),
  }
});

export default createAppContainer(StackNavigator);