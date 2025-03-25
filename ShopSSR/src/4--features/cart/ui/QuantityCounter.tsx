'use client';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantityFromCart } from '../model/slice';
import { ICartProduct } from '../model/types';

interface QuantityCounterProps {
  product: ICartProduct;
}

export const QuantityCounter = ({ product }: QuantityCounterProps) => {
  const dispatch = useDispatch();
  const quantity = useSelector(
    (state: RootState) =>
      state.cart.products.find((p) => p.id === product.id)?.quantity || 0
  );

  const onDecrement = () => {
    dispatch(decrementQuantityFromCart({ ...product }));
  };

  const onIncrement = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className='flex items-center gap-2'>
      <button
        onClick={quantity ? onDecrement : undefined}
        className='w-8 h-8 rounded bg-gray-200 text-gray-700 hover:bg-gray-300'
      >
        –
      </button>
      <span className='w-8 text-center font-medium'>{quantity}</span>
      <button
        onClick={onIncrement}
        className='w-8 h-8 rounded bg-gray-200 text-gray-700 hover:bg-gray-300'
      >
        +
      </button>
    </div>
  );
};
