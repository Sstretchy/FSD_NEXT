import { cartReducer } from '@/src/4--features/cart';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
