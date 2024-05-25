import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {BORDER_RADIUS, COLORS, WIDTH} from '../../../constants';
import {ImageComponent} from '../../../components';

interface Props {
  item: string;
  index: number;
  activeIndexImage: number;
  onPressActiveIndexImage: (index: number) => void;
}
const ImageAvailable = ({
  item,
  index,
  activeIndexImage,
  onPressActiveIndexImage,
}: Props) => {
  const isActive = activeIndexImage === index;
  return (
    <TouchableOpacity
      onPress={() => onPressActiveIndexImage(index)}
      style={[
        styles.itemContainer,
        {
          borderColor: isActive ? COLORS.primaryRedHex : COLORS.thirdGreyHex,
        },
      ]}>
      <ImageComponent
        style={styles.imageItem}
        source={{
          uri: item,
        }}
        width={'100%'}
        height={'100%'}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default ImageAvailable;

const styles = StyleSheet.create({
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
