import {yupResolver} from '@hookform/resolvers/yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useMutation} from '@tanstack/react-query';
import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import authApi from '../../apis/auth.api';
import {Container, LoadingModal, Row, TextComponent} from '../../components';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../../constants';
import {AppContext} from '../../contexts/AppContext';
import {AuthNavigatorParamList} from '../../navigator/AuthNavigator';
import {globalStyles} from '../../styles';
import {ErrorResponse} from '../../types/utils.type';
import {spacingTop, isAxiosUnprocessableEntityError} from '../../utils';
import {AuthSchema, schema} from '../../utils/rules';
import {
  ButtonAuth,
  HeaderAuth,
  InputAuth,
  SectionAuth,
  SpaceAuth,
} from './components';

type Props = NativeStackScreenProps<AuthNavigatorParamList, 'SignIn'>;

type FormData = Omit<AuthSchema, 'confirmPassword'>;
const loginSchema = schema.omit(['confirmPassword']);
const SignInScreen = ({navigation}: Props) => {
  const {setIsAuthenticated, setProfile} = useContext(AppContext);
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
    mutationFn: (body: FormData) => authApi.login(body),
  });

  const onSubmit = handleSubmit(data => {
    loginMutation.mutate(data, {
      onSuccess: res => {
        setIsAuthenticated(true);
        setProfile(res.data.data.user);
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
    <Container backgroundColorBarStyle={COLORS.primaryWhiteHex} type="input">
      {/* Header */}
      <SectionAuth>
        <HeaderAuth
          isHideIconLeft
          text="Sign In"
          desc="Please fill E-mail & password to login your
          Shopee application account."
          fontSize={FONTSIZE.size_26}
          fontFamily={FONT_FAMILY.montserrat_semibold}
        />
      </SectionAuth>
      {/* Body */}
      <SectionAuth style={globalStyles.flexOne}>
        {/* Email */}
        <InputAuth
          label="Email"
          control={control}
          name="email"
          placeholder="Enter email..."
          allowClear
          error={errors.email?.message}
          keyboardType="email-address"
        />
        {/* Password */}
        <InputAuth
          label="Password"
          control={control}
          name="password"
          placeholder="Enter password..."
          isPassword
          error={errors.password?.message}
        />
        {/* Forgot Password */}
        <ButtonAuth
          onPress={handleForgotPassword}
          type="text"
          text="Forgot password?"
          backgroundColor={'transparent'}
          fontFamily={FONT_FAMILY.montserrat_medium}
          color={COLORS.primaryBlackHex}
          style={globalStyles.selfEnd}
        />
        {/* Sign In */}
        <ButtonAuth
          disabled={loginMutation.isPending}
          style={spacingTop(SPACING.space_10 * 5)}
          onPress={onSubmit}
          text="Sign In"
          backgroundColor={COLORS.primaryOrangeHex}
          color={COLORS.primaryWhiteHex}
        />
        {/* Other */}
        <Row style={spacingTop(SPACING.space_10 * 5)}>
          <SpaceAuth
            style={globalStyles.flexOne}
            height={1}
            backgroundColor={COLORS.primaryGreyHex}
          />
          <TextComponent
            fontFamily={FONT_FAMILY.montserrat_semibold}
            text="Or sign in with"
          />
          <SpaceAuth
            style={globalStyles.flexOne}
            height={1}
            backgroundColor={COLORS.primaryGreyHex}
          />
        </Row>
        {/* Login with Google && Facebook */}
        <Row style={spacingTop(SPACING.space_10 * 3)}>
          <ButtonAuth
            icon="facebook"
            iconSize={SPACING.space_24}
            iconColor={COLORS.primaryWhiteHex}
            backgroundColor={COLORS.primaryGreyHex}
            color={COLORS.primaryWhiteHex}
            style={globalStyles.flexOne}
          />
          <SpaceAuth width={SPACING.space_20} />
          <ButtonAuth
            icon="google"
            iconSize={SPACING.space_24}
            iconColor={COLORS.primaryWhiteHex}
            backgroundColor={COLORS.primaryGreyHex}
            color={COLORS.primaryWhiteHex}
            style={globalStyles.flexOne}
          />
        </Row>
      </SectionAuth>
      {/* Footer */}
      <SectionAuth>
        <Row style={globalStyles.jusCenter}>
          <TextComponent text="Don’t have an account? " />
          <ButtonAuth
            onPress={handleSignUp}
            type="text"
            text="Sign Up"
            backgroundColor={'transparent'}
          />
        </Row>
      </SectionAuth>
      <LoadingModal visible={loginMutation.isPending} />
    </Container>
  );
};

export default SignInScreen;
