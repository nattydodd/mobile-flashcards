import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import TextButton from './form-elements/TextButton';
import { addCardToDeck } from '../actions';
import { submitCard } from '../utils/api';
import { connect } from 'react-redux';

class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  createCard() {
    const { deckTitle } = this.props.navigation.state.params;
    const { dispatch } = this.props;
    submitCard({
        deckId: deckTitle,
        ...this.state
      })
      .then(card => {
        dispatch(addCardToDeck(card));
        this.props.navigation.navigate('DeckStart');
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <View>
        <Text>New Card</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <TextButton
          onPress={this.createCard.bind(this)}
        >
          Create Card
        </TextButton>
        {/* Components: InputField, Button, TopNavWithBackButton */}
      </View>
    );
  }
}

export default connect()(NewCard);