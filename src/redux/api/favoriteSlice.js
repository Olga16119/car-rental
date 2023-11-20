import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = { favorites: [] };

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      toast.success('Successfully added to favorites');
      return {
        ...state,
        favorites: [...state.favorites].concat(payload),
      };
    },
    removeFavorite: (state, { payload }) => {
      toast.success('Removed from favorites');
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== payload.id),
      };
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;