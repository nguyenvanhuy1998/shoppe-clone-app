import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, SPACING} from '../../../constants';
import {Category} from '../../../types/category.type';
import {TextComponent} from '../../../components';
import {WIDTH_DRAWER} from '../../../navigator/DrawerNavigator';
import {AsideFilterProps} from './AsideFilter';

interface Props {
  data: Category[];
  style?: StyleProp<ViewStyle>;
  asideFilters: AsideFilterProps;
  setAsideFilter: React.Dispatch<React.SetStateAction<AsideFilterProps>>;
}

const CategoryItem = ({data, asideFilters, setAsideFilter, style}: Props) => {
  const handleSelectedCategoryItem = (id: string) => {
    setAsideFilter(prev => {
      return {
        ...prev,
        category: id,
      };
    });
  };
  return (
    <View style={styles.container}>
      {data.map(item => {
        const isActive = asideFilters.category === item._id;
        return (
          <TouchableOpacity
            onPress={() => handleSelectedCategoryItem(item._id)}
            key={item._id}
            style={[
              styles.itemContainer,
              {
                backgroundColor: isActive
                  ? COLORS.primaryWhiteHex
                  : COLORS.primaryGreyHex,
                borderColor: isActive
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryGreyHex,
              },
              style,
            ]}>
            <TextComponent text={item.name} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.space_16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.space_8,
  },
  itemContainer: {
    height: SPACING.space_32,
    width: (WIDTH_DRAWER - SPACING.space_24) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_4,
    borderWidth: 0.5,
  },
});
