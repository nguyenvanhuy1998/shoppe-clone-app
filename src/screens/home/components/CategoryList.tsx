import React from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import {categories} from '../data/categories';
import Category from './Category';
import {gapNumber} from '../../../utils/spacing';
import {SPACING} from '../../../constants';

const CategoryList = () => {
  return (
    <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <FlatList
        data={categories}
        columnWrapperStyle={gapNumber(SPACING.space_8)}
        contentContainerStyle={styles.contentFlatList}
        renderItem={({item}) => <Category item={item} />}
        numColumns={Math.ceil(categories.length / 2)}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

export default CategoryList;
const styles = StyleSheet.create({
  contentFlatList: {
    gap: SPACING.space_8,
    paddingHorizontal: SPACING.space_8,
  },
});
