import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextComponent} from '../../../components';
import {COLORS, SPACING} from '../../../constants';

interface Props {
  index: number;
  length: number;
}
const CountImage = ({index, length}: Props) => {
  return (
    <View style={styles.container}>
      <TextComponent text={`${index}/${length}`} />
    </View>
  );
};

export default CountImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryWhiteHex,
    alignSelf: 'flex-end',
    marginTop: -SPACING.space_24,
    paddingHorizontal: SPACING.space_4,
    marginRight: SPACING.space_8,
    borderWidth: 0.5,
    borderColor: COLORS.thirdGreyHex,
    borderRadius: 99,
  },
});
