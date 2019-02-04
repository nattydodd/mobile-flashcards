import { AsyncStorage } from 'react-native';

// Example JSON structure:
// {
//   React: {
//     title: 'React',
//     questions: [
//       {
//         quizId: 'React'
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         quizId: 'React',
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },
//   JavaScript: {
//     title: 'JavaScript',
//     questions: [
//       {
//         quizId: 'JavaScript'
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment within which that function was declared.'
//       }
//     ]
//   }
// }

const QUIZ_STORAGE_KEY = 'MobileFlashCards:quizzes'

camelCaseTitle = (title) => {
  return title.replace(/\W+(.)/g, (match, chr) => {
    return chr.toUpperCase();
  });
}

export function submitQuiz(title) {
  return AsyncStorage.mergeItem(QUIZ_STORAGE_KEY, JSON.stringify({
    [camelCaseTitle(title)]: {
      title,
      questions: []
    }
  }));
}

export function submitQuestion(title, question) {
  const questionList = getQuiz(title).questions
  return AsyncStorage.mergeItem(QUIZ_STORAGE_KEY, JSON.stringify({
    [camelCaseTitle(title)]: {
      questions: [
        question,
        ...questionList
      ]
    }
  }));
}

export function getQuiz(title) {
  return AsyncStorage.getItem(QUIZ_STORAGE_KEY)[camelCaseTitle(title)];
}

export function getQuizzes() {
  return AsyncStorage.getItem(QUIZ_STORAGE_KEY)
    .then(results => JSON.parse(results));
}