import {yupResolver} from '@hookform/resolvers/yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
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
import {globalStyles} from '../../styles';
import {createSpacing, isAxiosUnprocessableEntityError} from '../../utils';
import {AuthNavigatorParamList} from '../../navigator/AuthNavigator';
import {AuthSchema, schema} from '../../utils/rules';
import {useMutation} from '@tanstack/react-query';
import {registerAccount} from '../../apis/auth.api';
import {omit} from 'lodash';
import {ErrorResponse} from '../../types/utils.type';
import {AppContext} from '../../contexts/AppContext';
import {LoadingModal} from '../../modals';

type Props = NativeStackScreenProps<AuthNavigatorParamList, 'SignUp'>;
type FormData = AuthSchema;
const SignUpScreen = ({navigation}: Props) => {
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
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirmPassword'>) =>
      registerAccount(body),
  });

  const onSubmit = handleSubmit(data => {
    const body = omit(data, ['confirmPassword']);
    registerAccountMutation.mutate(body, {
      onSuccess: () => {
        setIsAuthenticated(true);
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
    <ContainerComponent type="input">
      {/* Header */}
      <SectionComponent>
        <HeaderComponent
          text="Sign Up"
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
        {/* Confirm Password */}
        <InputComponent
          label="Confirm password"
          control={control}
          name="confirmPassword"
          placeholder="Enter confirm password..."
          isPassword
          error={errors.confirmPassword?.message}
        />
        {/* SignUp */}
        <ButtonComponent
          style={createSpacing(2)}
          onPress={onSubmit}
          text="Sign Up"
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
            text="Or sign up with"
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
          <TextComponent text="Already have an account? " />
          <ButtonComponent
            onPress={handleSignIn}
            type="text"
            text="Sign In"
            backgroundColor={'transparent'}
          />
        </RowComponent>
      </SectionComponent>
      <LoadingModal visible={registerAccountMutation.isPending} />
    </ContainerComponent>
  );
};

export default SignUpScreen;
