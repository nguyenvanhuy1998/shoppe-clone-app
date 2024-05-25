import React, {forwardRef, LegacyRef, memo} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ImageComponent, TextComponent} from '../../../components';
import {BORDER_RADIUS, COLORS, SPACING, WIDTH} from '../../../constants';
import {globalStyles} from '../../../styles';
import {spacingBottom, spacingLeft} from '../../../utils';
import {gapNumber} from '../../../utils/spacing';

interface Props {
  quantity?: number;
  images: string[];
  activeIndexImage: number;
  onPressActiveIndexImage: (index: number) => void;
}
const ProductListAvailable = forwardRef(
  (
    {quantity = 0, images, activeIndexImage, onPressActiveIndexImage}: Props,
    ref?: LegacyRef<FlatList<string>>,
  ) => {
    const renderItem = ({item, index}: {item: string; index: number}) => {
      const isActive = activeIndexImage === index;
      return (
        <TouchableOpacity
          onPress={() => onPressActiveIndexImage(index)}
          style={[
            styles.itemContainer,
            {
              borderColor: isActive
                ? COLORS.primaryRedHex
                : COLORS.thirdGreyHex,
            },
          ]}>
          <ImageComponent
            style={styles.imageItem}
            source={{
              uri: item,
            }}
            width={'100%'}
            height={'100%'}
          />
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.container}>
        <TextComponent
          text={`${quantity} phân loại có sẵn`}
          style={[spacingLeft(8), spacingBottom(8)]}
        />
        <FlatList
          ref={ref}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={images}
          contentContainerStyle={[
            gapNumber(8),
            globalStyles.horizontalSpacing8,
          ]}
          renderItem={renderItem}
        />
      </View>
    );
  },
);

export default ProductListAvailable;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_8,
    paddingVertical: SPACING.space_8,
  },
  itemContainer: {
    width: WIDTH / 5,
    height: WIDTH / 5,
    borderWidth: 0.5,
    borderColor: COLORS.thirdGreyHex,
    borderRadius: BORDER_RADIUS.radius_4,
  },
  imageItem: {
    borderRadius: BORDER_RADIUS.radius_4,
  },
});
