import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './defaultState';

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push(product);
      }
    },
    decrementQuantityFromCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.products = state.products.filter((p) => p.id !== product.id);
        }
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;

      state.products = state.products.filter((p) => p.id !== productId);
    },
  },
});

export const { addToCart, decrementQuantityFromCart, removeFromCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
