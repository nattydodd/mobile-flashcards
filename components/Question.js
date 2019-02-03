import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Question extends Component {
  render() {
    return (
      <View>
        <Text>Question/Card</Text>
        {/* Components: Card(Front & Back), ProgressBar, TopNavWithForwardBack, Correct/Incorrect */}
      </View>
    );
  }
}

export default Question;