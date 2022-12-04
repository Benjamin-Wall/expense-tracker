//* 5 - Import createSlice from @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

/**
 ** 6.1 - Define a variable, transactionSlice, and initialize it with a call to createSlice()
 
 ** 6.2 - Add a name property to the configuration object and set it equal to 'transactions

 ** 6.3 - Add an initialState property to the configuration object, and set it equal to the
 **       variable initialState that we've defined for you.

 ** 6.4 - Include a reducers property in the configurations object.
 */

const transactionSlice = createSlice({
  name: "transactions",
  initialState: initialState,

  /**
   ** 7.1 - Add an addTransaction property to the reducers object passed to createSlice()

   ** 7.2 - Set addTransaction equal to a case reducer that recieves two arguments
   **       state and action. it should add the new transaction object (action.payload)
   **       to the correct category's transaction list in the transactions state object

   ** 7.3 - Add a deleteTransaction property to the reducers object passed to createSlice()

   ** 7.4 - set deleteTransaction equal to a case reducer that recieves two arguments
   **       state and action. it should delete the old transaction (action.payload) from
   **       the correct category's transaction list in the transactions state object.
   */
  reducers: {
    addTransaction: (state, action) => {
      const category = action.payload.category;
      state[category].push(action.payload);
    },
    deleteTransaction: (state, action) => {
      const id = action.payload.id;
      const category = action.payload.category;
      state[category] = state[category].filter(transaction => transaction.id !== id)
    },
  },
});

/**
 ** 8.1 - Export the addTransaction and deleteTransaction actions creators generated by 
 **       createSlice() and stored in transactionsSlice.

 ** 8.2 - Update the export default statement to export the reducer generated by createSlice()
 **       and stored in transactionsSlice
 */

export const { addTransaction, deleteTransaction } = transactionSlice.actions;

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);
export default transactionSlice.reducer;
