import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'New Balance 993 Made in USA Grey - D Standard', count: 2 },
    { id: 2, name: 'Maison Mihara Yasuhiro Blakey OG Sole Canvas Low-top Sneakers Black White', count: 1 },
  ],
  reducers: {
    increase(state, action) {
      let product = action.payload;
      let num = state.findIndex((cart) => {
        return cart.id === product.id;
      });
      state[num].count++;
    },
    addCart(state, action) {
      let product = action.payload;
      let num = state.findIndex((cart) => {
        return cart.id === product.id;
      });

      if (num === -1) state.push(action.payload);
      else state[num].count++;
    },
    removeCart(state, action) {
      let product = action.payload;
      let num = state.findIndex((cart) => {
        return cart.id === product.id;
      });
      state.splice(num, 1);
    },
  },
});

export let { increase, addCart, removeCart } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
