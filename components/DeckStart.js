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
        <Text>{deckTitle}</Text>
        <Text>{cards.length} Question{cards.length > 1 ? 's' : ''}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundSecondary
  }
});