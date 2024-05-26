import React, {forwardRef, LegacyRef} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  DiscountProduct,
  IconText,
  Line,
  MaterialIcons,
  Row,
  TextComponent,
} from '../../../components';
import {
  COLORS,
  FONT_FAMILY,
  FONTSIZE,
  SPACING,
  WIDTH,
} from '../../../constants';
import {globalStyles} from '../../../styles';
import {Product} from '../../../types/product.type';
import {
  formatNumberToSocialStyle,
  formatVND,
  rateSale,
  spacingLeft,
} from '../../../utils';
import {gapNumber, spacingTop} from '../../../utils/spacing';
import ImageAvailable from './ImageAvailable';

interface Props {
  product: Product;
  activeIndexImage: number;
  onPressActiveIndexImage: (index: number) => void;
}
const InfoProductDetail = forwardRef(
  (
    {product, activeIndexImage, onPressActiveIndexImage}: Props,
    ref?: LegacyRef<FlatList<string>>,
  ) => {
    return (
      <View style={styles.container}>
        <TextComponent
          style={[spacingLeft(SPACING.space_8), spacingTop(SPACING.space_8)]}
          text={`${product.quantity} phân loại có sẵn`}
        />
        <FlatList
          ref={ref}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={product.images}
          contentContainerStyle={[
            gapNumber(SPACING.space_8),
            globalStyles.horizontalSpacing8,
          ]}
          renderItem={({item, index}) => (
            <ImageAvailable
              item={item}
              index={index}
              activeIndexImage={activeIndexImage}
              onPressActiveIndexImage={onPressActiveIndexImage}
            />
          )}
        />
        <Row style={[spacingLeft(SPACING.space_8), gapNumber(SPACING.space_4)]}>
          <TextComponent
            text={`₫${formatVND(product.price)}`}
            fontSize={FONTSIZE.size_18}
            color={COLORS.primaryRedHex}
            fontFamily={FONT_FAMILY.montserrat_semibold}
          />
          <TextComponent
            style={globalStyles.decorLine}
            text={`₫${formatVND(product.price_before_discount)}`}
            fontSize={FONTSIZE.size_14}
            color={COLORS.thirdGreyHex}
          />
          <DiscountProduct
            backgroundColor={COLORS.secondYellowHex}
            text={`${rateSale(product.price_before_discount, product.price)}`}
          />
        </Row>
        <TextComponent
          style={spacingLeft(SPACING.space_8)}
          numberOfLines={2}
          text={product.name}
        />
        <Row style={[globalStyles.jusBetween, globalStyles.horizontalSpacing8]}>
          <Row style={[gapNumber(SPACING.space_8)]}>
            <IconText
              icon={
                <MaterialIcons name="star" color={COLORS.primaryYellowHex} />
              }
              text={`${product.rating} / 5`}
            />
            <Line width={1} height={SPACING.space_10} />
            <TextComponent
              text={`Đã bán ${formatNumberToSocialStyle(product.sold)}`}
            />
          </Row>
          <Row style={gapNumber(SPACING.space_8)}>
            <MaterialIcons
              name="favorite-outline"
              color={COLORS.thirdGreyHex}
              size="large"
            />
            <MaterialIcons
              name="message"
              color={COLORS.primaryBlueHex}
              size="large"
            />
          </Row>
        </Row>
        <Line height={1} width={WIDTH} />
        <Row style={[globalStyles.jusBetween, globalStyles.horizontalSpacing8]}>
          <IconText
            fontSize={FONTSIZE.size_10}
            icon={<MaterialIcons name="inbox" color={COLORS.primaryRedHex} />}
            text={'Đổi ý miễn phí 15 ngày'}
          />
          <IconText
            fontSize={FONTSIZE.size_10}
            icon={
              <MaterialIcons name="shield-moon" color={COLORS.primaryRedHex} />
            }
            text={'Chính hãng 100%'}
          />
          <IconText
            fontSize={FONTSIZE.size_10}
            icon={
              <MaterialIcons
                name="directions-bus-filled"
                color={COLORS.primaryRedHex}
              />
            }
            text={'Giao miễn phí'}
          />
        </Row>
      </View>
    );
  },
);

export default InfoProductDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_8,
    paddingBottom: SPACING.space_8,
    gap: SPACING.space_8,
  },
});
