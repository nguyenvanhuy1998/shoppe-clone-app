import {RouteProp, useRoute} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import React, {useCallback, useRef, useState} from 'react';
import {ICarouselInstance, Pagination} from 'react-native-reanimated-carousel';
import productApi from '../../apis/product.api';
import {BannerList, Container} from '../../components';
import {WIDTH} from '../../constants';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';
import {CountImage, HeaderProductDetail} from './components';

type ProductDetailScreenNavigationProp = RouteProp<
  MainNavigatorParamList,
  'ProductDetail'
>;
const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenNavigationProp>();
  const {id} = route.params;
  const refListImage = useRef<ICarouselInstance>(null);
  const [currenIndexImage, setCurrenIndexImage] = useState(1);
  const {data} = useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getProductDetail(id),
  });
  const product = data?.data.data;

  const handleSnapToItem = useCallback((index: number) => {
    setCurrenIndexImage(index + 1);
  }, []);

  if (!product) {
    return null;
  }
  return (
    <Container type="noSafeArea">
      <BannerList
        ref={refListImage}
        loop={false}
        width={WIDTH}
        height={WIDTH}
        onSnapToItem={handleSnapToItem}
        data={product.images}
      />
      <HeaderProductDetail />
      <CountImage index={currenIndexImage} length={product.images.length} />
    </Container>
  );
};

export default ProductDetailScreen;
