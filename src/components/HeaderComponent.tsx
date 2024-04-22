import React from 'react';
import {COLORS, SPACING} from '../constants';
import MaterialIcons from './MaterialIcons';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {ColorValue, StyleSheet} from 'react-native';
import SpaceComponent from './SpaceComponent';
import {useNavigation} from '@react-navigation/native';

interface Props {
  text: string;
  fontSize?: number;
  color?: ColorValue;
  fontFamily?: string;
  desc?: string;
}
const HeaderComponent = ({
  text,
  fontSize,
  color,
  fontFamily,
  desc = '',
}: Props) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <>
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
      {desc && (
        <TextComponent
          style={styles.desc}
          text={desc}
          lineHeight={SPACING.space_24}
        />
      )}
    </>
  );
};

export default HeaderComponent;
const styles = StyleSheet.create({
  desc: {
    marginTop: SPACING.space_16,
  },
});
