import {yupResolver} from '@hookform/resolvers/yup';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {useQuery} from '@tanstack/react-query';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import categoryApi from '../../../apis/category.api';
import {Container, Ionicons} from '../../../components';
import {COLORS} from '../../../constants';
import {useAppDispatch} from '../../../redux/store';
import {globalStyles} from '../../../styles';
import {schema} from '../../../utils';
import ActionAsideFilter from './ActionAsideFilter';
import HeadingAsideFilter from './HeadingAsideFilter';
import PriceRange from './PriceRange';
import SectionAsideFilter from './SectionAsideFilter';
import {asideFilterChange} from '../filtersSlice';
import {Alert} from 'react-native';
import {AuthSchema} from '../../../utils/rules';
import AsideFilterItem from './AsideFilterItem';
import {ratingStars} from '../data/ratingStars';

export type FormPriceRange = Pick<AuthSchema, 'price_min' | 'price_max'>;
const priceSchema = schema.pick(['price_min', 'price_max']);

const AsideFilter = ({navigation}: DrawerContentComponentProps) => {
  const [category, setCategory] = useState<undefined | string>();
  const [star, setStar] = useState<undefined | string>();
  const dispatch = useAppDispatch();
  const {control, handleSubmit, trigger, resetField} = useForm<FormPriceRange>({
    defaultValues: {
      price_min: '',
      price_max: '',
    },
    resolver: yupResolver(priceSchema),
    shouldFocusError: false,
  });
  const {data} = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategories();
    },
  });
  const handleActiveAllCategory = () => {
    setCategory(undefined);
  };
  const onSubmit = handleSubmit(
    ({price_min, price_max}) => {
      dispatch(
        asideFilterChange({
          category,
          price_min,
          price_max,
          rating_filter: star,
        }),
      );
      navigation.closeDrawer();
    },
    err => {
      dispatch(
        asideFilterChange({
          category,
          rating_filter: star,
        }),
      );
      navigation.closeDrawer();
      Alert.alert('Thông báo', err.price_min?.message);
    },
  );
  const handleRemoveAll = () => {
    setCategory(undefined);
    setStar(undefined);
    resetField('price_min');
    resetField('price_max');
    dispatch(
      asideFilterChange({
        category: undefined,
        rating_filter: undefined,
        price_min: undefined,
        price_max: undefined,
      }),
    );
    navigation.toggleDrawer();
  };
  return (
    <View style={globalStyles.flexOne}>
      <HeadingAsideFilter />
      <Container type="onlyScrollView">
        <SectionAsideFilter
          onPress={handleActiveAllCategory}
          title="Tất Cả Danh Mục"
          color={!category ? COLORS.primaryOrangeHex : COLORS.primaryBlackHex}
          icon={
            <Ionicons
              name="menu"
              color={
                !category ? COLORS.primaryOrangeHex : COLORS.primaryBlackHex
              }
            />
          }
          children={
            <AsideFilterItem
              asideFilter={category}
              setAsideFilter={setCategory}
              data={data?.data.data || []}
            />
          }
        />
        <SectionAsideFilter
          title="Khoảng Giá (đ)"
          children={<PriceRange control={control} trigger={trigger} />}
        />
        <SectionAsideFilter
          title="Đánh Giá"
          color={COLORS.primaryBlackHex}
          children={
            <AsideFilterItem
              asideFilter={star}
              setAsideFilter={setStar}
              data={ratingStars || []}
            />
          }
        />
      </Container>
      <ActionAsideFilter onRemoveAll={handleRemoveAll} onSubmit={onSubmit} />
    </View>
  );
};

export default AsideFilter;
