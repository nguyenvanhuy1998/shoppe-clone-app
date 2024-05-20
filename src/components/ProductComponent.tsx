import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../constants';
import {globalStyles} from '../styles';
import {WIDTH_PRODUCT} from '../styles/globalStyles';
import {
  formatNumberToSocialStyle,
  formatVND,
  rateSale,
  spacingLeft,
  spacingRight,
} from '../utils';
import {gapNumber} from '../utils/spacing';
import DiscountProductComponent from './DiscountProductComponent';
import ImageComponent from './ImageComponent';
import LabelProductComponent from './LabelProductComponent';
import MaterialIcons from './MaterialIcons';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {Product} from '../types/product.type';

interface Props {
  product: Product;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
const ProductComponent = ({onPress, style, product}: Props) => {
  return (
    <TouchableOpacity style={[globalStyles.product, style]} onPress={onPress}>
      <ImageComponent
        source={{
          uri: product.image,
        }}
        width={WIDTH_PRODUCT}
        height={WIDTH_PRODUCT}
      />
      <LabelProductComponent />
      <DiscountProductComponent
        style={globalStyles.discount}
        backgroundColor={COLORS.primaryWhitePinkHex}
        text={`${rateSale(product.price_before_discount, product.price)}`}
      />
      <View
        style={[
          globalStyles.sectionSecondary,
          globalStyles.flexOne,
          gapNumber(8),
        ]}>
        <TextComponent
          numberOfLines={2}
          color={COLORS.primaryBlackHex}
          text={product.name}
          fontSize={FONTSIZE.size_12}
        />
        <RowComponent style={[styles.starContainer, globalStyles.jusCenter]}>
          <MaterialIcons
            name="star"
            color={COLORS.primaryYellowHex}
            size="small"
          />
          <TextComponent
            style={spacingLeft(2)}
            text={product.rating}
            fontSize={FONTSIZE.size_10}
            color={COLORS.primaryBlackHex}
          />
        </RowComponent>
        <RowComponent style={[globalStyles.jusBetween]}>
          <TextComponent
            style={[globalStyles.flexOne, spacingRight(4)]}
            text={`₫ ${formatVND(product.price)}`}
            color={COLORS.primaryOrangeHex}
            fontSize={FONTSIZE.size_12}
            fontFamily={FONT_FAMILY.montserrat_medium}
          />
          <TextComponent
            text={`Đã bán ${formatNumberToSocialStyle(product.sold)}`}
            fontSize={FONTSIZE.size_10}
          />
        </RowComponent>
      </View>
    </TouchableOpacity>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  starContainer: {
    borderWidth: 0.5,
    borderColor: COLORS.primaryOrangeHex,
    backgroundColor: COLORS.primaryYellowPastelHex,
    alignSelf: 'flex-start',
    paddingHorizontal: SPACING.space_2,
  },
});
