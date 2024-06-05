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
    asideFilterChange: (state, action: PayloadAction<ProductListConfig>) => {
      const {category, price_min, price_max, rating_filter} = action.payload;
      state.category = category;
      state.price_min = price_min;
      state.price_max = price_max;
      state.rating_filter = rating_filter;
    },
  },
});
export const {sortFilterChange, sortPriceOrder, asideFilterChange} =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
