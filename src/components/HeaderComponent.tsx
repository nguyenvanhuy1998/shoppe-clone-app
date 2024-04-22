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
  isHideIconLeft?: boolean;
}
const HeaderComponent = ({
  text,
  fontSize,
  color,
  fontFamily,
  desc = '',
  isHideIconLeft,
}: Props) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <RowComponent>
        {!isHideIconLeft && (
          <MaterialIcons
            name="arrow-back"
            size={'extraLarge'}
            color={COLORS.primaryBlackHex}
            onPress={handleBack}
          />
        )}
        {!isHideIconLeft && <SpaceComponent width={SPACING.space_8} />}
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
