import { Category, SortType } from '@pages/ProductPage/Product.types';
import END_POINTS, { getProductEndpoint } from '@apis/EndPoints';

import ERROR_MESSAGE from '@constants/errorMessage';
import HTTPError from '@errors/HTTPError';
import QUERY_KEYS from '@hooks/queryKeys';
import { fetchPaginatedProducts } from '@apis/ProductFetchers';
import { useInfiniteQuery } from 'react-query';

interface usePaginatedProductsProps {
  category: Category;
  sortType: SortType;
  errorHandler: (err: unknown) => void;
}
export default function useInfinityProducts({
  category,
  sortType,
  errorHandler,
}: usePaginatedProductsProps) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.products, category, sortType],
    queryFn: ({ pageParam = { page: 0, size: 20, category, sortType } }) =>
      fetch(`${getProductEndpoint(pageParam)}`).then(response =>
        response.json()
      ),
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length === 0)
        return { page: 0, size: 20, category, sortType };
      if (lastPage.last) return;
      return { page: allPages.length + 4, size: 4, category, sortType };
    },
    staleTime: 5 * 60 * 1000,
    onError: errorHandler,
  });
}
