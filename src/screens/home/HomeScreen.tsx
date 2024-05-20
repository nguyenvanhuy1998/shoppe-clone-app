import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Scan} from '../../assets/svg';
import {
  ButtonIconWithBadge,
  ButtonSecondaryComponent,
  CarouselComponent,
  FocusAwareStatusBar,
  Ionicons,
  LineVerticalComponent,
  ProductComponent,
  RowComponent,
  SectionSecondaryComponent,
  TextComponent,
} from '../../components';
import {
  BORDER_RADIUS,
  COLORS,
  images,
  OS,
  SHADOW,
  SPACING,
  WIDTH,
} from '../../constants';
import {useCarousel} from '../../hooks';
import {useInfiniteScroll} from '../../hooks/useInfiniteScroll';
import {HomeNavigatorParamList} from '../../navigator/HomeNavigator';
import {globalStyles} from '../../styles';
import {Product, ProductListConfig} from '../../types/product.type';
import {
  gapNumber,
  spacingBottom,
  spacingLeft,
  spacingTop,
} from '../../utils/spacing';
import {
  FlashSaleItem,
  HomeTitle,
  LiveItem,
  MarketItem,
  OutStanding,
  ServiceItem,
  TypePay,
} from './components';
import {bannerData, bannerServices} from './data/banner';
import {dataFlashSale} from './data/flashsale';
import {liveData} from './data/live';
import {marketData} from './data/market';
import {services} from './data/services';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'Home'
>;
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [filters, setFilters] = useState<ProductListConfig>({
    sort_by: 'price',
    order: 'desc',
  });
  const insets = useSafeAreaInsets();
  const {
    refCarousel: refCarouselBanner,
    progress: progressBanner,
    onPressPagination: onPressPaginationBanner,
  } = useCarousel();
  console.log(progressBanner, 'progressBanner');
  const {
    refCarousel: refCarouselServices,
    progress: progressServices,
    onPressPagination: onPressPaginationServices,
  } = useCarousel();
  const {data, isRefreshing, onRefresh, onEndReached} = useInfiniteScroll({
    key: 'products',
    filters,
  });
  const handleChangeProductDetailScreen = (product: Product) => {
    navigation.navigate('ProductDetail', {
      id: product._id,
    });
  };
  const renderHeaderList = () => {
    return (
      <>
        {/* Header */}
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
                globalStyles.header,
                {
                  top: OS.isIOS ? insets.top : SPACING.space_32,
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
            contentContainerStyle={[
              globalStyles.horizontalSpacing8,
              gapNumber(8),
            ]}
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
                until={7200}
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
            contentContainerStyle={[
              globalStyles.horizontalSpacing8,
              gapNumber(8),
            ]}
            renderItem={({item}) => <FlashSaleItem item={item} />}
          />
        </SectionSecondaryComponent>
        {/* SERVICES */}
        <SectionSecondaryComponent
          style={[globalStyles.resetContainer, spacingTop(SPACING.space_16)]}>
          <HomeTitle title="NẠP THẺ & DỊCH VỤ" textButton="Xem thêm" />
          <CarouselComponent
            ref={refCarouselServices}
            styleContainer={[styles.serviceBannerCarousel, spacingBottom(8)]}
            data={bannerServices}
            height={(WIDTH - SPACING.space_16) / 4}
            width={WIDTH - SPACING.space_16}
            progress={progressServices}
            onPressPagination={onPressPaginationServices}
          />
          <FlatList
            alwaysBounceHorizontal={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={services}
            contentContainerStyle={[
              globalStyles.horizontalSpacing8,
              gapNumber(8),
            ]}
            renderItem={({item}) => <ServiceItem item={item} />}
          />
        </SectionSecondaryComponent>
        {/* SUGGEST */}
        <SectionSecondaryComponent
          style={[globalStyles.resetContainer, spacingTop(SPACING.space_16)]}>
          <HomeTitle title="GỢI Ý HÔM NAY" />
        </SectionSecondaryComponent>
      </>
    );
  };
  return (
    <>
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.primaryWhiteHex}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        initialNumToRender={10}
        data={data}
        renderItem={({item}) => (
          <ProductComponent
            product={item}
            onPress={() => handleChangeProductDetailScreen(item)}
          />
        )}
        onEndReached={onEndReached}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={COLORS.primaryOrangeHex}
          />
        }
        ListHeaderComponent={renderHeaderList}
      />
    </>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
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
  listEmptyComponent: {
    flexDirection: 'row',
  },

  item: {
    height: 100,
    width: '100%',
  },
  contentContainerStyle: {
    marginTop: 10,
    padding: 10,
  },
});
