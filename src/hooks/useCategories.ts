import {useQuery} from '@tanstack/react-query';
import categoryApi from '../apis/category.api';

const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategories();
    },
  });
};
export default useCategories;
