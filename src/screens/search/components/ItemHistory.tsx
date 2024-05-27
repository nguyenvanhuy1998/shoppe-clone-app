import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {TextComponent} from '../../../components';
import {COLORS, SPACING} from '../../../constants';
import {History} from '../../home/data/histories';

const ItemHistory = ({item}: {item: History}) => (
  <TouchableOpacity style={styles.itemContainer}>
    <TextComponent text={item.title} />
  </TouchableOpacity>
);

export default ItemHistory;

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.thirdGreyHex,
    paddingVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_8,
  },
});
