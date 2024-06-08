import { Category, SortType } from '@pages/ProductPage/Product.types';

const SORT_TYPE_MATCHER: Record<SortType, string> = {
  '낮은 가격순': 'asc',
  '높은 가격순': 'desc',
};

const CATEGORY_MATCHER: Record<Category, string> = {
  전체: 'all',
  의류: 'fashion',
  음료: 'beverage',
  전자제품: 'electronics',
  주방용품: 'kitchen',
  피트니스: 'fitness',
  도서: 'books',
};

interface FetchProductsParam {
  page?: number;
  size?: number;
  sortType?: SortType;
  category?: Category;
}

export const getProductEndpoint = ({
  page,
  size,
  category,
  sortType,
}: FetchProductsParam) => {
  const params = new URLSearchParams();

  if (category !== undefined && category !== '전체') {
    params.append('category', CATEGORY_MATCHER[category]);
  }

  if (page !== undefined) params.append('page', page.toString());
  if (size !== undefined) params.append('size', size.toString());
  if (sortType !== undefined)
    params.append('sort', `price,${SORT_TYPE_MATCHER[sortType]}`);

  return `products?${params.toString()}`;
};
