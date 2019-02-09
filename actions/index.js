export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD';

export function receiveDecks(decks) {
  // store the list of decks
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCardToDeck(card) {
  return {
    type: ADD_CARD_TO_DECK,
    card
  }
}