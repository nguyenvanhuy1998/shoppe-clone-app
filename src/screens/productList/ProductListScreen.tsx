import React from 'react';
import {Container} from '../../components';
import {HeaderProductList} from './components';

const ProductListScreen = () => {
  return (
    <Container type="noScrollView">
      <HeaderProductList />
    </Container>
  );
};

export default ProductListScreen;
