import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SPACING} from '../../../constants';
import SearchProductList from './SearchProductList';
import SortProductList from './SortProductList';
import {ProductListConfig} from '../../../types/product.type';

interface Props {
  filters: ProductListConfig;
  setFilters: React.Dispatch<React.SetStateAction<ProductListConfig>>;
}
const HeaderProductList = ({filters, setFilters}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}>
      <SearchProductList />
      <SortProductList filters={filters} setFilters={setFilters} />
    </View>
  );
};

export default HeaderProductList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_8,
  },
});
