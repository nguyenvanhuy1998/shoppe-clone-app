import {Product, ProductList, ProductListConfig} from '../types/product.type';
import {SuccessResponse} from '../types/utils.type';
import {http} from '../utils';

const URL = 'products';
const productApi = {
  getProducts({
    page,
    limit,
    filters,
  }: {
    page: number;
    limit: number;
    filters?: ProductListConfig;
  }) {
    return http.get<SuccessResponse<ProductList>>(URL, {
      params: {
        page,
        limit,
        ...filters,
      },
    });
  },
  getProductDetail(id: string) {
    return http.get<SuccessResponse<Product>>(`${URL}/${id}`);
  },
};
export default productApi;
