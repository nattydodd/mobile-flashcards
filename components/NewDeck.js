import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { submitDeck } from '../utils/api';
import { addDeck } from '../actions';
import TextButton from './form-elements/TextButton';
import { connect } from 'react-redux';

class NewDeck extends Component {
  state = {
    title: ''
  }

  async createDeck() {
    const { dispatch } = this.props;
    const { title } = this.state;

    submitDeck(title)
      .then(deck => {
        dispatch(addDeck(deck));
        this.props.navigation.navigate('Home');
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <TextButton
          onPress={this.createDeck.bind(this)}
        >
          Create Deck
        </TextButton>
      </View>
    );
  }
}

export default connect()(NewDeck);