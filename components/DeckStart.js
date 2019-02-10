import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextButton from './form-elements/TextButton';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons/';
import { highlight, backgroundSecondary } from '../utils/colors';

class DeckStart extends Component {

  render() {
    const { deckTitle } = this.props.navigation.state.params;
    const { cards } = this.props.decks[deckTitle];

    return (
      <View style={styles.container}>
        <MaterialCommunityIcons name="cards" size={200} color={highlight} />
        <Text style={styles.title}>{deckTitle}</Text>
        {cards.length === 0 ?
          <View>
            <Text style={styles.text}>
              You have not created any cards yet for this deck! Click the plus button below to create one.
            </Text>
          </View>
        :
          <View>
            <Text style={styles.text}>
              {cards.length} Question{cards.length > 1 ? 's' : ''}
            </Text>
            <TextButton
              onPress={() => {
                this.props.navigation.navigate(
                'Cards',
                { deckTitle, cards }
              )}}
            >
              Start Quiz
            </TextButton>
          </View>
        }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundSecondary,
    padding: 20,
    paddingTop: 0
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 20
  },
  text: {
    textAlign: 'center'
  }
});