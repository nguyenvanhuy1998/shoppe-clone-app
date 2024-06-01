import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductListConfig} from '../../types/product.type';
import {omit} from 'lodash';
import {sortBy} from '../../constants/product';

const initialState: ProductListConfig = {
  sort_by: 'view',
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    sortFilterChange: (
      state,
      action: PayloadAction<Exclude<ProductListConfig['sort_by'], undefined>>,
    ) => {
      return omit(
        {
          ...state,
          sort_by: action.payload,
        },
        ['order'],
      );
    },
    sortPriceOrder: (
      state,
      action: PayloadAction<Exclude<ProductListConfig['order'], undefined>>,
    ) => {
      state.sort_by = sortBy.price;
      state.order = action.payload;
    },
  },
});
export const {sortFilterChange, sortPriceOrder} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
