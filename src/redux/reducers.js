// todo 1 вариант local state is [] and ''. Without of combineReducers, persistReducer + storage
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


// todo 2 вариант  local state is [] and ''. With of combineReducers, persistReducer + storage
// import { combineReducers, createReducer } from "@reduxjs/toolkit";
// import persistReducer from "redux-persist/es/persistReducer";
// import storage from "redux-persist/lib/storage";
// import { addContact, deleteContact, setFilterValue } from "./actions";

// const contactsInitialState = [];

// const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(({ id }) => id !== action.payload);
//   },
// });

// const filterInitialState = '';

// const filterReducer = createReducer(filterInitialState, {
//   [setFilterValue]: (state, action) => {
//     return action.payload
//   },
// });

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };

// export const persistedReducer = persistReducer(persistConfig, rootReducer);

// todo 3 вариант  local state is {}. With persistReducer + storage
import { createReducer } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { addContact, deleteContact, setFilterValue } from "./actions";

const contactsInitialState = {
  items: [],
}

const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.items.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    state.items = state.items.filter(({ id }) => id !== action.payload);
  },
});

const filterInitialState = {
  value: '',
};

export const filterReducer = createReducer(filterInitialState, {
  [setFilterValue]: (state, action) => {
    state.value = action.payload;
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
