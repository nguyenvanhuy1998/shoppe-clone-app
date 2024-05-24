import React from 'react';
import {View} from 'react-native';
import {Container, ImageComponent} from '../../components';
import {COLORS, images} from '../../constants';
import {globalStyles} from '../../styles';

const SplashScreen = () => {
  return (
    <Container
      type="linear"
      barStyle="light-content"
      backgroundColorBarStyle={COLORS.secondaryOrangeHex}>
      <View style={globalStyles.containerCenter}>
        <ImageComponent source={images.logo} width={100} height={142} />
      </View>
    </Container>
  );
};

export default SplashScreen;
