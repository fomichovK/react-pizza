import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SortByType = {
  name: string;
  sort: string;
};

type FilterStateType = {
  id: number;
  sortBy: SortByType;
};

const initialState: FilterStateType = {
  id: 0,
  sortBy: { name: 'популярности', sort: 'rating:' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },

    setSort(state, action: PayloadAction<SortByType>) {
      state.sortBy = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
