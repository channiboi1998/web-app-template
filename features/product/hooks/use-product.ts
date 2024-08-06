import { fetchProducts } from "@/api/product";
import { QueryKey } from "@/contants/query-key";
import { useQuery } from "@tanstack/react-query";

export const useProduct = () => {
  return useQuery({
    queryKey: [QueryKey.FETCH_PRODUCTS],
    queryFn: fetchProducts,
  });
};
