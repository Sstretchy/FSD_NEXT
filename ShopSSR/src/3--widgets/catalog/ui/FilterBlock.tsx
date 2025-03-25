import {
  CategorySelectFilter,
  PriceSortSelect,
  SortByTitle,
} from '@/src/4--features/catalog';

export const FilterBlock = () => {
  return (
    <div className='space-y-4'>
      <SortByTitle />
      <CategorySelectFilter />
      <PriceSortSelect />
    </div>
  );
};
