import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Row} from '../../../components';
import {BORDER_RADIUS, COLORS, FONT_FAMILY, SPACING} from '../../../constants';
import {AsideFilterProps} from './AsideFilter';
import {useAppDispatch} from '../../../redux/store';
import {categoryFilterChange} from '../filtersSlice';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

const ActionAsideFilter = ({
  asideFilter,
  propsDrawerNavigation,
}: {
  asideFilter: AsideFilterProps;
  propsDrawerNavigation: DrawerContentComponentProps;
}) => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const handleAsideFilterChange = () => {
    dispatch(categoryFilterChange(asideFilter.category));
    propsDrawerNavigation.navigation.toggleDrawer();
  };
  return (
    <Row
      style={[
        styles.container,
        {
          paddingTop: SPACING.space_8,
          paddingBottom: insets.bottom,
        },
      ]}>
      <Button
        styleContainer={[
          styles.btnContainer,
          {
            borderColor: COLORS.primaryOrangeHex,
          },
        ]}
        backgroundColor={COLORS.primaryWhiteHex}
        color={COLORS.primaryOrangeHex}
        fontFamily={FONT_FAMILY.montserrat_medium}
        text="Thiết lập lại"
      />
      <Button
        onPress={handleAsideFilterChange}
        styleContainer={[
          styles.btnContainer,
          {
            borderColor: COLORS.primaryOrangeHex,
          },
        ]}
        text="Áp dụng"
        backgroundColor={COLORS.primaryOrangeHex}
        fontFamily={FONT_FAMILY.montserrat_medium}
        color={COLORS.primaryWhiteHex}
      />
    </Row>
  );
};

export default ActionAsideFilter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_8,
    gap: SPACING.space_8,
  },
  btnContainer: {
    flex: 1,
    borderWidth: 1,
    minHeight: SPACING.space_20 * 2,
    borderRadius: BORDER_RADIUS.radius_4,
  },
});
