import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import favoriteReducer from './favorite/favoriteSlice';
// import advertsAPI from './api/advertsAPI';
// import makesFilterAPI from './api/makesFilterAPI';

// const favPersistConfig = {
//   key: 'favorites',
//   storage,
//   whitelist: ['favorites'],
// };

export const store = configureStore({
  reducer: {
    // favorites: persistReducer(favPersistConfig, favoriteReducer),
    // [advertsAPI.reducerPath]: advertsAPI.reducer,
    // [makesFilterAPI.reducerPath]: makesFilterAPI.reducer,
  },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     })
//       .concat(advertsAPI.middleware)
//       .concat(makesFilterAPI.middleware),
});

export const persistor = persistStore(store);