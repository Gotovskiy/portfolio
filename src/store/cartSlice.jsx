import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState:{
        CartPrice:0,
        CartItems:[]
    },
    reducers: {
        addCartItem: (state,action) => {
            state.CartItems.push(action.payload);
            state.CartPrice += action.payload.price;
        },
        removeCartItem: (state,action) => {
            const deletedItem = state.CartItems.filter(item => item.id==action.payload);
            state.CartPrice -= deletedItem[0].price * deletedItem[0].count;
           state.CartItems = state.CartItems.filter(item => item.id!=action.payload)
        },
        changeCount: (state,action) => {
      const index = state.CartItems.findIndex((item) => item.id === action.payload.id);
      const old_obj = state.CartItems[index];
      let newItem = {};
      let newCount = old_obj.count;
      let newPrice = state.CartPrice;
      if (action.payload.operation == "inc") {
        ++newCount
        newItem = { ...old_obj, count: newCount };
        newPrice += old_obj.price; 
        state.CartPrice = newPrice;
      }
      else if (old_obj.count !== 1 && action.payload.operation == "dec") {
        --newCount;
        newItem = { ...old_obj, count: newCount };
        newPrice -= old_obj.price; 
        state.CartPrice = newPrice
      }
      else {
        return
      }
      const newArr = [
        ...state.CartItems.slice(0, index),
        newItem,
        ...state.CartItems.slice(index + 1),
      ]
      state.CartItems = newArr
        }  
    },
})

export const {addCartItem,removeCartItem,changeCount} = CartSlice.actions;
export default CartSlice.reducer;