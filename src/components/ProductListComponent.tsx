import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {COLORS} from '../constants';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';
import {MainNavigatorParamList} from '../navigator/MainNavigator';
import {Product, ProductListConfig} from '../types/product.type';
import ProductComponent from './ProductComponent';

interface Props {
  filters?: ProductListConfig;
  ListHeaderComponent?: ReactElement;
  setFilters?: React.Dispatch<React.SetStateAction<ProductListConfig>>;
}
type ProductListComponentNavigationProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'ProductDetail'
>;
const ProductListComponent = ({filters, ListHeaderComponent}: Props) => {
  const navigation = useNavigation<ProductListComponentNavigationProp>();
  const {data, isRefreshing, onRefresh, onEndReached} = useInfiniteScroll({
    key: 'products',
    limit: 20,
    filters,
  });
  const handleChangeProductDetailScreen = (product: Product) => {
    navigation.navigate('ProductDetail', {
      id: product._id,
    });
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      initialNumToRender={10}
      data={data}
      renderItem={({item}) => (
        <ProductComponent
          product={item}
          onPress={() => handleChangeProductDetailScreen(item)}
        />
      )}
      onEndReached={onEndReached}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          tintColor={COLORS.primaryOrangeHex}
        />
      }
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default ProductListComponent;
