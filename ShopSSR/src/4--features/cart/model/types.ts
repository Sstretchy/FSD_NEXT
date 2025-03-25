import { IProduct } from "@/src/5--entities/product";

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICartProductState {
  products: ICartProduct[];
}

