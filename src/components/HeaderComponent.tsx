import React from 'react';
import {COLORS, SPACING} from '../constants';
import MaterialIcons from './MaterialIcons';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {ColorValue} from 'react-native';
import SpaceComponent from './SpaceComponent';
import {useNavigation} from '@react-navigation/native';

interface Props {
  text: string;
  fontSize?: number;
  color?: ColorValue;
  fontFamily?: string;
}
const HeaderComponent = ({text, fontSize, color, fontFamily}: Props) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <RowComponent>
      <MaterialIcons
        name="arrow-back"
        size={'extraLarge'}
        color={COLORS.primaryBlackHex}
        onPress={handleBack}
      />
      <SpaceComponent width={SPACING.space_8} />
      <TextComponent
        text={text}
        fontFamily={fontFamily}
        fontSize={fontSize}
        color={color}
      />
    </RowComponent>
  );
};

export default HeaderComponent;
