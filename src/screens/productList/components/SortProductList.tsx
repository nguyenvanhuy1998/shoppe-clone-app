import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Ionicons, Line, Row} from '../../../components';
import {COLORS, SPACING} from '../../../constants';
import {order as orderConstant, sortBy} from '../../../constants/product';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {ProductListConfig} from '../../../types/product.type';
import {sortFilterChange, sortPriceOrder} from '../filtersSlice';

const SortProductList = () => {
  const dispatch = useAppDispatch();
  const {sort_by, order} = useAppSelector(state => state.filters);
  const isActiveSortBy = (
    sortByValue: Exclude<ProductListConfig['sort_by'], undefined>,
  ) => {
    return sort_by === sortByValue;
  };

  const handleSort = (
    sortByValue: Exclude<ProductListConfig['sort_by'], undefined>,
  ) => {
    dispatch(sortFilterChange(sortByValue));
  };
  const handlePriceOrder = (
    orderValue: Exclude<ProductListConfig['order'], undefined>,
  ) => {
    dispatch(sortPriceOrder(orderValue));
  };

  return (
    <Row style={styles.container}>
      <Button
        styleContainer={[
          styles.btnContainer,
          {
            borderColor: isActiveSortBy(sortBy.view)
              ? COLORS.primaryRedHex
              : COLORS.primaryGreyHex,
          },
        ]}
        text="Phổ biến"
        onPress={() => handleSort(sortBy.view)}
      />
      <Line width={1} height={'50%'} />
      <Button
        styleContainer={[
          styles.btnContainer,
          {
            borderColor: isActiveSortBy(sortBy.createdAt)
              ? COLORS.primaryRedHex
              : COLORS.primaryGreyHex,
          },
        ]}
        text="Mới nhất"
        onPress={() => handleSort(sortBy.createdAt)}
      />
      <Line width={1} height={'50%'} />
      <Button
        styleContainer={[
          styles.btnContainer,
          {
            borderColor: isActiveSortBy(sortBy.sold)
              ? COLORS.primaryRedHex
              : COLORS.primaryGreyHex,
          },
        ]}
        text="Bán chạy"
        onPress={() => handleSort(sortBy.sold)}
      />
      <Line width={1} height={'50%'} />
      <Button
        styleContainer={[
          styles.btnContainer,
          {
            borderColor: isActiveSortBy(sortBy.price)
              ? COLORS.primaryRedHex
              : COLORS.primaryGreyHex,
          },
        ]}
        text="Giá"
        color={
          isActiveSortBy(sortBy.price)
            ? COLORS.primaryRedHex
            : COLORS.primaryBlackHex
        }
        endIcon={
          <Ionicons
            name={
              isActiveSortBy(sortBy.price)
                ? order === orderConstant.asc
                  ? 'arrow-up-outline'
                  : 'arrow-down-outline'
                : 'chevron-expand-outline'
            }
            color={
              isActiveSortBy(sortBy.price)
                ? COLORS.primaryRedHex
                : COLORS.primaryBlackHex
            }
          />
        }
        onPress={() => {
          if (order === orderConstant.asc) {
            handlePriceOrder(orderConstant.desc);
          } else {
            handlePriceOrder(orderConstant.asc);
          }
        }}
      />
    </Row>
  );
};

export default SortProductList;

const styles = StyleSheet.create({
  container: {
    minHeight: SPACING.space_32,
    marginTop: SPACING.space_8,
  },
  btnContainer: {
    flex: 1,
    height: '100%',
    borderBottomWidth: 1,
  },
});
