import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: 'handsome',
  reducers: {
    changeName(state) {
      return 'ukss ' + state;
    },
  },
});

export let { changeName } = user.actions;

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'New Balance 993 Made in USA Grey - D Standard', count: 2 },
    { id: 2, name: 'Maison Mihara Yasuhiro Blakey OG Sole Canvas Low-top Sneakers Black White', count: 1 },
  ],
});

export let { countUp } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
