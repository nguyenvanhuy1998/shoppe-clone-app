import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  HeaderComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../../constants';
import {globalStyles} from '../../styles';
import {AuthStackNavigatorParamList} from '../../types/auth';
import {Controller, useForm} from 'react-hook-form';
import {TextInput} from 'react-native';
import {getRules} from '../../utils';

type Props = NativeStackScreenProps<AuthStackNavigatorParamList, 'SignUp'>;

export interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUpScreen = ({navigation}: Props) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const rules = getRules(getValues);

  const onSubmit = handleSubmit(
    data => {},
    error => {},
  );
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };
  return (
    <ContainerComponent type="input">
      {/* Header */}
      <SectionComponent>
        <HeaderComponent
          text="Sign Up"
          fontSize={FONTSIZE.size_26}
          fontFamily={FONT_FAMILY.montserrat_semibold}
        />
      </SectionComponent>
      <SpaceComponent height={SPACING.space_4} />
      {/* Body */}
      <SectionComponent style={globalStyles.flexOne}>
        {/* Email */}
        <Controller
          rules={rules.email}
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <TextInput
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />
        <TextComponent text={errors.email?.message} />
        {/* <InputComponent
          allowClear
          placeholder="Enter email"
          value={email}
          onChangeText={val => setEmail(val)}
          label="Email"
        /> */}

        <SpaceComponent height={SPACING.space_20} />
        {/* Password */}
        <Controller
          control={control}
          rules={rules.password}
          name="password"
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <TextInput
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />
        <TextComponent text={errors.password?.message} />

        {/* <InputComponent
          allowClear
          placeholder="Enter password"
          value={password}
          onChangeText={val => setPassword(val)}
          label="Password"
          isPassword
        /> */}
        <SpaceComponent height={SPACING.space_20} />
        {/* ConfirmPassword */}
        <Controller
          control={control}
          rules={{
            ...rules.confirmPassword,
          }}
          name="confirmPassword"
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <TextInput
                placeholder="Confirm Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />
        <TextComponent text={errors.confirmPassword?.message} />
        {/* <InputComponent
          allowClear
          placeholder="Enter confirm password"
          value={confirmPassword}
          onChangeText={val => setConfirmPassword(val)}
          label="Confirm password"
          isPassword
        /> */}
        <SpaceComponent height={SPACING.space_10 * 4} />
        {/* SignUp */}
        <ButtonComponent
          onPress={onSubmit}
          text="Sign Up"
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
            text="Or sign up with"
          />
          <SpaceComponent
            style={globalStyles.flexOne}
            height={1}
            backgroundColor={COLORS.primaryGreyHex}
          />
        </RowComponent>
        <SpaceComponent height={SPACING.space_10 * 3} />
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
      {/* Footer */}
      <SpaceComponent height={SPACING.space_4} />
      <SectionComponent>
        <RowComponent style={globalStyles.jusCenter}>
          <TextComponent text="Already have an account? " />
          <ButtonComponent
            onPress={handleSignIn}
            type="text"
            text="Sign In"
            backgroundColor={'transparent'}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
