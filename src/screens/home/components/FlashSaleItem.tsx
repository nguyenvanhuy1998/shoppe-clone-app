import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  ImageComponent,
  MaterialIcons,
  RowComponent,
  TextComponent,
} from '../../../components';
import {FlashSale} from '../data/flashsale';
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONTSIZE,
  SPACING,
  WIDTH,
} from '../../../constants';
import {spacingTop} from '../../../utils';
import {formatVND} from '../../../utils/utils';
import {globalStyles} from '../../../styles';
interface Props {
  item: FlashSale;
  onPress?: () => void;
}
const FlashSaleItem = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageComponent
        source={item.image}
        width={'100%'}
        height={SPACING.space_10 * 15}
      />
      <TextComponent
        style={spacingTop(SPACING.space_4)}
        text={formatVND(item.price)}
        textAlign="center"
        color={COLORS.primaryOrangeHex}
      />
      <RowComponent
        style={[styles.countByContainer, spacingTop(SPACING.space_4)]}>
        <View style={styles.countByIn} />
        <TextComponent
          style={globalStyles.flexOne}
          text={`ĐÃ BÁN ${item.quantitySold}`}
          textAlign="center"
          fontSize={FONTSIZE.size_12}
          color={COLORS.primaryWhiteHex}
        />
      </RowComponent>
      <View style={[styles.iconContainer, globalStyles.center]}>
        <MaterialIcons
          name="local-mall"
          color={COLORS.primaryWhiteHex}
          size="small"
        />
      </View>
      <RowComponent style={styles.discountContainer}>
        <MaterialIcons name="flash-on" color={COLORS.primaryRedHex} />
        <TextComponent
          text={`-${item.discount}%`}
          color={COLORS.primaryOrangeHex}
          fontFamily={FONT_FAMILY.montserrat_medium}
          fontSize={FONTSIZE.size_12}
        />
      </RowComponent>
    </TouchableOpacity>
  );
};

export default FlashSaleItem;

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 3 + SPACING.space_32,
    borderWidth: 0.5,
    borderColor: COLORS.primaryGreyHex,
  },
  iconContainer: {
    position: 'absolute',
    left: -SPACING.space_2,
    top: 0,
    width: SPACING.space_32,
    paddingVertical: SPACING.space_2,
    backgroundColor: COLORS.primaryRedHex,
    borderTopRightRadius: BORDER_RADIUS.radius_4,
    borderBottomRightRadius: BORDER_RADIUS.radius_4,
  },
  discountContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: COLORS.primaryYellowHex,
  },
  countByContainer: {
    backgroundColor: COLORS.primaryGreyHex,
    marginHorizontal: SPACING.space_8,
    marginBottom: SPACING.space_8,
    borderRadius: 99,
  },
  countByIn: {
    width: '20%',
    backgroundColor: COLORS.primaryRedHex,
    height: '100%',
    borderTopLeftRadius: 99,
    borderBottomLeftRadius: 99,
  },
});
