import {omit} from 'lodash';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Ionicons, Line, Row} from '../../../components';
import {COLORS, SPACING} from '../../../constants';
import {order as orderConstant, sortBy} from '../../../constants/product';
import {ProductListConfig} from '../../../types/product.type';

interface Props {
  filters: ProductListConfig;
  setFilters: React.Dispatch<React.SetStateAction<ProductListConfig>>;
}

const SortProductList = ({filters, setFilters}: Props) => {
  const {sort_by, order} = filters;
  const isActiveSortBy = (
    sortByValue: Exclude<ProductListConfig['sort_by'], undefined>,
  ) => {
    return sort_by === sortByValue;
  };

  const handleSort = (
    sortByValue: Exclude<ProductListConfig['sort_by'], undefined>,
  ) => {
    setFilters(prev => {
      return omit(
        {
          ...prev,
          sort_by: sortByValue,
        },
        ['order'],
      );
    });
  };
  const handlePriceOrder = (
    orderValue: Exclude<ProductListConfig['order'], undefined>,
  ) => {
    setFilters(prev => ({
      ...prev,
      sort_by: sortBy.price,
      order: orderValue,
    }));
  };
  console.log(filters);

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
