import { ICartProduct } from '../model/types';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../model/slice';
import { Button } from '@/src/6--shared/ui';

interface ClearCart {
  product: ICartProduct;
}

export const ClearCart = ({ product }: ClearCart) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <Button onClick={onDelete}>Delete</Button>
  );
};
