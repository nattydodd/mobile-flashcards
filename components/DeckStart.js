import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TextButton from './form-elements/TextButton';
import { connect } from 'react-redux';

class DeckStart extends Component {

  render() {
    const { deckTitle } = this.props.navigation.state.params;
    const { cards } = this.props.decks[deckTitle];
    return (
      <View>
        <Text>{deckTitle}</Text>
        <Text>{cards.length} Questions</Text>
        <TextButton
          onPress={() => {
            this.props.navigation.navigate(
            'Card',
            { deckTitle, cards }
          )}}
        >
          Start Quiz
        </TextButton>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckStart);