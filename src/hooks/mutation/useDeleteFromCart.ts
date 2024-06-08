import { useMutation, useQueryClient } from 'react-query';

import END_POINTS from '@apis/EndPoints';
import ERROR_MESSAGE from '@constants/errorMessage';
import HTTPError from '@errors/HTTPError';
import QUERY_KEYS from '@hooks/queryKeys';
import SECURE_JSON_HEADERS from '@apis/APIClient';
import { deleteCartItem } from '@apis/ShoppingCartFetcher';

interface Props {
  errorHandler: (err: unknown) => void;
}

export default function useDeleteFromCart({ errorHandler }: Props) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (cartItemId: number) =>
      fetch(`${END_POINTS.cartItem}/${cartItemId}`, {
        method: 'DELETE',
        headers: SECURE_JSON_HEADERS,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cartItems] });
    },
    onError: errorHandler,
  });
}
