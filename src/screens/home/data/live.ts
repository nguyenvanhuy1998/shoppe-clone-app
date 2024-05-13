import {ImageSourcePropType} from 'react-native';
import {images} from '../../../constants';

export interface LiveProps {
  id: string;
  title: string;
  live: number;
  image: ImageSourcePropType;
  coin: number;
}
export const liveData: LiveProps[] = [
  {
    id: '1',
    title: 'Voucher mới 30-80k',
    live: 27,
    image: images.live01,
    coin: 0.05,
  },
  {
    id: '2',
    title: 'Dép xinh ở đây',
    live: 24,
    image: images.live02,
    coin: 0.05,
  },
  {
    id: '3',
    title: 'Hàng mới giá shock-giảm 15%',
    live: 25,
    image: images.live03,
    coin: 0.06,
  },
  {
    id: '4',
    title: 'SĂN ĐỒ XINH GIÁ SIÊU HỜI',
    live: 72,
    image: images.live04,
    coin: 0.07,
  },
];
