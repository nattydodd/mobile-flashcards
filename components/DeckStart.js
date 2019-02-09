import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class DeckStart extends Component {
  render() {
    const { deckTitle } = this.props.navigation.state.params;
    const { cards } = this.props.decks[deckTitle];
    return (
      <View>
        <Text>{deckTitle}</Text>
        {cards.map((card, index) => {
          return (
            <Text key={index}>
              {card.question}
            </Text>
          )
        })}
        {/* Components: Button */}
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