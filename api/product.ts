import { webHttpClient } from "@/libs/tanstack/http/http-client";
import { FetchProductsResponse } from "@/types/product";
import { Endpoint } from "./endpoints";

export const fetchProducts = async (): Promise<FetchProductsResponse> => {
  return webHttpClient
    .get(Endpoint.fetchProducts)
    .json<FetchProductsResponse>();
};
