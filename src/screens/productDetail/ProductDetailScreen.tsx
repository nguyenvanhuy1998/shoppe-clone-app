import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import React from 'react';
import productApi from '../../apis/product.api';
import {BannerList, Container} from '../../components';
import {WIDTH} from '../../constants';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';
import {HeaderProductDetail} from './components';

type ProductDetailScreenRouteRop = RouteProp<
  MainNavigatorParamList,
  'ProductDetail'
>;
const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenRouteRop>();
  const navigation = useNavigation();
  const {id} = route.params;
  const {data} = useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getProductDetail(id),
  });
  const product = data?.data.data;
  if (!product) {
    return null;
  }
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <Container type="noSafeArea">
      <BannerList data={product.images} width={WIDTH} height={WIDTH} />
      <HeaderProductDetail onPressBack={handleBack} />
    </Container>
  );
};

export default ProductDetailScreen;
