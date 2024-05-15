import {useRef} from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {ICarouselInstance} from 'react-native-reanimated-carousel';

const useCarousel = () => {
  const refCarousel = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const onPressPagination = (index: number) => {
    refCarousel.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };
  return {refCarousel, progress, onPressPagination};
};
export default useCarousel;
