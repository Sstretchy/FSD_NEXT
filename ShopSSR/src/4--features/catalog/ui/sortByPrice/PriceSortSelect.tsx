'use client';

import { Select, Typography } from '@/src/6--shared/ui';
import { useRouter, useSearchParams } from 'next/navigation';
import { priceSortOptions } from './lib/options';

export const PriceSortSelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', 'price');
    params.set('order', value);
    router.push(`/catalog?${params.toString()}`);
  };

  return (
    <>
      <Typography as='h5'>Price</Typography>
      <Select
        options={priceSortOptions}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};
