import React from 'react';
import {
  DimensionValue,
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

interface Props {
  source: ImageSourcePropType;
  width?: DimensionValue;
  height?: DimensionValue;
  resizeMode?: ImageResizeMode;
  style?: StyleProp<ImageStyle>;
}
const ImageComponent = ({
  source,
  width,
  height,
  resizeMode = 'cover',
  style,
}: Props) => {
  return (
    <Image
      source={source}
      style={[
        {
          width,
          height,
        },
        style,
      ]}
      resizeMode={resizeMode}
    />
  );
};

export default ImageComponent;
