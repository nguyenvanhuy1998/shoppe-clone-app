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
import {gapNumber} from '../../../utils/spacing';
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
        styleContainer={[styles.button, gapNumber(4)]}
        radius={99}
        fontFamily={FONT_FAMILY.montserrat_bold}
        backgroundColor={COLORS.primaryRedHex}
        fontSize={FONTSIZE.size_10}
        text="MUA NGAY"
        iconRight={
          <Ionicons
            name="arrow-forward-circle"
            color={COLORS.primaryWhiteHex}
          />
        }
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
