import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {TextComponent} from '../../../components';
import {COLORS, SPACING} from '../../../constants';
import {WIDTH_DRAWER} from '../../../navigator/DrawerNavigator';
import {Category} from '../../../types/category.type';

interface Props {
  data: Category[];
  style?: StyleProp<ViewStyle>;
  category?: string;
  setCategory: React.Dispatch<React.SetStateAction<undefined | string>>;
}

const CategoryItem = ({data, category, setCategory, style}: Props) => {
  const handleSelectedCategoryItem = (id: string) => {
    setCategory(id);
  };
  return (
    <View style={styles.container}>
      {data.map(item => {
        const isActive = category === item._id;
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
