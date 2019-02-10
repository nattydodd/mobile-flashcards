import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';
import { primary, white, background } from '../utils/colors';
import { AppLoading } from 'expo';
import CenteredTitle from './form-elements/CenteredTitle';

const DeckItem = (props) => {
  return (
    <View style={styles.deckItem}>
      <Text style={{color: white, fontWeight: 'bold', textAlign: 'center'}}>{props.title}</Text>
    </View>
  )
}

class Home extends Component {
  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props;

    getDecks()
      .then(decks => {
        dispatch(receiveDecks(decks));
        this.setState(() => ({ ready: true }));
      })
      .catch(error => console.log(error));
  }

  render() {
    const { decks } = this.props;
    const { ready } = this.state;

    if (ready === false) {
      return <AppLoading />
    }

    if (!Object.keys(decks).length) {
      return (
        <View style={styles.container}>
          <CenteredTitle>
            You have not created any decks yet! Click the plus button below to create one.
          </CenteredTitle>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <CenteredTitle>
          Mobile Flashcards
        </CenteredTitle>
        {Object.keys(decks).map((item, index) => {
          const deck = decks[item];
          return (
            <TouchableOpacity
              key={index}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    padding: 20,
    paddingTop: 0,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
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
});