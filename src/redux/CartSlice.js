import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name:'cart',
    initialState:{
        cartProductIds:[]
    },
    reducers:{
        addToCart(state,actions){
            state.cartProductIds = [actions.payload,...state.cartProductIds];
        },
        removeFromCart(state,action){
            const indexOfId = state.cartProductIds.indexOf(action.payload);
            state.cartProductIds.splice(indexOfId,1);
        },
        clearAllItem(state){
            state.cartProductIds = []
        }
    }
})

export let {addToCart,removeFromCart,clearAllItem} = CartSlice.actions;
export default CartSlice;