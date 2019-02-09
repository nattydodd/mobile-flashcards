import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TabNavigator from './components/TabNavigator';
import reducer from './reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <TabNavigator/>
        </View>
      </Provider>
    );
  }
}
