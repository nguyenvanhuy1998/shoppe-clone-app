import React, {forwardRef, ReactNode, Ref} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {BannerProps} from '../screens/home/data/banner';
import {SharedValue} from 'react-native-reanimated';
import {BannerItem} from '../screens/home/components';
import {COLORS, SPACING} from '../constants';
interface Props {
  ref?: Ref<ICarouselInstance>;
  width: number;
  height: number;
  data: BannerProps[];
  progress: SharedValue<number>;
  onPressPagination?: (index: number) => void;
  children?: ReactNode;
  styleContainer?: StyleProp<ViewStyle>;
  stylePaginationContainer?: StyleProp<ViewStyle>;
}
const CarouselComponent = forwardRef<ICarouselInstance, Props>(
  (
    {
      width,
      height,
      data,
      progress,
      onPressPagination,
      children,
      styleContainer,
      stylePaginationContainer,
    },
    ref,
  ) => {
    return (
      <View>
        <Carousel
          style={styleContainer}
          ref={ref}
          loop
          width={width}
          height={height}
          autoPlay={true}
          autoPlayInterval={3000}
          data={data}
          onConfigurePanGesture={gestureChain =>
            gestureChain.activeOffsetX([-10, 10])
          }
          scrollAnimationDuration={1000}
          onProgressChange={progress}
          renderItem={({item}) => <BannerItem item={item} />}
        />
        <Pagination.Basic
          progress={progress}
          data={data}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          containerStyle={[
            styles.paginationContainer,
            stylePaginationContainer,
          ]}
          onPress={onPressPagination}
        />
        {children}
      </View>
    );
  },
);

export default CarouselComponent;

const styles = StyleSheet.create({
  dot: {
    width: SPACING.space_8,
    height: SPACING.space_8,
    borderRadius: 99,
    backgroundColor: COLORS.secondaryGreyHex,
  },
  activeDot: {
    backgroundColor: COLORS.primaryOrangeHex,
  },
  paginationContainer: {
    gap: SPACING.space_8,
    position: 'absolute',
    alignItems: 'center',
    bottom: SPACING.space_16,
  },
});
