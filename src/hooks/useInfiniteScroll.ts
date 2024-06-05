import {useInfiniteQuery} from '@tanstack/react-query';
import _ from 'lodash';
import {useCallback, useMemo, useState} from 'react';
import productApi from '../apis/product.api';
import {ProductListConfig} from '../types/product.type';

type Params = {
  key: string;
  limit?: number;
  filters?: ProductListConfig;
};
export const useInfiniteScroll = ({key, limit = 10, filters}: Params) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryKey = [
    key,
    ..._.values<string | string[]>(_.omitBy(filters || {}, _.isEmpty)),
  ].filter(c => Boolean(c) && !_.isEmpty(c));
  const queryFn = async ({pageParam = 1}) => {
    const {data} = await productApi.getProducts({
      page: pageParam,
      limit,
      filters,
    });
    return {
      data: data.data.products,
      nextPage: pageParam + 1,
    };
  };
  const {data, hasNextPage, fetchNextPage, isFetchingNextPage, refetch} =
    useInfiniteQuery({
      queryKey,
      queryFn,
      initialPageParam: 1,
      getNextPageParam: (lastPage, __, lastPageParam) => {
        if (lastPage.data.length < limit) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      getPreviousPageParam: (_, __, firstPageParam) => {
        if (firstPageParam === 1) {
          return undefined;
        }
        return firstPageParam - 1;
      },
    });

  const loadNext = useCallback(() => {
    hasNextPage && fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  const onRefresh = useCallback(() => {
    if (!isRefreshing) {
      setIsRefreshing(true);
      refetch()
        .then(() => setIsRefreshing(false))
        .catch(() => setIsRefreshing(false));
    }
  }, [isRefreshing, refetch]);

  const flattenData = useMemo(() => {
    return data?.pages.flatMap(page => page.data) || [];
  }, [data?.pages]);

  return {
    data: flattenData,
    onEndReached: loadNext,
    isRefreshing,
    onRefresh,
    isFetchingNextPage,
  };
};
