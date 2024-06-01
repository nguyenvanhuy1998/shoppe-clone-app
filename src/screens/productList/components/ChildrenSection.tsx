import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SPACING} from '../../../constants';
import ItemAsideFilter from './ItemAsideFilter';
import {RatingStar} from '../data/ratingStars';
import {Category} from '../../../types/category.type';

interface Props {
  data: Category[] | RatingStar[];
}
const ChildrenSection = ({data}: Props) => {
  return (
    <View style={styles.container}>
      {data.map(item => {
        return <ItemAsideFilter key={item._id} item={item} />;
      })}
    </View>
  );
};

export default ChildrenSection;

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.space_16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.space_8,
  },
});
