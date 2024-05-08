import React from 'react';
import {ImageComponent} from '../../../components';
import {BannerProps} from '../data/banner';

const BannerItem = ({item}: {item: BannerProps}) => (
  <ImageComponent source={item.image} width={'100%'} height={'100%'} />
);

export default BannerItem;
