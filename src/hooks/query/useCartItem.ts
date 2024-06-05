import QUERY_KEYS from '@hooks/queryKeys';
import ShoppingCartFetcher from '@apis/ShoppingCartFetcher';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useToastContext } from '@components/common/Toast/provider/ToastProvider';

export default function useCartItems() {
  const { showToast } = useToastContext();

  const {
    data: cartItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.cartItems],
    queryFn: ShoppingCartFetcher.getCartItems,
    onError: () => showToast('장바구니 목록을 가져올 수 없습니다.'),
  });

  const getCartItemByProductId = useCallback(
    (productId: number) => {
      return cartItems?.find(cartItem => cartItem.product.id === productId);
    },
    [cartItems]
  );

  return { cartItems, getCartItemByProductId, isLoading, error };
}
