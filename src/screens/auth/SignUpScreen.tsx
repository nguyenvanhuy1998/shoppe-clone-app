import {yupResolver} from '@hookform/resolvers/yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Container, LoadingModal, Row, TextComponent} from '../../components';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../../constants';
import {globalStyles} from '../../styles';
import {spacingTop, isAxiosUnprocessableEntityError} from '../../utils';
import {AuthNavigatorParamList} from '../../navigator/AuthNavigator';
import {AuthSchema, schema} from '../../utils/rules';
import {useMutation} from '@tanstack/react-query';
import authApi from '../../apis/auth.api';
import {omit} from 'lodash';
import {ErrorResponse} from '../../types/utils.type';
import {AppContext} from '../../contexts/AppContext';
import {
  ButtonAuth,
  HeaderAuth,
  InputAuth,
  SectionAuth,
  SpaceAuth,
} from './components';

type Props = NativeStackScreenProps<AuthNavigatorParamList, 'SignUp'>;
type FormData = Pick<AuthSchema, 'email' | 'password' | 'confirmPassword'>;
const registerSchema = schema.pick(['email', 'password', 'confirmPassword']);
const SignUpScreen = ({navigation}: Props) => {
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
      confirmPassword: '',
    },
    resolver: yupResolver(registerSchema),
  });

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirmPassword'>) =>
      authApi.registerAccount(body),
  });

  const onSubmit = handleSubmit(data => {
    const body = omit(data, ['confirmPassword']);
    registerAccountMutation.mutate(body, {
      onSuccess: res => {
        setIsAuthenticated(true);
        setProfile(res.data.data.user);
      },
      onError: error => {
        // Kiểm tra nếu nó là lỗi 422
        if (
          isAxiosUnprocessableEntityError<
            ErrorResponse<Omit<FormData, 'confirmPassword'>>
          >(error)
        ) {
          const formError = error.response?.data.data;
          if (formError) {
            Object.keys(formError).forEach(key => {
              setError(key as keyof Omit<FormData, 'confirmPassword'>, {
                message:
                  formError[key as keyof Omit<FormData, 'confirmPassword'>],
                type: 'Server',
              });
            });
          }
        }
      },
    });
  });
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };
  return (
    <Container type="input" backgroundColorBarStyle={COLORS.primaryWhiteHex}>
      {/* Header */}
      <SectionAuth>
        <HeaderAuth
          text="Sign Up"
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
        {/* Confirm Password */}
        <InputAuth
          label="Confirm password"
          control={control}
          name="confirmPassword"
          placeholder="Enter confirm password..."
          isPassword
          error={errors.confirmPassword?.message}
        />
        {/* SignUp */}
        <ButtonAuth
          style={spacingTop(SPACING.space_20)}
          onPress={onSubmit}
          text="Sign Up"
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
            text="Or sign up with"
          />
          <SpaceAuth
            style={globalStyles.flexOne}
            height={1}
            backgroundColor={COLORS.primaryGreyHex}
          />
        </Row>
        {/* Login with Google && Facebook */}
        <Row style={spacingTop(SPACING.space_30)}>
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
          <TextComponent text="Already have an account? " />
          <ButtonAuth
            onPress={handleSignIn}
            type="text"
            text="Sign In"
            backgroundColor={'transparent'}
          />
        </Row>
      </SectionAuth>
      <LoadingModal visible={registerAccountMutation.isPending} />
    </Container>
  );
};

export default SignUpScreen;
