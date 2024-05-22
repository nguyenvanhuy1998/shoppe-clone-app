/* eslint-disable react-native/no-inline-styles */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import React, {useRef} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import productApi from '../../apis/product.api';
import {
  ButtonIconWithBadge,
  ButtonOldComponent,
  ContainerComponent,
  DiscountProductComponent,
  IconTextComponent,
  Ionicons,
  LineComponent,
  MaterialIcons,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import {COLORS, FONT_FAMILY, FONTSIZE, OS, SPACING} from '../../constants';
import {SHADOW, WIDTH} from '../../constants/theme';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';
import {globalStyles} from '../../styles';
import {formatVND} from '../../utils';
import {
  gapNumber,
  spacingBottom,
  spacingHorizontal,
  spacingLeft,
  spacingTop,
  spacingVertical,
} from '../../utils/spacing';
import {formatNumberToSocialStyle, rateSale} from '../../utils/utils';
import {ProductImage} from './components';
import RenderHtml from 'react-native-render-html';

type ProductDetailScreenRouteProp = RouteProp<
  MainNavigatorParamList,
  'ProductDetail'
>;
const ProductDetailScreen = () => {
  // Khai báo biến
  const insets = useSafeAreaInsets();
  const route = useRoute<ProductDetailScreenRouteProp>();
  const navigation = useNavigation();
  const {id} = route.params;
  const flatListRef = useRef<FlatList>(null);

  // Lấy dữ liệu
  const {data: productDetailData} = useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getProductDetail(id),
  });
  const product = productDetailData?.data.data;

  // Thực hiện chức năng

  const handleBack = () => {
    navigation.goBack();
  };

  // Hiển thị UI
  if (!product) {
    return null;
  }

  return (
    <>
      <ContainerComponent
        type="noSafeArea"
        style={[
          styles.container,
          {
            paddingBottom: insets.bottom + SPACING.space_32,
          },
        ]}>
        {/* Product Images */}
        <View>
          <FlatList
            ref={flatListRef}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            horizontal
            data={product.images}
            renderItem={({item}) => {
              return <ProductImage uri={item} />;
            }}
          />
          {/* Header */}
          <RowComponent
            style={[
              [
                globalStyles.header,
                globalStyles.jusBetween,
                {
                  top: OS.isIOS ? insets.top : SPACING.space_32,
                },
              ],
            ]}>
            <ButtonOldComponent
              onPress={handleBack}
              backgroundColor={COLORS.primaryModal}
              styleContainer={styles.iconButtonContainer}
              iconLeft={
                <Ionicons
                  name="arrow-back"
                  color={COLORS.primaryWhiteHex}
                  size="large"
                />
              }
            />
            <RowComponent style={gapNumber(8)}>
              <ButtonOldComponent
                backgroundColor={COLORS.primaryModal}
                styleContainer={styles.iconButtonContainer}
                iconLeft={
                  <Entypo
                    name="forward"
                    color={COLORS.primaryWhiteHex}
                    size={SPACING.space_24}
                  />
                }
              />
              <ButtonIconWithBadge
                iconName="cart"
                badgeText="1"
                sizeIcon="large"
                styleContainer={styles.iconButtonContainer}
              />
              <ButtonOldComponent
                backgroundColor={COLORS.primaryModal}
                styleContainer={styles.iconButtonContainer}
                iconLeft={
                  <MaterialIcons
                    name="more-vert"
                    color={COLORS.primaryWhiteHex}
                    size="large"
                  />
                }
              />
            </RowComponent>
          </RowComponent>
          {/* Count Image */}
          <View style={styles.countImageContainer}>
            <TextComponent text={`${0}/${product.images.length}`} />
          </View>
        </View>
        {/* Product Info */}
        <SectionComponent style={globalStyles.resetContainer}>
          <TextComponent
            text={`${product.quantity} phân loại có sẵn`}
            fontFamily={FONT_FAMILY.montserrat_bold}
            style={[spacingBottom(8), spacingLeft(8)]}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={product.images}
            contentContainerStyle={[
              gapNumber(8),
              globalStyles.horizontalSpacing8,
            ]}
            keyExtractor={item => item.toString()}
            renderItem={({item, index}) => {
              const isActive = index === 0;
              return (
                <ProductImage
                  onPress={() => {
                    flatListRef.current?.scrollToIndex({
                      index,
                    });
                  }}
                  uri={item}
                  width={SPACING.space_56 + SPACING.space_16}
                  height={SPACING.space_56 + SPACING.space_16}
                  style={{
                    borderWidth: isActive ? 0.5 : 0,
                    borderColor: isActive
                      ? COLORS.primaryRedHex
                      : 'transparent',
                  }}
                />
              );
            }}
          />
          <RowComponent
            style={[
              globalStyles.horizontalSpacing8,
              spacingTop(8),
              gapNumber(4),
            ]}>
            <TextComponent
              fontSize={FONTSIZE.size_18}
              fontFamily={FONT_FAMILY.montserrat_semibold}
              color={COLORS.primaryRedHex}
              text={`₫${formatVND(product.price)}`}
            />
            <TextComponent
              color={COLORS.thirdGreyHex}
              fontSize={FONTSIZE.size_14}
              style={globalStyles.decorLine}
              text={`₫${formatVND(product.price_before_discount)}`}
            />
            <DiscountProductComponent
              text={`${rateSale(product.price_before_discount, product.price)}`}
            />
          </RowComponent>
          <View
            style={[styles.labelContainer, spacingVertical(8), spacingLeft(8)]}>
            <TextComponent
              fontSize={FONTSIZE.size_10}
              text={'Mua Kèm Deal Sốc'}
              color={COLORS.primaryRedHex}
            />
          </View>
          <TextComponent
            numberOfLines={2}
            text={product.name}
            style={globalStyles.horizontalSpacing8}
          />
          <RowComponent
            style={[
              globalStyles.jusBetween,
              spacingHorizontal(SPACING.space_8),
              spacingTop(SPACING.space_12),
            ]}>
            <RowComponent>
              <IconTextComponent
                icon={
                  <MaterialIcons name="star" color={COLORS.primaryYellowHex} />
                }
                text={`${product.rating} / 5`}
                color={COLORS.primaryBlackHex}
              />
              <LineComponent
                width={2}
                height={SPACING.space_12}
                left={SPACING.space_8}
                right={SPACING.space_8}
              />
              <TextComponent
                text={`Đã bán ${formatNumberToSocialStyle(product.sold)}`}
                fontSize={FONTSIZE.size_10}
              />
            </RowComponent>
            <RowComponent style={gapNumber(8)}>
              <MaterialIcons
                name="favorite-outline"
                color={COLORS.thirdGreyHex}
              />
              <MaterialIcons name="chat" color={COLORS.primaryBlueHex} />
            </RowComponent>
          </RowComponent>
          <LineComponent
            width={WIDTH}
            height={1}
            top={SPACING.space_8}
            bottom={SPACING.space_8}
          />
          <RowComponent
            style={[
              globalStyles.horizontalSpacing8,
              globalStyles.spaceBetween,
              gapNumber(4),
            ]}>
            <IconTextComponent
              icon={
                <Ionicons
                  name="logo-dropbox"
                  size="small"
                  color={COLORS.primaryRedHex}
                />
              }
              text="Đổi ý miễn phí 15 ngày"
              fontSize={FONTSIZE.size_10}
            />
            <IconTextComponent
              icon={
                <Ionicons
                  name="shield-checkmark"
                  size="small"
                  color={COLORS.primaryRedHex}
                />
              }
              text="Chính hãng 100%"
              fontSize={FONTSIZE.size_10}
            />
            <IconTextComponent
              icon={
                <Ionicons
                  name="bus"
                  size="small"
                  color={COLORS.primaryRedHex}
                />
              }
              text="Giao miễn phí"
              fontSize={FONTSIZE.size_10}
            />
          </RowComponent>
        </SectionComponent>
        {/* SPayLater */}
        <SectionComponent
          style={[spacingTop(8), globalStyles.row, globalStyles.jusBetween]}>
          <TextComponent text={'SPayLater'} />
          <ButtonOldComponent
            text="Mua trước trả sau"
            color={COLORS.primaryOrangeHex}
            fontFamily={FONT_FAMILY.montserrat_medium}
            iconRight={
              <MaterialIcons
                name="keyboard-arrow-right"
                color={COLORS.thirdGreyHex}
                size="large"
              />
            }
          />
        </SectionComponent>

        {/* Phí vận chuyển */}
        <SectionComponent style={[spacingTop(8)]}>
          <RowComponent style={[globalStyles.jusBetween, spacingBottom(8)]}>
            <RowComponent style={gapNumber(4)}>
              <TextComponent
                text={'Phí vận chuyển'}
                fontFamily={FONT_FAMILY.montserrat_semibold}
              />
              <TextComponent
                text={'đ0'}
                color={COLORS.primaryOrangeHex}
                fontFamily={FONT_FAMILY.montserrat_semibold}
              />
              <TextComponent
                style={globalStyles.decorLine}
                text={'đ38.000'}
                color={COLORS.thirdGreyHex}
              />
            </RowComponent>
            <MaterialIcons
              name="local-shipping"
              color={COLORS.primaryGreenHex}
            />
          </RowComponent>
          <TextComponent
            lineHeight={19}
            text={'Miễn phí vận chuyển cho đơn hàng từ đ0'}
            fontSize={FONTSIZE.size_12}
          />
          <TextComponent
            lineHeight={19}
            text={'Đảm bảo nhận hàng từ 24 Tháng 5 - 25 Tháng 5'}
            fontSize={FONTSIZE.size_12}
          />
          <TextComponent
            lineHeight={19}
            text={
              'Nhận Voucher trị giá đ15.000 nếu đơn hàng được giao đến bạn trễ hơn thời gian dự kiến'
            }
            fontSize={FONTSIZE.size_12}
          />
          <TouchableOpacity style={[globalStyles.row, globalStyles.jusBetween]}>
            <TextComponent text={'Xem thêm'} />
            <MaterialIcons
              name="keyboard-arrow-right"
              color={COLORS.thirdGreyHex}
              size="large"
            />
          </TouchableOpacity>
        </SectionComponent>
        {/* Chi tiết sản phẩm và Mô tả sản phẩm */}
        <SectionComponent style={[spacingTop(8)]}>
          <RowComponent style={globalStyles.jusBetween}>
            <TextComponent
              text={'Chi tiết sản phẩm'}
              fontFamily={FONT_FAMILY.montserrat_semibold}
            />
            <ButtonOldComponent
              text="Kho, Thương hiệu, H..."
              fontFamily={FONT_FAMILY.montserrat_medium}
              color={COLORS.primaryBlackHex}
              iconRight={
                <MaterialIcons
                  name="keyboard-arrow-right"
                  color={COLORS.thirdGreyHex}
                  size="large"
                />
              }
            />
          </RowComponent>
          <LineComponent
            style={globalStyles.selfCenter}
            width={WIDTH}
            height={1}
            top={SPACING.space_8}
            bottom={SPACING.space_8}
          />
          <TextComponent
            text={'Mô tả sản phẩm'}
            fontFamily={FONT_FAMILY.montserrat_semibold}
          />
          <RenderHtml
            contentWidth={WIDTH}
            source={{
              html: product.description,
            }}
          />
        </SectionComponent>
        {/* Mua sản phẩm */}
      </ContainerComponent>
      <RowComponent
        style={[
          styles.buyContainer,
          {
            bottom: insets.bottom,
          },
        ]}>
        <ButtonOldComponent
          styleContainer={[globalStyles.column, styles.buttonContainer]}
          iconLeft={
            <Ionicons name="chatbubbles-outline" color={COLORS.primaryRedHex} />
          }
          text="Chat ngay"
          fontSize={FONTSIZE.size_10}
          color={COLORS.primaryBlackHex}
          fontFamily={FONT_FAMILY.montserrat_regular}
        />
        <LineComponent width={1} height={'50%'} />

        <ButtonOldComponent
          styleContainer={[globalStyles.column, styles.buttonContainer]}
          iconLeft={<Ionicons name="cart" color={COLORS.primaryRedHex} />}
          text="Thêm vào giỏ hàng"
          fontSize={FONTSIZE.size_10}
          fontFamily={FONT_FAMILY.montserrat_regular}
          color={COLORS.primaryBlackHex}
        />
        <ButtonOldComponent
          styleContainer={[globalStyles.flexOne, styles.buttonBuyContainer]}
          text="Mua ngay"
          backgroundColor={COLORS.primaryRedHex}
        />
      </RowComponent>
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {},
  iconButtonContainer: {
    borderRadius: 99,
    width: SPACING.space_32,
    height: SPACING.space_32,
    backgroundColor: COLORS.primaryModal,
  },
  countImageContainer: {
    position: 'absolute',
    bottom: SPACING.space_8,
    right: SPACING.space_8,
  },
  labelContainer: {
    borderWidth: 0.5,
    borderColor: COLORS.primaryRedHex,
    alignSelf: 'flex-start',
    paddingHorizontal: SPACING.space_4,
  },
  buyContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: COLORS.primaryWhiteHex,
    ...SHADOW.primary,
  },
  buttonContainer: {
    borderRadius: 0,
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_16,
  },
  buttonBuyContainer: {
    borderRadius: 0,
    height: '100%',
  },
});
