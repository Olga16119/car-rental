import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favoriteReducer from '../redux/api/favoriteSlice';
import advertsApi from './api/advertsApi';
import filterApi from './api/filterApi';

const favoritePersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritePersistConfig, favoriteReducer),
    [advertsApi.reducerPath]: advertsApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(advertsApi.middleware)
      .concat(filterApi.middleware),
});

export const persistor = persistStore(store);
