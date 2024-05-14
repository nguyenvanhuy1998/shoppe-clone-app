import {ImageSourcePropType} from 'react-native';
import {images} from '../../../constants';

export interface FlashSale {
  id: string;
  name: string;
  image: ImageSourcePropType;
  price: number;
  discount: number;
  quantitySold: number;
}
export const dataFlashSale: FlashSale[] = [
  {
    id: '1',
    name: 'Sữa rửa mặt dưỡng ẩm da innisfree Green Tea Amino Cleansing Foam 150g',
    image: images.flashSale01,
    price: 218400,
    discount: 22,
    quantitySold: 10,
  },
  {
    id: '2',
    name: 'Kem dưỡng ẩm trà xanh innisfree Green Tea Seed Hyaluronic Cream 50ml',
    image: images.flashSale02,
    price: 582000,
    discount: 3,
    quantitySold: 41,
  },
  {
    id: '3',
    name: 'Gel dưỡng ẩm sáng da từ hoa anh đào đảo Jeju innisfree Cherry Blossom Jelly Cream 50ml',
    image: images.flashSale03,
    price: 390000,
    discount: 23,
    quantitySold: 24,
  },
  {
    id: '4',
    name: 'Sữa dưỡng ẩm từ trà xanh đảo Jeju Innisfree Green Tea hyaluronic lotion 170ml (NEW 2023)',
    image: images.flashSale04,
    price: 365500,
    discount: 54,
    quantitySold: 8,
  },
];
