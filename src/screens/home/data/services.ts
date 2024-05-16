import {COLORS} from '../../../constants';

export interface ServiceProps {
  id: string;
  title: string;
  cost: number;
  price: number;
  isNewService?: boolean;
  desc: string;
  icon: string;
  color: string;
}
export const services: ServiceProps[] = [
  {
    id: '1',
    title: 'Nạp Data 3G/4G',
    cost: 1000,
    price: 100,
    isNewService: true,
    desc: 'Mobifone 50 MB, 2 ngày',
    icon: 'wifi',
    color: COLORS.primaryGreenHex,
  },
  {
    id: '2',
    title: 'Gói Data 3G/4G',
    cost: 5000,
    price: 2500,
    isNewService: true,
    desc: 'Viettel 500MB, 1 ngày',
    icon: 'wifi',
    color: COLORS.primaryOrangeHex,
  },
  {
    id: '3',
    title: 'Mã Ưu Đãi',
    cost: 100000,
    price: 1000,
    desc: '[E-voucher] Mã ưu đãi giảm 15% (Tối đa 50k) x 2 chuyến beBike và beCar trên dứng dụng Be',
    icon: 'cruelty-free',
    color: COLORS.primaryYellowHex,
  },
  {
    id: '4',
    title: 'Nạp Điện Thoại',
    cost: 10000,
    price: 9100,
    desc: 'Viettel 10.000',
    icon: 'phone-android',
    color: COLORS.primaryGreenHex,
  },
  {
    id: '5',
    title: 'Mua mã thẻ',
    cost: 10000,
    price: 9100,
    desc: 'Viettel 10.000',
    icon: 'phone-android',
    color: COLORS.primaryGreenHex,
  },
];
