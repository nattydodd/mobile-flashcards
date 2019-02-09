import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getDecks, clearAll } from '../utils/api';
import { receiveDecks } from '../actions';
import { primary, white, background } from '../utils/colors';

const DeckItem = (props) => {
  return (
    <View style={styles.deckItem}>
      <Text style={{color: white, fontWeight: 'bold', textAlign: 'center'}}>{props.title}</Text>
    </View>
  )
}

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

    if (!Object.keys(decks).length) {
      return (
        <View style={styles.container}>
          <Text>You have not created any decks yet! Click the plus button below to create one.</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {Object.keys(decks).map(item => {
          const deck = decks[item];
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() => {
                this.props.navigation.navigate(
                'DeckStart',
                {
                  deckTitle: deck.title,
                  cards: deck.cards
                }
              )}}
            >
              <DeckItem
                title={deck.title}
              />
            </TouchableOpacity>
          )
        })}
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

const styles = {
  container: {
    backgroundColor: background,
    padding: 20,
    paddingTop: 40,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

  },
  deckItem : {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: primary,
    padding: 10,
    marginVertical: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
}