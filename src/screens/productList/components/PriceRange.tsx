import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Line, Row} from '../../../components';
import {COLORS, SPACING} from '../../../constants';
import {globalStyles} from '../../../styles';
import {priceRanges} from '../data/priceRanges';

const PriceRange = () => {
  return (
    <View style={styles.priceRangeContainer}>
      <Row style={styles.inputContainer}>
        <Input
          placeholder="TỐI THIỂU"
          textAlign="center"
          keyboardType="numeric"
        />
        <Line
          width={SPACING.space_12}
          height={SPACING.space_2}
          style={styles.lineContainer}
        />
        <Input placeholder="TỐI ĐA" textAlign="center" keyboardType="numeric" />
      </Row>
      {/* <Row style={styles.optionPriceRangeContainer}>
        {priceRanges.map(item => (
          <ItemAsideFilter
            style={globalStyles.flexOne}
            key={item._id}
            item={item}
          />
        ))}
      </Row> */}
    </View>
  );
};

export default PriceRange;

const styles = StyleSheet.create({
  priceRangeContainer: {
    marginTop: SPACING.space_16,
  },
  inputContainer: {
    backgroundColor: COLORS.primaryGreyHex,
    padding: SPACING.space_8,
    gap: SPACING.space_4,
  },
  lineContainer: {
    backgroundColor: COLORS.thirdGreyHex,
  },
  optionPriceRangeContainer: {
    marginTop: SPACING.space_8,
    gap: SPACING.space_8,
  },
});
