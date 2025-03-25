import Image from 'next/image';
import { IProduct } from '../model/types';
import { ReactNode } from 'react';

interface Props {
  product: IProduct;
  actions?: ReactNode;
}

export const ProductCard = ({ product, actions }: Props) => {
  return (
    <div className='rounded-2xl shadow-md border p-4 flex flex-col gap-3 hover:shadow-lg transition-all'>
      <div className='w-full h-48 relative'>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className='object-contain'
        />
      </div>

      <h3 className='text-lg font-semibold line-clamp-2'>{product.title}</h3>

      <p className='text-gray-500 text-sm line-clamp-2'>
        {product.description}
      </p>

      <div className='mt-auto flex items-center justify-between'>
        <span className='text-xl font-bold'>${product.price}</span>
        <span className='text-xs text-white bg-blue-600 px-2 py-1 rounded-md'>
          {product.category}
        </span>
      </div>
      {actions}
    </div>
  );
};
