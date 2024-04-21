import React from 'react';
import {
  ContainerComponent,
  HeaderComponent,
  SectionComponent,
} from '../../components';
import {FONT_FAMILY, FONTSIZE} from '../../constants';
const SignUpScreen = () => {
  return (
    <ContainerComponent type="input">
      <SectionComponent>
        <HeaderComponent
          text="Đăng ký"
          fontSize={FONTSIZE.size_26}
          fontFamily={FONT_FAMILY.montserrat_semibold}
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
