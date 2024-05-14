import React, {useRef} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import CountDown from 'react-native-countdown-component';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Scan} from '../../assets/svg';
import {
  ButtonSecondaryComponent,
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
import {globalStyles} from '../../styles';
import {gapNumber} from '../../utils/spacing';
import {
  BannerItem,
  FlashSaleItem,
  HomeTitle,
  LiveItem,
  MarketItem,
  OutStanding,
  TypePay,
} from './components';
import {bannerData} from './data/banner';
import {dataFlashSale} from './data/flashsale';
import {liveData} from './data/live';
import {marketData} from './data/market';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const refCarousel = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const time = 7200;
  const onPressPagination = (index: number) => {
    refCarousel.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <ContainerComponent barStyle="light-content" type="noSafeArea">
      {/* Header Home */}
      <View>
        <Carousel
          ref={refCarousel}
          loop
          width={WIDTH}
          height={WIDTH / 2}
          autoPlay={true}
          autoPlayInterval={3000}
          data={bannerData}
          onConfigurePanGesture={gestureChain =>
            gestureChain.activeOffsetX([-10, 10])
          }
          scrollAnimationDuration={1000}
          onProgressChange={progress}
          renderItem={({item}) => <BannerItem item={item} />}
        />
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
            <SpaceComponent width={SPACING.space_8} />
            <TextComponent
              text="Search..."
              color={COLORS.primaryOrangeHex}
              style={[globalStyles.flexOne]}
            />
            <Ionicons
              name="camera-outline"
              color={COLORS.secondaryGreyHex}
              onPress={() => {}}
            />
          </RowComponent>
          <ButtonSecondaryComponent
            type="icon"
            onPress={() => {}}
            childrenIcon={
              <>
                <Ionicons
                  name="cart-outline"
                  color={COLORS.primaryWhiteHex}
                  size="extraLarge"
                />
                <DotTextComponent text="1" />
              </>
            }
          />
          <SpaceComponent width={SPACING.space_8} />
          <ButtonSecondaryComponent
            type="icon"
            onPress={() => {}}
            childrenIcon={
              <>
                <Ionicons
                  name="chatbubbles-outline"
                  color={COLORS.primaryWhiteHex}
                  size="extraLarge"
                />
                <DotTextComponent text="22" />
              </>
            }
          />
        </RowComponent>
        <Pagination.Basic
          progress={progress}
          data={bannerData}
          dotStyle={globalStyles.dot}
          activeDotStyle={{
            backgroundColor: COLORS.primaryOrangeHex,
          }}
          containerStyle={styles.paginationContainer}
          onPress={onPressPagination}
        />
      </View>
      {/* Market Shopee */}
      <SectionSecondaryComponent style={styles.categoryListContainer}>
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
      <SectionSecondaryComponent style={styles.sectionContainer}>
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
      <SectionSecondaryComponent style={styles.sectionContainer}>
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
  paginationContainer: {
    gap: SPACING.space_8,
    position: 'absolute',
    alignItems: 'center',
    bottom: SPACING.space_16,
  },
  categoryListContainer: {
    backgroundColor: COLORS.primaryWhiteHex,
    paddingHorizontal: 0,
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
  contentFlatListMarket: {
    gap: 16,
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
  sectionContainer: {
    backgroundColor: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_16,
    paddingHorizontal: 0,
  },
});
