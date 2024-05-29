import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TextComponent} from '../../../components';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../../../constants';

const HeadingAsideFilter = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.headerContainer,
        {
          paddingTop: insets.top + SPACING.space_16,
        },
      ]}>
      <TextComponent
        text={'Bộ lọc tìm kiếm'}
        fontSize={FONTSIZE.size_14}
        fontFamily={FONT_FAMILY.montserrat_semibold}
      />
    </View>
  );
};

export default HeadingAsideFilter;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: SPACING.space_8,
    paddingBottom: SPACING.space_8,
    backgroundColor: COLORS.primaryGreyHex,
  },
});
