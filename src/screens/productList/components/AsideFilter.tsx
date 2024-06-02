import {useQuery} from '@tanstack/react-query';
import React, {useState} from 'react';
import {View} from 'react-native';
import categoryApi from '../../../apis/category.api';
import {Container} from '../../../components';
import {globalStyles} from '../../../styles';
import ActionAsideFilter from './ActionAsideFilter';
import CategoryItem from './CategoryItem';
import HeadingAsideFilter from './HeadingAsideFilter';
import SectionAsideFilter from './SectionAsideFilter';
import {ProductListConfig} from '../../../types/product.type';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

export type AsideFilterProps = Pick<ProductListConfig, 'category'>;
const AsideFilter = (props: DrawerContentComponentProps) => {
  const [asideFilter, setAsideFilter] = useState<AsideFilterProps>({
    category: '',
  });
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
          children={
            <CategoryItem
              asideFilters={asideFilter}
              setAsideFilter={setAsideFilter}
              data={data?.data.data || []}
            />
          }
        />
        {/* <SectionAsideFilter title="Khoảng Giá (đ)" children={<PriceRange />} />
        <SectionAsideFilter
          title="Đánh Giá"
          children={<CategoryItem data={ratingStars} />}
        /> */}
      </Container>
      <ActionAsideFilter
        propsDrawerNavigation={props}
        asideFilter={asideFilter}
      />
    </View>
  );
};

export default AsideFilter;
