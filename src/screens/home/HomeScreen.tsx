import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
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
import {BORDER_RADIUS, COLORS, SPACING, WIDTH} from '../../constants';
import {globalStyles} from '../../styles';
import {BannerItem, TypePay} from './components';
import {bannerData} from './data/banner';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const refCarousel = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
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
          <SpaceComponent width={SPACING.space_8} />
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
      {/* Category List */}
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
      </SectionSecondaryComponent>
    </ContainerComponent>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  searchHeaderContainer: {
    position: 'absolute',
    left: SPACING.space_16,
    right: SPACING.space_16,
  },
  inputContainer: {
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
    backgroundColor: COLORS.primaryOrangeHex,
    minHeight: 200,
  },
  typePageContainer: {
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: BORDER_RADIUS.radius_8,
    minHeight: SPACING.space_56,
    position: 'absolute',
    left: SPACING.space_16,
    right: SPACING.space_16,
    top: -SPACING.space_8,
  },
});
