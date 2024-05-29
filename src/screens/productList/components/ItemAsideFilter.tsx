import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {TextComponent} from '../../../components';
import {COLORS, SPACING} from '../../../constants';
import {WIDTH_DRAWER} from '../../../navigator/DrawerNavigator';
import {Category} from '../data/categories';
import {PriceRange} from '../data/priceRanges';

interface Props {
  item: Category | PriceRange;
  style?: StyleProp<ViewStyle>;
}
const ItemAsideFilter = ({item, style}: Props) => {
  return (
    <TouchableOpacity style={[styles.itemContainer, style]}>
      <TextComponent text={item.name} />
    </TouchableOpacity>
  );
};
export default ItemAsideFilter;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.primaryGreyHex,
    height: SPACING.space_32,
    width: (WIDTH_DRAWER - SPACING.space_24) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_4,
  },
});
