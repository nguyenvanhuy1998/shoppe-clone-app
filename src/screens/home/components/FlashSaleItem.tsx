import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlashSale} from '../data/flashsale';
import {
  ImageComponent,
  MaterialIcons,
  RowComponent,
  TextComponent,
} from '../../../components';
interface Props {
  item: FlashSale;
  onPress?: () => void;
}
const FlashSaleItem = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageComponent source={item.image} width={'100%'} height={200} />
      <TextComponent text={`₫${item.price}`} />
      <RowComponent>
        <View />
        <TextComponent text={`ĐÃ BÁN ${item.quantitySold}`} />
      </RowComponent>
      <View style={styles.iconContainer}>
        <MaterialIcons name="local-mall" />
      </View>
      <RowComponent style={styles.discountContainer}>
        <MaterialIcons name="flash-on" />
        <TextComponent text={`-${item.discount}%`} />
      </RowComponent>
    </TouchableOpacity>
  );
};

export default FlashSaleItem;

const styles = StyleSheet.create({
  container: {},
  iconContainer: {},
  discountContainer: {},
});
