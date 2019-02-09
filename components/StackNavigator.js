import { createStackNavigator, createAppContainer } from "react-navigation";
import MainTabNavigator from './MainTabNavigator';
import DeckTabNavigator from './DeckTabNavigator';
import Card from './Card';

const StackNavigator = createStackNavigator({
  Home: {
    screen: MainTabNavigator
  },
  DeckStart: {
    screen: DeckTabNavigator,
  },
  Card: {
    screen: Card
  }
});

export default createAppContainer(StackNavigator);