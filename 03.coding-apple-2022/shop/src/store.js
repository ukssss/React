import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'New Balance 993 Made in USA Grey - D Standard', count: 2 },
    { id: 2, name: 'Maison Mihara Yasuhiro Blakey OG Sole Canvas Low-top Sneakers Black White', count: 1 },
  ],
  reducers: {
    increase(state, i) {
      state[i.payload].count++;
    },
    addCart(state) {
      state.push({ id: 1, name: 'Nike x Peaceminusone Kwondo1 Black and White', count: 3 });
      console.log(state[1]);
    },
  },
});

export let { increase, addCart } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
