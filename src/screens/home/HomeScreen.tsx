import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import CountDown from 'react-native-countdown-component';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Scan} from '../../assets/svg';
import {
  ButtonIconWithBadge,
  ButtonSecondaryComponent,
  CarouselComponent,
  ContainerComponent,
  DotTextComponent,
  Ionicons,
  LineVerticalComponent,
  RowComponent,
  SectionSecondaryComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {
  BORDER_RADIUS,
  COLORS,
  images,
  SHADOW,
  SPACING,
  WIDTH,
} from '../../constants';
import {useCarousel} from '../../hooks';
import {globalStyles} from '../../styles';
import {
  createPositionStyle,
  spacingTop,
  gapNumber,
  spacingLeft,
} from '../../utils/spacing';
import {
  FlashSaleItem,
  HomeTitle,
  LiveItem,
  MarketItem,
  OutStanding,
  TypePay,
} from './components';
import {bannerData, bannerServices} from './data/banner';
import {dataFlashSale} from './data/flashsale';
import {liveData} from './data/live';
import {marketData} from './data/market';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const time = 7200;
  const {
    refCarousel: refCarouselBanner,
    progress: progressBanner,
    onPressPagination: onPressPaginationBanner,
  } = useCarousel();
  const {
    refCarousel: refCarouselServices,
    progress: progressServices,
    onPressPagination: onPressPaginationServices,
  } = useCarousel();

  return (
    <ContainerComponent barStyle="light-content" type="noSafeArea">
      {/* Header Home */}
      <CarouselComponent
        ref={refCarouselBanner}
        data={bannerData}
        width={WIDTH}
        height={WIDTH / 2}
        progress={progressBanner}
        onPressPagination={onPressPaginationBanner}
        children={
          <RowComponent
            style={[
              styles.searchHeaderContainer,
              {
                top: insets.top,
              },
            ]}>
            <RowComponent style={styles.inputContainer}>
              <Ionicons
                name="search-outline"
                color={COLORS.secondaryGreyHex}
                onPress={() => {}}
              />
              <TextComponent
                text="Search..."
                color={COLORS.primaryOrangeHex}
                style={[globalStyles.flexOne, spacingLeft(SPACING.space_8)]}
              />
              <Ionicons
                name="camera-outline"
                color={COLORS.secondaryGreyHex}
                onPress={() => {}}
              />
            </RowComponent>
            <ButtonIconWithBadge
              iconName="cart-outline"
              badgeText="1"
              onPress={() => {}}
            />
            <ButtonIconWithBadge
              iconName="chatbubbles-outline"
              badgeText="22"
              styleContainer={spacingLeft(SPACING.space_8)}
              onPress={() => {}}
            />
          </RowComponent>
        }
      />
      {/* Market Shopee */}
      <SectionSecondaryComponent style={[globalStyles.resetContainer]}>
        <RowComponent
          style={[globalStyles.sectionSecondary, styles.typePageContainer]}>
          <ButtonSecondaryComponent
            type="icon"
            childrenIcon={
              <Scan width={SPACING.space_32} height={SPACING.space_32} />
            }
          />
          <LineVerticalComponent />
          <TypePay
            onPress={() => {}}
            icon="wallet-outline"
            title="Ví ShopeePay"
            colorIcon={COLORS.primaryOrangeHex}
            desc="Vourcher mua sắm giảm đến 40.000Đ"
          />
          <LineVerticalComponent />
          <TypePay
            onPress={() => {}}
            icon="list-circle-outline"
            title="1500"
            colorIcon={COLORS.primaryYellowHex}
            desc="Nhấn để nhận Xu mỗi ngày"
          />
        </RowComponent>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentMarketList}>
          <FlatList
            contentContainerStyle={gapNumber(8)}
            data={marketData}
            renderItem={({item}) => (
              <MarketItem item={item} onPress={() => {}} />
            )}
            numColumns={Math.ceil(marketData.length / 2)}
            scrollEnabled={false}
          />
        </ScrollView>
        <View style={styles.lineListContainer}>
          <View style={styles.contentLineList} />
        </View>
        <RowComponent style={styles.outStandingContainer}>
          <OutStanding onPress={() => {}} image={images.banner06} />
          <OutStanding style={globalStyles.flexOne} image={images.banner07} />
          <OutStanding image={images.banner08} />
        </RowComponent>
      </SectionSecondaryComponent>
      {/* Shopee live siêu rẻ */}
      <SectionSecondaryComponent
        style={[globalStyles.resetContainer, spacingTop(SPACING.space_16)]}>
        <HomeTitle title="SHOPEE LIVE SIÊU RẺ" textButton="Xem thêm" />
        <FlatList
          alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={globalStyles.contentListContainer}
          horizontal
          data={liveData}
          renderItem={({item}) => <LiveItem item={item} />}
        />
      </SectionSecondaryComponent>
      {/* FLASH SALE */}
      <SectionSecondaryComponent
        style={[globalStyles.resetContainer, spacingTop(SPACING.space_16)]}>
        <HomeTitle
          title="FLASH SALE"
          textButton="Xem tất cả"
          countdown={
            <CountDown
              size={10}
              until={time}
              digitStyle={globalStyles.digitContainer}
              digitTxtStyle={globalStyles.digitText}
              timeToShow={['H', 'M', 'S']}
              timeLabels={{h: '', m: '', s: ''}}
              showSeparator
            />
          }
        />
        <FlatList
          alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dataFlashSale}
          contentContainerStyle={globalStyles.contentListContainer}
          renderItem={({item}) => <FlashSaleItem item={item} />}
        />
      </SectionSecondaryComponent>
      {/* SERVICES */}
      <SectionSecondaryComponent
        style={[globalStyles.resetContainer, spacingTop(SPACING.space_16)]}>
        <HomeTitle title="NẠP THẺ & DỊCH VỤ" textButton="Xem thêm" />
        <CarouselComponent
          ref={refCarouselServices}
          styleContainer={styles.serviceBannerCarousel}
          data={bannerServices}
          height={(WIDTH - SPACING.space_16) / 4}
          width={WIDTH - SPACING.space_16}
          progress={progressServices}
          onPressPagination={onPressPaginationServices}
          stylePaginationContainer={styles.paginationServiceContainer}
        />
      </SectionSecondaryComponent>
    </ContainerComponent>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  searchHeaderContainer: {
    position: 'absolute',
    left: SPACING.space_8,
    right: SPACING.space_8,
  },
  inputContainer: {
    marginRight: SPACING.space_8,
    ...globalStyles.flexOne,
    ...globalStyles.inputSecondContainer,
  },
  typePageContainer: {
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: BORDER_RADIUS.radius_8,
    minHeight: SPACING.space_56,
    marginTop: -SPACING.space_16,
    marginBottom: SPACING.space_16,
    marginHorizontal: SPACING.space_8,
    ...SHADOW.primary,
  },
  contentMarketList: {
    paddingLeft: SPACING.space_8,
    paddingRight: -SPACING.space_16,
  },

  lineListContainer: {
    borderRadius: BORDER_RADIUS.radius_4,
    height: SPACING.space_4,
    width: SPACING.space_32,
    backgroundColor: COLORS.primaryGreyHex,
    alignSelf: 'center',
  },
  contentLineList: {
    borderRadius: BORDER_RADIUS.radius_4,
    height: '100%',
    width: '30%',
    backgroundColor: COLORS.primaryOrangeHex,
  },
  outStandingContainer: {
    marginTop: SPACING.space_24,
    gap: SPACING.space_8,
    paddingHorizontal: SPACING.space_8,
  },
  serviceBannerCarousel: {
    paddingHorizontal: SPACING.space_8,
    alignSelf: 'center',
  },
  paginationServiceContainer: {
    bottom: SPACING.space_8,
  },
});
