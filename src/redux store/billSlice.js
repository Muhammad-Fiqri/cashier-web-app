import { createSlice } from "@reduxjs/toolkit";

export const billSlice = createSlice({
    name: 'bill',
    initialState: {
      //default val:
      /*
      {
          product_name : "Product", 
          product_price : "15000",
      },
       */
        value: [],
    },
    reducers: {
      AddProductToBill: (state, action) => {
        let is_dup = checkIfDup(state,action);
        if (!is_dup) {
          let temp = [...state.value];
          action.payload.product_count = 1;
          temp.push(action.payload);
          state.value = [...temp];
        } else {
          let temp = [...state.value];
          let objIndex = temp.findIndex((obj => obj.product_name == action.payload.product_name));
          temp[objIndex].product_count += 1;
          state.value = [...temp];
        }
      },
      ClearBill: (state) => {
        state.value = [];
      }
    },
  })

  function checkIfDup(state,action) {
    let temp = [...state.value];
    let product_name_only = temp.map((x) => x.product_name)
    if (product_name_only.indexOf(action.payload.product_name) == -1) {
      return false
    } else {
      return true
    }
  }
  
  // Action creators are generated for each case reducer function
  export const { AddProductToBill, ClearBill } = billSlice.actions
  
  export default billSlice.reducer