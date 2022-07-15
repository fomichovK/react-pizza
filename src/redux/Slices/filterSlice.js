import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  sortby: { name: 'популярности', sort: 'rating:' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.id = action.payload;
    },

    setSort(state, action) {
      state.sortby = action.payload;
      //   console.log('sort', action.payload);
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
