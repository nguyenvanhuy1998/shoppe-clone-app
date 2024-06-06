import {useForm} from 'react-hook-form';
import {FormPriceRange} from '../screens/productList/components/AsideFilter';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from '../utils';

const priceSchema = schema.pick(['price_min', 'price_max']);

const usePriceRangeForm = () => {
  return useForm<FormPriceRange>({
    defaultValues: {
      price_min: '',
      price_max: '',
    },
    resolver: yupResolver(priceSchema),
    shouldFocusError: false,
  });
};
export default usePriceRangeForm;
