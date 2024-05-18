import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BORDER_RADIUS, COLORS, SPACING} from '../constants';
import {globalStyles} from '../styles';
import MaterialIcons from './MaterialIcons';

const LabelProductComponent = () => {
  return (
    <View style={[styles.container, globalStyles.center]}>
      <MaterialIcons
        name="local-mall"
        color={COLORS.primaryWhiteHex}
        size="small"
      />
    </View>
  );
};

export default LabelProductComponent;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: -SPACING.space_2,
    top: SPACING.space_4,
    width: SPACING.space_32,
    paddingVertical: SPACING.space_2,
    backgroundColor: COLORS.primaryRedHex,
    borderTopRightRadius: BORDER_RADIUS.radius_4,
    borderBottomRightRadius: BORDER_RADIUS.radius_4,
  },
});
