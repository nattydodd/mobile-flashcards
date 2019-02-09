import { createStackNavigator, createAppContainer } from "react-navigation";
import MainTabNavigator from './MainTabNavigator';
import DeckTabNavigator from "./DeckTabNavigator";

const StackNavigator = createStackNavigator({
  Home: {
    screen: MainTabNavigator
  },
  DeckStart: {
    screen: DeckTabNavigator,
  }
});

export default createAppContainer(StackNavigator);