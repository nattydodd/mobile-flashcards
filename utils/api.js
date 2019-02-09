import { AsyncStorage } from 'react-native';

// Example JSON structure:
// {
//   React: {
//     title: 'React',
//     cards: [
//       {
//         deckId: 'React'
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         deckId: 'React',
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },
//   JavaScript: {
//     title: 'JavaScript',
//     cards: [
//       {
//         deckId: 'JavaScript'
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment within which that function was declared.'
//       }
//     ]
//   }
// }

const DECK_STORAGE_KEY = 'MobileFlashCards:decks'

camelCaseTitle = (title) => {
  return title.replace(/\W+(.)/g, (match, chr) => {
    return chr.toUpperCase();
  });
}

export function submitDeck(title) {
  const deck = {
    [camelCaseTitle(title)]: {
      title,
      cards: []
    }
  }
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))
    .then(() => deck);
}

export async function submitCard(card) {
  const deck = await getDeck(card.deckId);
  const updatedDeck = {
    [deck.title]: {
      ...deck,
      cards: [
        card,
        ...deck.cards
      ]
    }
  }
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(updatedDeck))
    .then(() => card);
}

export function getDeck(title) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(decks => {
      return JSON.parse(decks)[title];
    });
}

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(results => JSON.parse(results));
}

export function clearAll() {
  return AsyncStorage.clear();
}