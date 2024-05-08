import { createSlice, current } from "@reduxjs/toolkit";
// import Wishlist from "../../pages/Wishlist/views/Wishlist";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const itemInWishlist = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (!itemInWishlist) {
        state.wishlist.push(action.payload);
      }
      console.log(current(state));
    },
    removeWishlist: (state, action) => {
      console.log(action.payload.id);
      const removeItem = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(removeItem);
      state.wishlist = removeItem;
      console.log(current(state));
    },
  },
});
export const { addToWishlist, removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
