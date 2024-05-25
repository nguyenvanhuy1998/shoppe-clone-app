import {RouteProp, useRoute} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import React, {useCallback, useRef, useState} from 'react';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import productApi from '../../apis/product.api';
import {BannerList, Container} from '../../components';
import {WIDTH} from '../../constants';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';
import {CountImage, HeaderProductDetail, InfoProductDetail} from './components';
import {FlatList} from 'react-native';

type ProductDetailScreenNavigationProp = RouteProp<
  MainNavigatorParamList,
  'ProductDetail'
>;
const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenNavigationProp>();
  const {id} = route.params;
  const refListImage = useRef<ICarouselInstance>(null);
  const refListAvailable = useRef<FlatList>(null);
  const [currenIndexImage, setCurrenIndexImage] = useState(0);
  const [activeIndexImage, setActiveIndexImage] = useState(0);

  const {data} = useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getProductDetail(id),
  });
  const product = data?.data.data;

  const handleSnapToItem = useCallback((index: number) => {
    setCurrenIndexImage(index);
    setActiveIndexImage(index);
    refListAvailable.current?.scrollToIndex({animated: true, index});
  }, []);
  const handleActiveIndexImage = (index: number) => {
    setActiveIndexImage(index);
    refListImage.current?.scrollTo({
      animated: true,
      index,
    });
  };

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
      <CountImage index={currenIndexImage + 1} length={product.images.length} />
      <InfoProductDetail
        ref={refListAvailable}
        product={product}
        activeIndexImage={activeIndexImage}
        onPressActiveIndexImage={handleActiveIndexImage}
      />
    </Container>
  );
};

export default ProductDetailScreen;
