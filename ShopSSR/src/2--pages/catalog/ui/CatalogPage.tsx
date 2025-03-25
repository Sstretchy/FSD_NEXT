import { FilterBlock } from '@/src/3--widgets/catalog';
import Layout from './Layout';
import { ICartProduct, QuantityCounter } from '@/src/4--features/cart';
import { buildUrl } from '@/src/6--shared/api';
import { IProduct, ProductCard, ProductList } from '@/src/5--entities/product';

type CatalogSearchParams = {
  category?: string;
  search?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
  order?: string;
  page?: string;
  limit?: string;
};

export const CatalogPage = async ({
  searchParams,
}: {
  searchParams: CatalogSearchParams;
}) => {
  const params = await searchParams;
  const url = buildUrl(`${process.env.NEXT_PUBLIC_API_URL}/products`, params);

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Ошибка загрузки каталога');
  }

  const products = await res.json();

  return (
    <Layout>
      <aside>
        <FilterBlock />
      </aside>
      <main>
        <ProductList
          products={products}
          renderItem={(product) => (
            <ProductCard
              key={product.id}
              product={product as IProduct}
              actions={<QuantityCounter product={product as ICartProduct} />}
            />
          )}
        />
      </main>
    </Layout>
  );
};
