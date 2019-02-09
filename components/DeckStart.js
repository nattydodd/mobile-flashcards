import React, { Component } from 'react';
import { Text, View } from 'react-native';

class DeckStart extends Component {
  render() {
    const { title } = this.props.navigation.state.params
    return (
      <View>
        <Text>Start Deck</Text>
        <Text>{title}</Text>
        {/* Components: Button, Button, TopNavWithBackButton */}
      </View>
    );
  }
}

export default DeckStart;