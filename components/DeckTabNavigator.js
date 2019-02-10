import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import DeckStart from './DeckStart';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import NewCard from './NewCard';
import { highlight, inactive } from '../utils/colors';

const BottomTabNavigatorConfig = {
  tabBarOptions: {
    showLabel: false,
    activeTintColor: highlight,
    inactiveTintColor: inactive
  }
}

const DeckTabNavigator = createBottomTabNavigator({
  DeckStart: {
    screen: DeckStart,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name="square" size={25} color={tintColor} />
    }
  },
  NewCard: {
    screen: props => <NewCard {...props} />,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-add" size={35} color={tintColor} />
    }
  },
}, BottomTabNavigatorConfig);

export default createAppContainer(DeckTabNavigator);