import { RECEIVE_DECKS, ADD_DECK, ADD_CARD_TO_DECK } from '../actions';

function decks(state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.card.deckId]: {
          ...state[action.card.deckId],
          cards: [
            ...state[action.card.deckId].cards,
            action.card
          ]
        }
      }
    default:
      return state;
  }
}

export default decks;