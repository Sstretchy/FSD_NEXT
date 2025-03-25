'use client';

import { ClearCart, ICartProduct, QuantityCounter } from '@/src/4--features/cart';
import { IProduct } from '@/src/5--entities/product';
import { ProductCard, ProductList } from '@/src/5--entities/product';
import { Typography } from '@/src/6--shared/ui';
import { useSelector } from 'react-redux';

export const Cart = () => {
  const { products } = useSelector((state: RootState) => state.cart);

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <Typography as='h2'>🛒 Cart</Typography>

      <ProductList
        products={products}
        renderItem={(product) => (
          <ProductCard
            key={product.id}
            product={product as IProduct}
            actions={
              <div className='flex justify-between pt-4'>
                <QuantityCounter product={product as ICartProduct} />
                <ClearCart product={product as ICartProduct}/>
              </div>
            }
          />
        )}
      />

      <div className='flex items-center justify-between mt-6 border-t pt-4'>
        <span className='text-xl font-semibold'>
          Total: ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
