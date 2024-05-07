import React from 'react';
import {StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  ButtonSecondaryComponent,
  ContainerComponent,
  DotTextComponent,
  Ionicons,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {COLORS, SPACING, WIDTH} from '../../constants';
import {globalStyles} from '../../styles';
import {BannerItem} from './components';
import {bannerData} from './data/banner';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ContainerComponent barStyle="light-content" type="noSafeArea">
      {/* Banner */}
      <Carousel
        loop
        width={WIDTH}
        autoPlay={true}
        data={bannerData}
        scrollAnimationDuration={1000}
        autoPlayInterval={3000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item}) => <BannerItem item={item} />}
      />
      {/* Search Header */}
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
      {/* Pagination Banner */}
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
});
