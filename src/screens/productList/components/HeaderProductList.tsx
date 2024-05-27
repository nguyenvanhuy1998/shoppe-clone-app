import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SPACING} from '../../../constants';
import SearchProductList from './SearchProductList';
import SortProductList from './SortProductList';

const HeaderProductList = () => {
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
      <SortProductList />
    </View>
  );
};

export default HeaderProductList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryWhiteHex,
    paddingBottom: SPACING.space_8,
  },
});
