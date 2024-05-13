import {ImageSourcePropType} from 'react-native';
import {images} from '../../../constants';

export interface LiveProps {
  id: string;
  title: string;
  live: number;
  image: ImageSourcePropType;
}
export const liveData: LiveProps[] = [
  {
    id: '1',
    title: 'Voucher mới 30-80k',
    live: 27,
    image: images.live01,
  },
  {
    id: '2',
    title: 'Dép xinh ở đây',
    live: 24,
    image: images.live02,
  },
  {
    id: '3',
    title: 'Hàng mới giá shock-giảm 15%',
    live: 25,
    image: images.live03,
  },
  {
    id: '4',
    title: 'SĂN ĐỒ XINH GIÁ SIÊU HỜI',
    live: 72,
    image: images.live04,
  },
];
