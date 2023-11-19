import { createSlice } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';

const initialState = { favorites: [] };

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
    //   toast.success('Added to fav list');
      return {
        ...state,
        favorites: [...state.favorites].concat(payload),
      };
    },
    removeFavorite: (state, { payload }) => {
    //   toast('Removed from fav list', { icon: '🗑️' });
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== payload.id),
      };
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;