import React from 'react';
import {
  Control,
  Controller,
  FieldValues,
  UseFormTrigger,
} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Input, Line, Row} from '../../../components';
import {COLORS, SPACING} from '../../../constants';
import {FormPriceRange} from './AsideFilter';

interface Props {
  control?: Control<FieldValues>;
  trigger: UseFormTrigger<FormPriceRange>;
}
const PriceRange = ({control, trigger}: Props) => {
  return (
    <View style={styles.priceRangeContainer}>
      <Row style={styles.inputContainer}>
        <Controller
          control={control}
          name="price_min"
          render={({field}) => {
            return (
              <Input
                {...field}
                placeholder="TỐI THIỂU"
                textAlign="center"
                keyboardType="number-pad"
                onChangeText={text => {
                  field.onChange(text);
                  trigger('price_max');
                }}
              />
            );
          }}
        />

        <Line
          width={SPACING.space_12}
          height={SPACING.space_2}
          style={styles.lineContainer}
        />
        <Controller
          control={control}
          name="price_max"
          render={({field}) => {
            return (
              <Input
                {...field}
                placeholder="TỐI ĐA"
                textAlign="center"
                keyboardType="number-pad"
                onChangeText={text => {
                  field.onChange(text);
                  trigger('price_min');
                }}
              />
            );
          }}
        />
      </Row>
    </View>
  );
};

export default PriceRange;

const styles = StyleSheet.create({
  priceRangeContainer: {
    marginTop: SPACING.space_16,
    gap: SPACING.space_4,
  },
  inputContainer: {
    backgroundColor: COLORS.primaryGreyHex,
    padding: SPACING.space_8,
    gap: SPACING.space_8,
  },
  lineContainer: {
    backgroundColor: COLORS.thirdGreyHex,
  },
  optionPriceRangeContainer: {
    marginTop: SPACING.space_8,
    gap: SPACING.space_8,
  },
});
