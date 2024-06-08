import { useMutation, useQueryClient } from 'react-query';

import END_POINTS from '@apis/EndPoints';
import QUERY_KEYS from '@hooks/queryKeys';

interface Props {
  errorHandler: (err: unknown) => void;
}
export default function useAddToCart({ errorHandler }: Props) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: number) =>
      fetch(END_POINTS.cartItem, {
        method: 'post',
        body: JSON.stringify({
          productId,
          quantity: 1,
        }),
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cartItems] });
    },
    onError: (err: unknown) => {
      console.log(err);
      errorHandler(err);
    },
  });
}
