import React, {forwardRef, Ref} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {SharedValue} from 'react-native-reanimated';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {images} from '../constants';
import ImageComponent from './ImageComponent';

interface Props {
  ref?: Ref<ICarouselInstance>;
  width: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  loop?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  data: string[];
  scrollAnimationDuration?: number;
  onProgressChange?:
    | ((offsetProgress: number, absoluteProgress: number) => void)
    | SharedValue<number>;
}
const BannerList = forwardRef<ICarouselInstance, Props>(
  (
    {
      data,
      width,
      height,
      style,
      loop,
      autoPlay,
      autoPlayInterval = 500,
      scrollAnimationDuration,
      onProgressChange,
    },
    ref,
  ) => {
    return (
      <View
        style={{
          height,
          width,
        }}>
        <Carousel
          ref={ref}
          data={data}
          width={width}
          height={height}
          style={style}
          loop={loop}
          autoPlay={autoPlay}
          autoPlayInterval={autoPlayInterval}
          onConfigurePanGesture={gestureChain =>
            gestureChain.activeOffsetX([-10, 10])
          }
          scrollAnimationDuration={scrollAnimationDuration}
          onProgressChange={onProgressChange}
          renderItem={({item}) => (
            <ImageComponent
              source={{
                uri: item,
              }}
              width={'100%'}
              height={'100%'}
            />
          )}
        />
      </View>
    );
  },
);

export default BannerList;
