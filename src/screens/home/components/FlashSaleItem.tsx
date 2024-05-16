import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  DiscountProductComponent,
  ImageComponent,
  LabelProductComponent,
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
      <LabelProductComponent />
      <DiscountProductComponent icon="flash-on" text={String(item.discount)} />
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
