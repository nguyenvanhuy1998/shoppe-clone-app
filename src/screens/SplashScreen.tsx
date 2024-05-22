import React from 'react';
import {
  ContainerComponent,
  ImageComponent,
  SectionOldComponent,
} from '../components';
import {COLORS, images} from '../constants';
import {globalStyles} from '../styles';

const SplashScreen = () => {
  return (
    <ContainerComponent
      type="linear"
      barStyle="light-content"
      backgroundColorBarStyle={COLORS.secondaryOrangeHex}>
      <SectionOldComponent style={globalStyles.containerCenter}>
        <ImageComponent source={images.logo} width={100} height={142} />
      </SectionOldComponent>
    </ContainerComponent>
  );
};

export default SplashScreen;
