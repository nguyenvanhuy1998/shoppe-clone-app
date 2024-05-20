import React from 'react';
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {ImageComponent} from '../../../components';
import {WIDTH} from '../../../constants';

interface Props {
  uri: string;
  width?: number;
  height?: number;
  style?: StyleProp<ImageStyle>;
  onPress?: () => void;
}
const ProductImage = ({
  uri,
  width = WIDTH,
  height = WIDTH,
  onPress,
  style,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageComponent
        source={{
          uri,
        }}
        resizeMode="cover"
        style={[
          {
            width,
            height,
          },
          style,
        ]}
      />
    </TouchableOpacity>
  );
};

export default ProductImage;
