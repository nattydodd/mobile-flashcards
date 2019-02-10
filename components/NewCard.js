import React, { Component } from 'react';
import { View } from 'react-native';
import TextButton from './form-elements/TextButton';
import CenteredTitle from './form-elements/CenteredTitle';
import InputField from './form-elements/InputField';
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
        this.setState(() => ({
          question: '',
          answer: ''
        }));
        this.props.navigation.navigate('DeckStart');
      })
      .catch(error => console.log(error));
  }


  render() {
    const { deckTitle } = this.props.navigation.state.params;
    return (
      <View>
        <CenteredTitle>
          New Card for: {deckTitle}
        </CenteredTitle>
        <InputField
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
          label='Question'
        />
        <InputField
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
          label='Answer'
        />
        <TextButton
          onPress={this.createCard.bind(this)}
          disabled={this.state.question === '' || this.state.answer === ''}
        >
          Create Card
        </TextButton>
      </View>
    );
  }
}

export default connect()(NewCard);