import React from 'react';
import {Image, ImageResizeMode, ImageSourcePropType} from 'react-native';

interface Props {
  source: ImageSourcePropType;
  width: number;
  height: number;
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
