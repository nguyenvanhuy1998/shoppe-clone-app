import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  HeaderComponent,
  InputOldComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../../constants';
import {globalStyles} from '../../styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackNavigatorParamList} from '../../types/auth';

type Props = NativeStackScreenProps<AuthStackNavigatorParamList, 'SignIn'>;

const SignInScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleForgotPassword = () => {};
  const handleSignIn = () => {};
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ContainerComponent type="input">
      {/* Header */}
      <SectionComponent>
        <HeaderComponent
          isHideIconLeft
          text="Sign In"
          desc="Please fill E-mail & password to login your
          Shopee application account."
          fontSize={FONTSIZE.size_26}
          fontFamily={FONT_FAMILY.montserrat_semibold}
        />
      </SectionComponent>
      <SpaceComponent height={SPACING.space_4} />
      {/* Body */}
      <SectionComponent style={globalStyles.flexOne}>
        {/* Email */}
        <InputOldComponent
          allowClear
          placeholder="Nhập email"
          value={email}
          onChangeText={val => setEmail(val)}
          label="Email"
        />
        <SpaceComponent height={SPACING.space_20} />
        {/* Password */}
        <InputOldComponent
          allowClear
          placeholder="Nhập mật khẩu"
          value={password}
          onChangeText={val => setPassword(val)}
          label="Mật khẩu"
          isPassword
        />
        <SpaceComponent height={SPACING.space_24} />
        {/* Forgot Password */}
        <ButtonComponent
          onPress={handleForgotPassword}
          type="text"
          text="Forgot password?"
          backgroundColor={'transparent'}
          fontFamily={FONT_FAMILY.montserrat_medium}
          color={COLORS.primaryBlackHex}
          style={globalStyles.selfEnd}
        />
        <SpaceComponent height={SPACING.space_10 * 5} />
        {/* Sign In */}
        <ButtonComponent
          onPress={handleSignIn}
          text="Sign In"
          backgroundColor={COLORS.primaryOrangeHex}
          color={COLORS.primaryWhiteHex}
        />
        <SpaceComponent height={SPACING.space_10 * 5} />
        <RowComponent>
          <SpaceComponent
            style={globalStyles.flexOne}
            height={1}
            backgroundColor={COLORS.primaryGreyHex}
          />
          <TextComponent
            fontFamily={FONT_FAMILY.montserrat_semibold}
            text="Or sign in with"
          />
          <SpaceComponent
            style={globalStyles.flexOne}
            height={1}
            backgroundColor={COLORS.primaryGreyHex}
          />
        </RowComponent>
        <SpaceComponent height={SPACING.space_10 * 3} />
        {/* Login with Facebook or Google */}
        <RowComponent>
          <ButtonComponent
            icon="facebook"
            iconSize={SPACING.space_24}
            iconColor={COLORS.primaryWhiteHex}
            backgroundColor={COLORS.primaryGreyHex}
            color={COLORS.primaryWhiteHex}
            style={globalStyles.flexOne}
          />
          <SpaceComponent width={SPACING.space_20} />
          <ButtonComponent
            icon="google"
            iconSize={SPACING.space_24}
            iconColor={COLORS.primaryWhiteHex}
            backgroundColor={COLORS.primaryGreyHex}
            color={COLORS.primaryWhiteHex}
            style={globalStyles.flexOne}
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={SPACING.space_4} />
      {/* Footer */}
      <SectionComponent>
        <RowComponent style={globalStyles.jusCenter}>
          <TextComponent text="Don’t have an account? " />
          <ButtonComponent
            onPress={handleSignUp}
            type="text"
            text="Sign Up"
            backgroundColor={'transparent'}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignInScreen;
