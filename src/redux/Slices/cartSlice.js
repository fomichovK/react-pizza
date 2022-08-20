import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.count * item.price;
      }, 0);
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.count * item.price;
      }, 0);
    },

    delItem(state, action) {
      state.items = state.items.filter((obj) => {
        return obj.id !== action.payload.id;
      });

      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.count * item.price;
      }, 0);
    },

    clearCart(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, clearCart, minusItem, delItem } = cartSlice.actions;

export default cartSlice.reducer;
