import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, payload) => {
    switch (payload.type) {
    case 'ADD_COLUMN':
        return { ...state, columns: [...state.columns, { id: shortid(), ...payload.newColumn}]};
    case 'ADD_CARD':
        return { ...state, cards: [...state.cards, { id: shortid(), ...payload.newCard}]};
    default:
        return state;
    }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;