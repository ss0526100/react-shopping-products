import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CartItem } from '@appTypes/product';
import ERROR_MESSAGE from '@constants/errorMessage';
import HTTPError from '@errors/HTTPError';
import QUERY_KEYS from '@hooks/queryKeys';
import { updateCartItemQuantity } from '@apis/ShoppingCartFetcher';

export default function useIncreaseCartItemQuantity() {
  const queryClient = useQueryClient();

  const mutationFn = async (cartItemId: number) => {
    const cartItems = queryClient.getQueryData<CartItem[]>([
      QUERY_KEYS.cartItems,
    ]);
    const targetCartItems = cartItems?.find(item => item.id === cartItemId);
    if (!targetCartItems) throw new Error(ERROR_MESSAGE.missingCartItem);

    return updateCartItemQuantity(
      cartItemId,
      targetCartItems.quantity + 1
    ).catch(error => {
      if (!(error instanceof HTTPError))
        throw new Error(ERROR_MESSAGE.clientNetwork);
      if (500 <= error.statusCode) throw new Error(ERROR_MESSAGE.server);
      if (400 <= error.statusCode)
        throw new Error(ERROR_MESSAGE.missingCartItem);
    });
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cartItems] });
    },
  });
}
