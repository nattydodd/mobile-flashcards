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


camelCaseTitle = (title) => {
  return title.replace(/\W+(.)/g, (match, chr) => {
    return chr.toUpperCase();
  });
}

export function submitQuiz(title) {
  return AsyncStorage.setItem(camelCaseTitle(title), JSON.stringify({
    title,
    questions: []
  }));
}

export function submitQuestion(title, question) {
  const questionList = getQuiz(title).questions
  return AsyncStorage.mergeItem(camelCaseTitle(title), JSON.stringify({
    questions: [
      question,
      ...questionList
    ]
  }));
}

export function getQuiz(title) {
  return AsyncStorage.getItem(camelCaseTitle(title));
}