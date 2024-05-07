import {ImageSourcePropType} from 'react-native';
import {images} from '../../../constants';

export interface BannerProps {
  id: string;
  image: ImageSourcePropType;
}
export const bannerData: BannerProps[] = [
  {
    id: '1',
    image: images.banner01,
  },
  {
    id: '2',
    image: images.banner02,
  },
  {
    id: '3',
    image: images.banner03,
  },
  {
    id: '4',
    image: images.banner04,
  },
  {
    id: '5',
    image: images.banner05,
  },
];
