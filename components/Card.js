import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import TextButton from './form-elements/TextButton';
import FontAwesome from '@expo/vector-icons/FontAwesome';

class Card extends Component {
  state = {
    currentCard: 0,
    answer: '',
    showAnswer: false,
    score: 0
  }

  next(points) {
    this.setState(() => ({
      score: this.state.score + points,
      currentCard: this.state.currentCard + 1,
      showAnswer: false,
      answer: '',
    }));
  }

  render() {
    const { deckTitle, cards } = this.props.navigation.state.params;
    const { currentCard, showAnswer, score } = this.state;

    return (
      <View>
        <Text>{deckTitle}</Text>
        <Text>Score {score} out of {cards.length}</Text>
        {currentCard + 1 > cards.length ?
          <Text>You're Finished!</Text>
        :
          <View>
            <Text>Question {currentCard + 1} of {cards.length}</Text>
            <Text>Question: {cards[currentCard].question}</Text>
            {showAnswer ?
              <View>
                <Text>Answer: {cards[currentCard].answer}</Text>
                <Text>Where you right?</Text>
                <TouchableHighlight
                  onPress={() => this.next(0)}
                >
                  <FontAwesome
                    name="times"
                    size={25}
                  />
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.next(1)}
                >
                  <FontAwesome
                    name="check"
                    size={25}
                  />
                </TouchableHighlight>
              </View>
            :
              <View>
                <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(answer) => this.setState({answer})}
                  value={this.state.answer}
                />
                <TextButton
                  onPress={() => this.setState({ showAnswer: true })}
                >
                  Submit
                </TextButton>
              </View>
            }
          </View>
        }
        {/* Components: TopNavWithForwardBack */}
      </View>
    );
  }
}

export default Card;