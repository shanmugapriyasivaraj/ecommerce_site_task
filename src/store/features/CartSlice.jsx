import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("Action Payload:", action.payload);
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      //   console.log(cart);
      if (itemInCart) {
        itemInCart.quantity++;
        console.log(current(state));
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        console.log(current(state));
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity = item.quantity === 1 ? 1 : item.quantity - 1;
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
