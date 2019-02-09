import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;

    getDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .catch(error => console.log(error));
  }

  render() {
    const { decks } = this.props;

    if (!decks) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>Home</Text>
        {/* Components: Decks List, Deck, Button, Bottom Nav */}
        {Object.keys(decks).map(deck => (
          <Text key={deck}>{deck}</Text>
        ))}
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}


export default connect(mapStateToProps)(Home);