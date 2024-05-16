import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE, images, SPACING} from '../constants';
import {globalStyles} from '../styles';
import {WIDTH_PRODUCT} from '../styles/globalStyles';
import {spacingLeft, spacingRight} from '../utils';
import {gapNumber} from '../utils/spacing';
import {formatVND} from '../utils/utils';
import DiscountProductComponent from './DiscountProductComponent';
import ImageComponent from './ImageComponent';
import LabelProductComponent from './LabelProductComponent';
import MaterialIcons from './MaterialIcons';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

interface Props {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
const ProductComponent = ({onPress, style}: Props) => {
  return (
    <TouchableOpacity
      style={[globalStyles.product, spacingRight(8), style]}
      onPress={onPress}>
      <ImageComponent
        source={images.flashSale01}
        width={WIDTH_PRODUCT}
        height={WIDTH_PRODUCT}
      />
      <LabelProductComponent />
      <DiscountProductComponent
        backgroundColor={COLORS.primaryWhitePinkHex}
        text={String(28)}
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
          text={
            'Sữa rửa mặt dưỡng ẩm da innisfree Green Tea Amino Cleansing Foam 150g'
          }
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
            text="4.9"
            fontSize={FONTSIZE.size_10}
            color={COLORS.primaryBlackHex}
          />
        </RowComponent>
        <RowComponent style={[globalStyles.jusBetween]}>
          <TextComponent
            style={[globalStyles.flexOne, spacingRight(4)]}
            text={formatVND(335000)}
            color={COLORS.primaryOrangeHex}
            fontFamily={FONT_FAMILY.montserrat_medium}
          />
          <TextComponent text={'Đã bán 1.3k'} fontSize={FONTSIZE.size_12} />
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
