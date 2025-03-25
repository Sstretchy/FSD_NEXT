import { IProduct } from "../model/types";
import { ProductCard } from "./ProductCard";

export const ProductList = ({
  products,
  renderItem,
}: {
  products: IProduct[];
  renderItem?: (product: IProduct) => React.ReactNode;
}) => {
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) =>
        renderItem ? renderItem(product) : <ProductCard key={product.id} product={product} />
      )}
    </div>
  );
};
