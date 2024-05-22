import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Ionicons, TextComponent} from '../../../components';
import {
  BORDER_RADIUS,
  COLORS,
  FONTSIZE,
  SPACING,
  WIDTH,
} from '../../../constants';
import {CategoryProps} from '../data/categories';

const Category = ({
  item,
  onPress,
}: {
  item: CategoryProps;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.image} color={item.colorIcon} />
      </View>
      <TextComponent
        text={item.title}
        numberOfLines={2}
        color={COLORS.primaryBlackHex}
        fontSize={FONTSIZE.size_10}
        textAlign="center"
      />
    </TouchableOpacity>
  );
};

export default Category;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: SPACING.space_8,
    width: WIDTH / 4 - SPACING.space_24,
  },
  iconContainer: {
    width: SPACING.space_32,
    height: SPACING.space_32,
    borderWidth: 1,
    borderColor: COLORS.thirdGreyHex,
    borderRadius: BORDER_RADIUS.radius_8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
