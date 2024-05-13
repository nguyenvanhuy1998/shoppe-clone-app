import React from 'react';
import {
  ColorValue,
  ImageBackground,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import {
  MaterialIcons,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {BORDER_RADIUS, COLORS, FONT_FAMILY, SPACING} from '../../../constants';
import {globalStyles} from '../../../styles';
import {LiveProps} from '../data/live';
interface Props {
  item: LiveProps;
  onPress?: () => void;
}
const Item = ({
  icon,
  text,
  backgroundColor = COLORS.primaryOrangeHex,
  style,
}: {
  icon: string;
  text: string;
  backgroundColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
}) => (
  <RowComponent
    style={[
      styles.item,
      {
        backgroundColor,
      },
      style,
    ]}>
    <MaterialIcons name={icon} size="small" color={COLORS.primaryWhiteHex} />
    <SpaceComponent width={SPACING.space_4} />
    <TextComponent text={text} color={COLORS.primaryWhiteHex} />
  </RowComponent>
);
const LiveItem = ({item, onPress}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        style={globalStyles.liveCard}>
        <RowComponent style={[globalStyles.flexOne, globalStyles.alignStart]}>
          <Item icon="fiber-manual-record" text="LIVE" />
          <Item
            icon="remove-red-eye"
            text={String(item.live)}
            backgroundColor={COLORS.primaryModal}
          />
        </RowComponent>
        <Item
          style={styles.coinContainer}
          icon="currency-bitcoin"
          text={`+${String(item.coin)}`}
          backgroundColor={COLORS.primaryOrangeHex}
        />
        <TextComponent
          numberOfLines={2}
          text={item.title}
          color={COLORS.primaryWhiteHex}
          fontFamily={FONT_FAMILY.montserrat_medium}
        />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LiveItem;

const styles = StyleSheet.create({
  item: {
    padding: SPACING.space_4,
  },
  coinContainer: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_4,
    marginLeft: -SPACING.space_8,
    alignSelf: 'flex-start',
    borderTopRightRadius: BORDER_RADIUS.radius_8,
    borderBottomRightRadius: BORDER_RADIUS.radius_8,
    marginBottom: SPACING.space_8,
  },
});
