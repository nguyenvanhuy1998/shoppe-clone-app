import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SPACING} from '../../../constants';
import {Category} from '../data/categories';
import ItemAsideFilter from './ItemAsideFilter';

interface Props {
  data: Category[];
}
const AllCategories = ({data}: Props) => {
  return (
    <View style={styles.container}>
      {data.map(item => {
        return <ItemAsideFilter key={item.id} item={item} />;
      })}
    </View>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.space_16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.space_8,
  },
});
