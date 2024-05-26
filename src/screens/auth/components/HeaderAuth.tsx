import React from 'react';
import {COLORS, SPACING} from '../../../constants';
import MaterialIcons from '../../../components/MaterialIcons';
import Row from '../../../components/Row';
import TextComponent from '../../../components/TextComponent';
import {ColorValue, StyleSheet} from 'react-native';
import SpaceAuth from './SpaceAuth';
import {useNavigation} from '@react-navigation/native';

interface Props {
  text: string;
  fontSize?: number;
  color?: ColorValue;
  fontFamily?: string;
  desc?: string;
  isHideIconLeft?: boolean;
}
const HeaderAuth = ({
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
      <Row>
        {!isHideIconLeft && (
          <MaterialIcons
            name="arrow-back"
            size={'extraLarge'}
            color={COLORS.primaryBlackHex}
            onPress={handleBack}
          />
        )}
        {!isHideIconLeft && <SpaceAuth width={SPACING.space_8} />}
        <TextComponent
          text={text}
          fontFamily={fontFamily}
          fontSize={fontSize}
          color={color}
        />
      </Row>
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

export default HeaderAuth;
const styles = StyleSheet.create({
  desc: {
    marginTop: SPACING.space_16,
  },
});
