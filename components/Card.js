import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextButton from './form-elements/TextButton';
import CenteredTitle from './form-elements/CenteredTitle';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import Answer from './Answer';
import Question from './Question';
import { backgroundSecondary } from '../utils/colors';

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

  finishQuiz() {
    // Since they finished a quiz, don't send the study reminder today :)
    // Clear it and set it again for tomorrow
    clearLocalNotification()
      .then(setLocalNotification);
    this.props.navigation.navigate('Home');
  }

  render() {
    const { deckTitle, cards } = this.props.navigation.state.params;
    const { currentCard, showAnswer, score } = this.state;

    return (
      <View style={styles.card}>
        <Text style={styles.title}>
          {deckTitle}
        </Text>
        <Text style={styles.stats}>
          Score: {score} out of {cards.length}
        </Text>
        <Text style={[styles.stats, { paddingBottom: 30}]}>
          Question {currentCard + 1} of {cards.length}
        </Text>
        {currentCard + 1 > cards.length ?
          <View style={{alignItems: 'center'}}>
            <CenteredTitle>You're Finished!</CenteredTitle>
              <TextButton
                onPress={this.finishQuiz.bind(this)}
              >
                Back to Home
              </TextButton>
          </View>
        :
          <View>
            {showAnswer ?
              <Answer
                onPress={this.next.bind(this)}
                question={cards[currentCard].question}
                answer={cards[currentCard].answer}
                userAnswer={this.state.answer}
              />
            :
              <Question
                question={cards[currentCard].question}
                updateAnswer={(answer) => this.setState({answer})}
                inputValue={this.state.answer}
                onSubmit={() => this.setState({ showAnswer: true })}
              />
            }
          </View>
        }
      </View>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: backgroundSecondary
  },
  stats: {
    fontSize: 18,
    textAlign: 'center'
  },
  title: {
    fontSize: 30
  }
});