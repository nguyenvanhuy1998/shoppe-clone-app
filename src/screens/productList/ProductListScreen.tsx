import React from 'react';
import {Container, ProductListComponent} from '../../components';
import {HeaderProductList} from './components';

const ProductListScreen = () => {
  return (
    <Container type="noScrollView">
      <HeaderProductList />
      <ProductListComponent />
    </Container>
  );
};

export default ProductListScreen;
