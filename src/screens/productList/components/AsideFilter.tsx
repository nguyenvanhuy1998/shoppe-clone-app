import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextComponent} from '../../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../../../constants';

const AsideFilter = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
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
          fontFamily={FONT_FAMILY.montserrat_medium}
        />
      </View>
    </View>
  );
};

export default AsideFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: SPACING.space_8,
    paddingBottom: SPACING.space_8,
    backgroundColor: COLORS.primaryGreyHex,
  },
});
