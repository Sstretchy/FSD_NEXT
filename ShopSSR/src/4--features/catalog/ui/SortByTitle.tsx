'use client';

import { Input, Typography } from '@/src/6--shared/ui';
import { useRouter, useSearchParams } from 'next/navigation';

export const SortByTitle = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());

    const value = e.target.value.trim();

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    router.push(`/catalog?${params.toString()}`);
  };

  return (
    <>
      <Typography as="h5">Title</Typography>
      <Input
        type="text"
        placeholder="Search by title..."
        defaultValue={searchParams.get('search') || ''}
        onChange={onChange}
      />
    </>
  );
};
