export const RECEIVE_QUIZZES = 'RECEIVE_ENTRIES';
export const ADD_QUIZ = 'ADD_ENTRY';
export const ADD_QUESTION_TO_QUIZ = 'ADD_ENTRY';

export function receiveQuizzes(decks) {
  // store the list of decks/quizzes
  return {
    type: RECEIVE_QUIZZES,
    quizzes
  }
}

export function addQuiz(quiz) {
  return {
    type: ADD_QUIZ,
    quiz
  }
}

export function addQuestionToQuiz(question) {
  return {
    type: ADD_QUESTION_TO_QUIZ,
    question
  }
}