import React from 'react';
import {
  ContainerComponent,
  ImageComponent,
  SectionComponent,
} from '../components';
import {COLORS, images} from '../constants';
import {globalStyles} from '../styles';

const SplashScreen = () => {
  return (
    <ContainerComponent
      type="linear"
      barStyle="light-content"
      backgroundColorBarStyle={COLORS.secondaryOrangeHex}>
      <SectionComponent style={globalStyles.containerCenter}>
        <ImageComponent source={images.logo} width={100} height={142} />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SplashScreen;
