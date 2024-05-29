import React from 'react';
import {View} from 'react-native';
import {Container} from '../../../components';
import {globalStyles} from '../../../styles';
import {categories} from '../data/categories';
import AllCategories from './AllCategories';
import HeadingAsideFilter from './HeadingAsideFilter';
import PriceRange from './PriceRange';
import SectionAsideFilter from './SectionAsideFilter';

const AsideFilter = () => {
  return (
    <View style={globalStyles.flexOne}>
      <HeadingAsideFilter />
      <Container type="onlyScrollView">
        <SectionAsideFilter
          title="Tất cả danh mục"
          children={<AllCategories data={categories} />}
        />
        <SectionAsideFilter title="Khoảng giá (đ)" children={<PriceRange />} />
      </Container>
    </View>
  );
};

export default AsideFilter;
