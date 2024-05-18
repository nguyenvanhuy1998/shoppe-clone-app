import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';

type ProductDetailScreenRouteProp = RouteProp<
  MainNavigatorParamList,
  'ProductDetail'
>;
const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();
  const {product} = route.params;
  return (
    <View>
      <Text>ProductDetailScreen</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
