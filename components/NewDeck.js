import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { submitDeck } from '../utils/api';
import { addDeck } from '../actions';
import TextButton from './form-elements/TextButton';
import InputField from './form-elements/InputField';
import CenteredTitle from './form-elements/CenteredTitle';
import { connect } from 'react-redux';
import { background } from '../utils/colors';

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
      <View style={styles.container}>
        <CenteredTitle>
          What is the Topic of this Quiz?
        </CenteredTitle>
        <InputField
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          label='Title:'
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    padding: 20,
    paddingTop: 40,
    flex: 1,
    justifyContent: 'center'
  },
});