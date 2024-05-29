import React from 'react';
import {View} from 'react-native';
import {Button, Container, Row} from '../../../components';
import {globalStyles} from '../../../styles';
import {categories} from '../data/categories';
import ChildrenSection from './ChildrenSection';
import HeadingAsideFilter from './HeadingAsideFilter';
import PriceRange from './PriceRange';
import SectionAsideFilter from './SectionAsideFilter';
import {ratingStars} from '../data/ratingStars';
import ActionAsideFilter from './ActionAsideFilter';

const AsideFilter = () => {
  return (
    <View style={globalStyles.flexOne}>
      <HeadingAsideFilter />
      <Container type="onlyScrollView">
        <SectionAsideFilter
          title="Tất Cả Danh Mục"
          children={<ChildrenSection data={categories} />}
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
