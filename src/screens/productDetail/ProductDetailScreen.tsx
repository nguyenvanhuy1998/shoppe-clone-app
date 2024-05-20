/* eslint-disable react-native/no-inline-styles */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import React, {useRef} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import productApi from '../../apis/product.api';
import {
  ButtonIconWithBadge,
  ButtonSecondaryComponent,
  ContainerComponent,
  DiscountProductComponent,
  Ionicons,
  MaterialIcons,
  RowComponent,
  SectionSecondaryComponent,
  TextComponent,
} from '../../components';
import {COLORS, FONT_FAMILY, FONTSIZE, OS, SPACING} from '../../constants';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';
import {globalStyles} from '../../styles';
import {
  gapNumber,
  spacingBottom,
  spacingLeft,
  spacingTop,
} from '../../utils/spacing';
import {ProductImage} from './components';
import {formatVND} from '../../utils';
import {rateSale} from '../../utils/utils';

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
    <ContainerComponent type="noSafeArea" style={styles.container}>
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
          <ButtonSecondaryComponent
            onPress={handleBack}
            type="icon"
            backgroundColor={COLORS.primaryModal}
            styleContainer={styles.iconButtonContainer}
            childrenIcon={
              <Ionicons
                name="arrow-back"
                color={COLORS.primaryWhiteHex}
                size="large"
              />
            }
          />
          <RowComponent style={gapNumber(8)}>
            <ButtonSecondaryComponent
              type="icon"
              backgroundColor={COLORS.primaryModal}
              styleContainer={styles.iconButtonContainer}
              childrenIcon={
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
            <ButtonSecondaryComponent
              type="icon"
              backgroundColor={COLORS.primaryModal}
              styleContainer={styles.iconButtonContainer}
              childrenIcon={
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
      {/* Phân loại có sẵn */}
      <SectionSecondaryComponent style={globalStyles.resetContainer}>
        <TextComponent
          text={`${product.images.length} phân loại có sẵn`}
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
                  borderColor: isActive ? COLORS.primaryRedHex : 'transparent',
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
      </SectionSecondaryComponent>
    </ContainerComponent>
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
  productImageContainer: {},
});
