import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ContainerComponent} from '../../components';
import {COLORS} from '../../constants';
const SignUpScreen = () => {
  return (
    <ContainerComponent type="input">
      <Ionicons name="arrow-back" size={24} color={COLORS.primaryBlackHex} />
    </ContainerComponent>
  );
};

export default SignUpScreen;
