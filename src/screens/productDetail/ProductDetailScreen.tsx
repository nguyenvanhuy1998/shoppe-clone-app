import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import React, {useCallback, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import productApi from '../../apis/product.api';
import {BannerList, Container} from '../../components';
import {WIDTH} from '../../constants';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';
import {
  BuyNow,
  CountImage,
  HeaderProductDetail,
  InfoProductDetail,
  ProductDesc,
} from './components';

type ProductDetailScreenNavigationProp = RouteProp<
  MainNavigatorParamList,
  'ProductDetail'
>;
const ProductDetailScreen = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute<ProductDetailScreenNavigationProp>();
  const navigation = useNavigation();
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
  const handleBack = () => {
    navigation.goBack();
  };

  if (!product) {
    return null;
  }
  return (
    <>
      <Container
        type="noSafeArea"
        style={{
          paddingBottom: insets.bottom * 2,
        }}>
        <BannerList
          ref={refListImage}
          loop={false}
          width={WIDTH}
          height={WIDTH}
          onSnapToItem={handleSnapToItem}
          data={product.images}
        />
        <HeaderProductDetail onPressBack={handleBack} />
        <CountImage
          index={currenIndexImage + 1}
          length={product.images.length}
        />
        <InfoProductDetail
          ref={refListAvailable}
          product={product}
          activeIndexImage={activeIndexImage}
          onPressActiveIndexImage={handleActiveIndexImage}
        />
        <ProductDesc description={product.description} />
      </Container>
      <BuyNow />
    </>
  );
};

export default ProductDetailScreen;
