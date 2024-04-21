import React from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  ImageComponent,
  SectionComponent,
  SpaceComponent,
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
      <SectionComponent>
        <ButtonComponent text="Đăng ký" onPress={() => {}} />
        <SpaceComponent height={20} />
        <ButtonComponent
          style={globalStyles.selfCenter}
          onPress={() => {}}
          text="Đăng nhập"
          type="text"
          color={COLORS.primaryWhiteHex}
          backgroundColor={'transparent'}
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SplashScreen;
