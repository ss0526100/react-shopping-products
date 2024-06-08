import { useMutation, useQueryClient } from 'react-query';

import { CartItem } from '@appTypes/product';
import END_POINTS from '@apis/EndPoints';
import ERROR_MESSAGE from '@constants/errorMessage';
import HTTPError from '@errors/HTTPError';
import QUERY_KEYS from '@hooks/queryKeys';
import SECURE_JSON_HEADERS from '@apis/APIClient';
import { updateCartItemQuantity } from '@apis/ShoppingCartFetcher';

interface Props {
  errorHandler: (err: unknown) => void;
}
const formatNumberToPositiveInt32 = (number: number) => {
  if (number < 1) return 1;
  if (number > 2 ** 32 - 1) return 2 ** 32 - 1;
  return Math.floor(number);
};
export default function useChangeCartItemQuantity({ errorHandler }: Props) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      cartItemId,
      quantity,
    }: {
      cartItemId: number;
      quantity: number;
    }) => {
      const intQuantity = formatNumberToPositiveInt32(quantity);
      return fetch(`${END_POINTS.cartItem}/${cartItemId}`, {
        method: 'PATCH',
        headers: SECURE_JSON_HEADERS,
        body: JSON.stringify({ quantity: intQuantity }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cartItems] });
    },
    onError: (err: unknown) => {
      console.log(err);
      errorHandler(err);
    },
  });
}
