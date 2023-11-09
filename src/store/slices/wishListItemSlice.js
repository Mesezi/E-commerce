import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = JSON.parse(sessionStorage.getItem("wishListItems")) || [];

export const wishListItemSlice = createSlice({
  name: "wishListItems",
  initialState,
  reducers: {
    updateWishListItem: (state, action) => {
      if (state.find((currentItem) => currentItem.id === action.payload.id)) {
        const updated = state.filter((item) => item.id !== action.payload.id);
        toast.info(`${action.payload.name} has been removed from your wishlist`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return updated
      } else {
        state.push({...action.payload, quantity:1});
        toast.success(`${action.payload.name} has been added to your wishlist`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
  },
});

// this is for dispatch
export const { updateWishListItem } = wishListItemSlice.actions;

// this is for configureStore
export default wishListItemSlice.reducer;
