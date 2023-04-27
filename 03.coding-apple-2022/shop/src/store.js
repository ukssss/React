import { configureStore, createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'New Balance 993 Made in USA Grey - D Standard', count: 2 },
    { id: 2, name: 'Maison Mihara Yasuhiro Blakey OG Sole Canvas Low-top Sneakers Black White', count: 1 },
  ],
});

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
