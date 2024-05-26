import {ColorValue} from 'react-native';
import {COLORS} from '../../../constants';

export interface CategoryProps {
  id: string;
  image: string;
  title: string;
  colorIcon: ColorValue;
}

export const categories: CategoryProps[] = [
  {
    id: '1',
    image: 'play',
    title: 'Shopee Video Giảm 50%',
    colorIcon: COLORS.primaryOrangeHex,
  },
  {
    id: '2',
    image: 'fast-food',
    title: 'ShopeeFood Giảm 50%',
    colorIcon: COLORS.primaryYellowHex,
  },
  {
    id: '3',
    image: 'bonfire',
    title: 'Voucher Giảm Đến 1 Triệu',
    colorIcon: COLORS.primaryGreenHex,
  },
  {
    id: '4',
    image: 'bag-check',
    title: 'Shopee Choice Combo 19.000Đ',
    colorIcon: COLORS.primaryBlueHex,
  },
  {
    id: '5',
    image: 'shirt',
    title: 'Shopee Thời trang',
    colorIcon: COLORS.primaryGreenHex,
  },
  {
    id: '6',
    image: 'crop',
    title: 'Mã Giảm Giá',
    colorIcon: COLORS.primaryOrangeHex,
  },
  {
    id: '7',
    image: 'basket',
    title: 'Hàng Hiệu Outlet',
    colorIcon: COLORS.primaryGreenHex,
  },
  {
    id: '8',
    image: 'home',
    title: 'Shopee Home',
    colorIcon: COLORS.primaryBlueHex,
  },
  {
    id: '9',
    image: 'diamond',
    title: 'Shopee Premium',
    colorIcon: COLORS.primaryOrangeHex,
  },
  {
    id: '10',
    image: 'logo-bitcoin',
    title: '5 phút lấy 1,000 Xu',
    colorIcon: COLORS.primaryYellowHex,
  },
  {
    id: '11',
    image: 'play',
    title: 'Shopee Live Siêu Rẻ',
    colorIcon: COLORS.primaryOrangeHex,
  },
  {
    id: '12',
    image: 'fast-food',
    title: 'ShopeeFood Mall',
    colorIcon: COLORS.thirdGreyHex,
  },
  {
    id: '13',
    image: 'bonfire',
    title: 'Miễn Phí Ship - Có Shopee',
    colorIcon: COLORS.primaryOrangeHex,
  },
  {
    id: '14',
    image: 'bag-check',
    title: 'Khách Hàng Thân Thiết',
    colorIcon: COLORS.primaryGreenHex,
  },
  {
    id: '15',
    image: 'shirt',
    title: 'Shopee Làm Đẹp',
    colorIcon: COLORS.primaryOrangeHex,
  },
  {
    id: '16',
    image: 'crop',
    title: 'Shopee Siêu Rẻ',
    colorIcon: COLORS.primaryDangerousHex,
  },
  {
    id: '17',
    image: 'basket',
    title: 'Hàng Quốc Tế',
    colorIcon: COLORS.primaryOrangeHex,
  },
  {
    id: '18',
    image: 'home',
    title: 'Đấu Giá Rẻ Vô Địch',
    colorIcon: COLORS.primaryRedHex,
  },
  {
    id: '19',
    image: 'diamond',
    title: 'Ưu Đãi Đối Tác',
    colorIcon: COLORS.primaryOrangeHex,
  },
  {
    id: '20',
    image: 'logo-bitcoin',
    title: 'Đời Sống Giảm Đến 50%',
    colorIcon: COLORS.primaryOrangeHex,
  },
];
