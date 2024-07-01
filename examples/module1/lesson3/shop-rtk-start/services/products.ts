import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../types/Product.ts';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => `products`,
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
})
export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi

export default productsApi.reducer;
