import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = JSON.parse(sessionStorage.getItem("cartItems")) || [];

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    updateCartItem: (state, action) => {
      if (state.find((currentItem) => currentItem.id === action.payload.id)) {
        const updated = state.filter((item) => item.id !== action.payload.id);
        toast.info(`${action.payload.name} has been removed from your cart`, {
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
        toast.success(`${action.payload.name} has been added to your cart`, {
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
    increaseCartItem: (state, action) => {
      const itemIndex = state.findIndex(item=>item.id == action.payload)
      state[itemIndex].quantity < 10 && state[itemIndex].quantity++
    },
    decreaseCartItem: (state, action) => {
      const itemIndex = state.findIndex(item=>item.id == action.payload)
      state[itemIndex].quantity > 1 && state[itemIndex].quantity--
    },
    deleteCartItem: (state, action) =>{
    const updated = state.filter((item) => item.id !== action.payload.id);
    toast.info(`${action.payload.name} has been removed from your cart`, {
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
    }
  },
});

// this is for dispatch
export const { updateCartItem, increaseCartItem, decreaseCartItem, deleteCartItem } = cartItemSlice.actions;

// this is for configureStore
export default cartItemSlice.reducer;
