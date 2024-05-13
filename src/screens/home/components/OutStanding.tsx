import React from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {
  ButtonSecondaryComponent,
  ImageComponent,
  Ionicons,
} from '../../../components';
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONTSIZE,
  SHADOW,
  SPACING,
  WIDTH,
} from '../../../constants';
import {globalStyles} from '../../../styles';
interface Props {
  image: ImageSourcePropType;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
const OutStanding = ({image, onPress, style}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <ImageComponent
        style={styles.image}
        source={image}
        width={'100%'}
        height={100}
        resizeMode="cover"
      />
      <ButtonSecondaryComponent
        styleContainer={styles.button}
        fontFamily={FONT_FAMILY.montserrat_bold}
        backgroundColor={COLORS.primaryRedHex}
        fontSize={FONTSIZE.size_10}
        type="both"
        text="MUA NGAY"
        nameIcon="arrow-forward-circle"
        colorIcon={COLORS.primaryWhiteHex}
      />
    </TouchableOpacity>
  );
};

export default OutStanding;
const styles = StyleSheet.create({
  container: {
    width: WIDTH / 3 - SPACING.space_36,
  },
  image: {
    borderRadius: BORDER_RADIUS.radius_8,
  },
  button: {
    marginTop: -SPACING.space_12,
    width: '90%',
    alignSelf: 'center',
    ...SHADOW.primary,
  },
});
