/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {MaterialIcons, RowComponent, TextComponent} from '../../../components';
import {
  COLORS,
  FONT_FAMILY,
  FONTSIZE,
  SPACING,
  WIDTH,
} from '../../../constants';
import {ServiceProps} from '../data/services';
import {globalStyles} from '../../../styles';
import {spacingLeft, spacingTop} from '../../../utils';
import {formatVND} from '../../../utils';

interface Props {
  item: ServiceProps;
  onPress?: () => void;
}
const ServiceItem = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <View style={globalStyles.flexOne}>
        <View
          style={[
            styles.newServiceContainer,
            {
              backgroundColor: item.isNewService
                ? COLORS.primaryOrangeHex
                : 'transparent',
            },
          ]}>
          <TextComponent
            text={item.isNewService ? 'Khách hàng mới' : ''}
            fontSize={FONTSIZE.size_10}
            color={COLORS.primaryWhiteHex}
          />
        </View>
        <RowComponent style={globalStyles.horizontalSpacing8}>
          <View
            style={[
              styles.viewIcon,
              {
                backgroundColor: item.color,
              },
            ]}>
            <MaterialIcons
              name={item.icon}
              color={COLORS.primaryWhiteHex}
              size="small"
            />
          </View>
          <TextComponent
            text={item.title}
            style={[globalStyles.flexOne, spacingLeft(2)]}
            fontSize={FONTSIZE.size_10}
            color={COLORS.primaryBlackHex}
          />
        </RowComponent>
        <RowComponent
          style={[
            globalStyles.jusBetween,
            globalStyles.horizontalSpacing8,
            spacingTop(4),
          ]}>
          <TextComponent
            style={globalStyles.decorLine}
            fontSize={FONTSIZE.size_10}
            color={COLORS.thirdGreyHex}
            text={`₫ ${formatVND(item.cost)}`}
          />
          <TextComponent
            text={`₫ ${formatVND(item.price)}`}
            fontSize={FONTSIZE.size_12}
            color={COLORS.primaryOrangeHex}
            fontFamily={FONT_FAMILY.montserrat_semibold}
          />
        </RowComponent>
      </View>
      <TextComponent
        numberOfLines={1}
        style={[globalStyles.horizontalSpacing8, spacingTop(4)]}
        text={item.desc}
        fontSize={FONTSIZE.size_10}
      />
    </TouchableOpacity>
  );
};

export default ServiceItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryGreenOpacity,
    width: WIDTH / 3,
    paddingBottom: SPACING.space_8,
  },
  newServiceContainer: {
    paddingHorizontal: SPACING.space_2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  viewIcon: {
    width: SPACING.space_20,
    height: SPACING.space_20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
  },
});
