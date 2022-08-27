import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './Slices/filterSlice';
import cartSlice from './Slices/cartSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
