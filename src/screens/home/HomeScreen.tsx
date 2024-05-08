import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  ButtonSecondaryComponent,
  ContainerComponent,
  DotTextComponent,
  Ionicons,
  LineVerticalComponent,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {COLORS, SPACING, WIDTH} from '../../constants';
import {globalStyles} from '../../styles';
import {BannerItem, TypePay} from './components';
import {bannerData} from './data/banner';
import {Scan} from '../../assets/svg';

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
        {/* Banner */}
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
        {/* Search  */}
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
        {/* Pagination  */}
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
        {/* Type Pay */}

        <RowComponent>
          <ButtonSecondaryComponent type="icon" childrenIcon={<Scan />} />
          <LineVerticalComponent />
          <TypePay />
          <LineVerticalComponent />
          <TypePay />
        </RowComponent>
      </View>
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
    marginTop: -SPACING.space_32,
  },
});
