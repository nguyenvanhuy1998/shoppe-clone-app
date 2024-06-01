import React from 'react';
import {View} from 'react-native';
import {Container} from '../../../components';
import {globalStyles} from '../../../styles';
import {ratingStars} from '../data/ratingStars';
import ActionAsideFilter from './ActionAsideFilter';
import ChildrenSection from './ChildrenSection';
import HeadingAsideFilter from './HeadingAsideFilter';
import PriceRange from './PriceRange';
import SectionAsideFilter from './SectionAsideFilter';
import {useQuery} from '@tanstack/react-query';
import categoryApi from '../../../apis/category.api';

const AsideFilter = () => {
  const {data} = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategories();
    },
  });
  return (
    <View style={globalStyles.flexOne}>
      <HeadingAsideFilter />
      <Container type="onlyScrollView">
        <SectionAsideFilter
          title="Tất Cả Danh Mục"
          children={<ChildrenSection data={data?.data.data || []} />}
        />
        <SectionAsideFilter title="Khoảng Giá (đ)" children={<PriceRange />} />
        <SectionAsideFilter
          title="Đánh Giá"
          children={<ChildrenSection data={ratingStars} />}
        />
      </Container>
      <ActionAsideFilter />
    </View>
  );
};

export default AsideFilter;
