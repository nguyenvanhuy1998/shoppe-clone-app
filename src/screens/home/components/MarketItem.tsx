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
import {MarketProps} from '../data/market';
import {globalStyles} from '../../../styles';

const MarketItem = ({
  item,
  onPress,
}: {
  item: MarketProps;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[globalStyles.center, styles.iconContainer]}>
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

export default MarketItem;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: WIDTH / 4 - SPACING.space_24,
    height: SPACING.space_10 * 8,
    marginRight: SPACING.space_16,
  },
  iconContainer: {
    width: SPACING.space_32,
    height: SPACING.space_32,
    borderWidth: 1,
    borderColor: COLORS.thirdGreyHex,
    borderRadius: BORDER_RADIUS.radius_8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.space_8,
  },
});
