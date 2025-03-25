'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { categoryOptions } from './lib/options';
import { Select, Typography } from '@/src/6--shared/ui';

export const CategorySelectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category') || '';

  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', value);
    router.push(`/catalog?${params.toString()}`);
  };

  return (
    <>
      <Typography as='h5'>Category</Typography>
      <Select
        options={categoryOptions}
        value={currentCategory}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};
