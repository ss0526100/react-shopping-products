import { CartItem } from '@appTypes/product';
import END_POINTS from '@apis/EndPoints';
import ERROR_MESSAGE from '@constants/errorMessage';
import HTTPError from '@errors/HTTPError';
import QUERY_KEYS from '@hooks/queryKeys';
import SECURE_JSON_HEADERS from '@apis/APIClient';
import { getCartItems } from '@apis/ShoppingCartFetcher';
import { useCallback } from 'react';
import { useQuery } from 'react-query';

interface Props {
  errorHandler: (err: unknown) => void;
}

export default function useCartItems({ errorHandler }: Props) {
  const { data: cartItems, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.cartItems],
    queryFn: () =>
      fetch(END_POINTS.cartItem, { headers: SECURE_JSON_HEADERS })
        .then(response => response.json())
        .then(data => (data?.content || []) as CartItem[]),
    onError: errorHandler,
  });

  const getCartItemByProductId = useCallback(
    (productId: number) => {
      return cartItems?.find(cartItem => cartItem.product.id === productId);
    },
    [cartItems]
  );

  return { cartItems, getCartItemByProductId, isLoading };
}
