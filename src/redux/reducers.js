// * 1 вариант
// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, setFilterValue } from "./actions";

// const contactsInitialState = [];

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(({ id }) => id !== action.payload);
//   },
// });

// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, {
//   [setFilterValue]: (state, action) => {
//     return action.payload
//   },
// });


// * 2 вариант
import { combineReducers, createReducer } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { addContact, deleteContact, setFilterValue } from "./actions";

const contactsInitialState = [];

const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    return state.filter(({ id }) => id !== action.payload);
  },
});

const filterInitialState = '';

const filterReducer = createReducer(filterInitialState, {
  [setFilterValue]: (state, action) => {
    return action.payload
  },
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
