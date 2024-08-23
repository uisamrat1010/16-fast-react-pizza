import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newitem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incQt(state, action) {
      //payload = pizzaId
      const itemQt = state.cart.find((item) => item.pizzaId === action.payload);
      itemQt.quantity++;
      itemQt.totalPrice = itemQt.unitPrice * itemQt.quantity;
    },
    decQt(state, action) {
      //payload = pizzaId
      const itemQt = state.cart.find((item) => item.pizzaId === action.payload);
      itemQt.quantity--;
      itemQt.totalPrice = itemQt.unitPrice * itemQt.quantity;
      if (itemQt.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, incQt, decQt, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

export const getCurrentQuantitybyId = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
