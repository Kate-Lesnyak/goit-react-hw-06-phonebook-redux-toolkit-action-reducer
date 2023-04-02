// todo 1 вариант local state is [] and ''. With of combineReducers, persistReducer + storage
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// // import { contactsReducer } from "./contactsSlice";
// // import { filterReducer } from "./filterSlice";

// import { contactsReducer, filterReducer } from "./reducers";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);


// todo 2 вариант local state is [] and ''. Without of combineReducers, persistReducer + storage
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import { filterReducer, persistedReducer } from "./reducers";

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     filter: filterReducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);


// todo 3 вариант local state is {}. Without of combineReducers, persistReducer + storage
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { filterReducer, persistedContactsReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
