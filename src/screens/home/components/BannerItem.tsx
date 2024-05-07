import React from 'react';
import {ImageComponent} from '../../../components';
import {WIDTH} from '../../../constants';
import {BannerProps} from '../data/banner';

const BannerItem = ({item}: {item: BannerProps}) => (
  <ImageComponent
    source={item.image}
    width={WIDTH}
    height={WIDTH / 2}
    resizeMode="cover"
  />
);

export default BannerItem;
