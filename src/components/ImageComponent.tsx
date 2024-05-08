import React from 'react';
import {
  DimensionValue,
  Image,
  ImageResizeMode,
  ImageSourcePropType,
} from 'react-native';

interface Props {
  source: ImageSourcePropType;
  width?: DimensionValue;
  height?: DimensionValue;
  resizeMode?: ImageResizeMode;
}
const ImageComponent = ({
  source,
  width,
  height,
  resizeMode = 'cover',
}: Props) => {
  return (
    <Image
      source={source}
      style={{
        width,
        height,
      }}
      resizeMode={resizeMode}
    />
  );
};

export default ImageComponent;
