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
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackNavigatorParamList} from '../types/auth';

type Props = NativeStackScreenProps<AuthStackNavigatorParamList, 'Splash'>;
const SplashScreen = ({navigation}: Props) => {
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ContainerComponent
      type="linear"
      barStyle="light-content"
      backgroundColorBarStyle={COLORS.secondaryOrangeHex}>
      <SectionComponent style={globalStyles.containerCenter}>
        <ImageComponent source={images.logo} width={100} height={142} />
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent text="Đăng ký" onPress={handleSignUp} />
        <SpaceComponent height={20} />
        <ButtonComponent
          style={globalStyles.selfCenter}
          onPress={handleSignIn}
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
