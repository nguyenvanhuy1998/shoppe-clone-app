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
import {Product} from '../types/product.type';
import {
  formatNumberToSocialStyle,
  formatVND,
  rateSale,
  spacingRight,
} from '../utils';
import DiscountProductComponent from './DiscountProductComponent';
import IconTextComponent from './IconTextComponent';
import ImageComponent from './ImageComponent';
import MaterialIcons from './MaterialIcons';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

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
      <DiscountProductComponent
        style={globalStyles.discount}
        backgroundColor={COLORS.primaryWhitePinkHex}
        text={`${rateSale(product.price_before_discount, product.price)}`}
      />
      <View style={styles.infoContainer}>
        <TextComponent numberOfLines={2} text={product.name} />
        <IconTextComponent
          style={styles.starContainer}
          text={product.rating}
          fontSize={FONTSIZE.size_10}
          icon={
            <MaterialIcons
              name="star"
              color={COLORS.primaryYellowHex}
              size="small"
            />
          }
        />
        <RowComponent style={[globalStyles.jusBetween]}>
          <TextComponent
            style={[globalStyles.flexOne, spacingRight(4)]}
            text={`₫ ${formatVND(product.price)}`}
            color={COLORS.primaryOrangeHex}
            fontSize={FONTSIZE.size_14}
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
  infoContainer: {
    padding: SPACING.space_8,
    gap: SPACING.space_8,
  },
});
