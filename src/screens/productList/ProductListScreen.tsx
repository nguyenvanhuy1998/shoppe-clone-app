import React, {useState} from 'react';
import {Container, ProductListComponent} from '../../components';
import {HeaderProductList} from './components';
import {ProductListConfig} from '../../types/product.type';

const ProductListScreen = () => {
  const [filters, setFilters] = useState<ProductListConfig>({
    sort_by: 'createdAt',
  });
  return (
    <Container type="noScrollView">
      <HeaderProductList filters={filters} setFilters={setFilters} />
      <ProductListComponent filters={filters} setFilters={setFilters} />
    </Container>
  );
};

export default ProductListScreen;
