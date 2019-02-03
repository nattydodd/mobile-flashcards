import { RECEIVE_QUIZZES, ADD_QUIZ, ADD_QUESTION_TO_QUIZ } from '../actions';

function quizzes(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUIZZES:
      return {
        ...state,
        ...action.quizzes
      }
    case ADD_QUIZ:
      return {
        ...state,
        ...action.quiz
      }
    case ADD_QUESTION_TO_QUIZ:
      return {
        ...state,
        [action.question.quizId]: {
          questions: [
            ...state[action.question.quizId].questions,
            action.question
          ]
        }
      }
    default:
      return state;
  }
}

export default quizzes;