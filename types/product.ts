export type ProductData = {
  color?: string;
  capacity?: string;
  price?: number;
  year?: number;
};

export type Product = {
  name: string;
  id: string;
  data: ProductData | null;
};

export type FetchProductsResponse = Product[];
