import {yupResolver} from '@hookform/resolvers/yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useMutation} from '@tanstack/react-query';
import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {login} from '../../apis/auth.api';
import {
  ButtonComponent,
  ContainerComponent,
  HeaderComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../../constants';
import {AuthNavigatorParamList} from '../../navigator/AuthNavigator';
import {globalStyles} from '../../styles';
import {ErrorResponse} from '../../types/utils.type';
import {createSpacing, isAxiosUnprocessableEntityError} from '../../utils';
import {AuthSchema, schema} from '../../utils/rules';
import {AppContext} from '../../contexts/AppContext';

type Props = NativeStackScreenProps<AuthNavigatorParamList, 'SignIn'>;

type FormData = Omit<AuthSchema, 'confirmPassword'>;
const loginSchema = schema.omit(['confirmPassword']);
const SignInScreen = ({navigation}: Props) => {
  const {setIsAuthenticated} = useContext(AppContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: (body: FormData) => login(body),
  });

  const onSubmit = handleSubmit(data => {
    loginMutation.mutate(data, {
      onSuccess: res => {
        setIsAuthenticated(true);
      },
      onError: error => {
        // Kiểm tra nếu nó là lỗi 422
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data;
          if (formError) {
            Object.keys(formError).forEach(key => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server',
              });
            });
          }
        }
      },
    });
  });
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handleForgotPassword = () => {};
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
      {/* Body */}
      <SectionComponent style={globalStyles.flexOne}>
        {/* Email */}
        <InputComponent
          label="Email"
          control={control}
          name="email"
          placeholder="Enter email..."
          allowClear
          error={errors.email?.message}
          keyboardType="email-address"
        />
        {/* Password */}
        <InputComponent
          label="Password"
          control={control}
          name="password"
          placeholder="Enter password..."
          isPassword
          error={errors.password?.message}
        />
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
        {/* Sign In */}
        <ButtonComponent
          style={createSpacing(5)}
          onPress={onSubmit}
          text="Sign In"
          backgroundColor={COLORS.primaryOrangeHex}
          color={COLORS.primaryWhiteHex}
        />
        {/* Other */}
        <RowComponent style={createSpacing(5)}>
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
        {/* Login with Google && Facebook */}
        <RowComponent style={createSpacing(3)}>
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
