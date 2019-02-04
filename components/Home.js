import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getQuizzes, submitQuiz } from '../utils/api';
import { receiveQuizzes } from '../actions';

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;

    getQuizzes()
      .then(quizzes => dispatch(receiveQuizzes(quizzes)))
      .catch(error => console.log(error));
  }

  render() {
    const { quizzes } = this.props;

    if (!quizzes) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>Home</Text>
        {/* Components: Decks List, Deck, Button, Bottom Nav */}
        {Object.keys(quizzes).map(quiz => (
          <Text key={quiz}>{quiz}</Text>
        ))}
      </View>
    );
  }
}

function mapStateToProps(quizzes) {
  return {
    quizzes
  }
}


export default connect(mapStateToProps)(Home);