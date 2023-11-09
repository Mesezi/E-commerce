import { configureStore } from '@reduxjs/toolkit';
import cartItemSlice from './slices/cartItemSlice'
import wishListItemSlice from './slices/wishListItemSlice';

export default configureStore({
    reducer: {
        cartItems: cartItemSlice,
        wishListItems: wishListItemSlice
      },
});