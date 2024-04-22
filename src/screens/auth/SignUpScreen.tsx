import React, {useState} from 'react';
import {
  ContainerComponent,
  HeaderComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
} from '../../components';
import {FONT_FAMILY, FONTSIZE, SPACING} from '../../constants';
const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <ContainerComponent type="input">
      <SectionComponent>
        <HeaderComponent
          text="Đăng ký"
          fontSize={FONTSIZE.size_26}
          fontFamily={FONT_FAMILY.montserrat_semibold}
        />
      </SectionComponent>
      <SpaceComponent height={SPACING.space_12} />
      <SectionComponent>
        <InputComponent
          allowClear
          placeholder="Nhập email"
          value={email}
          onChangeText={val => setEmail(val)}
          label="Email"
        />
        <SpaceComponent height={SPACING.space_20} />
        <InputComponent
          allowClear
          placeholder="Nhập mật khẩu"
          value={password}
          onChangeText={val => setPassword(val)}
          label="Mật khẩu"
          isPassword
        />
        <SpaceComponent height={SPACING.space_20} />
        <InputComponent
          allowClear
          placeholder="Nhập mật khẩu"
          value={confirmPassword}
          onChangeText={val => setConfirmPassword(val)}
          label="Xác nhận mật khẩu"
          isPassword
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
