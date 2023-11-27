// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type Product, type HomeData, type ContentItem } from "./types";

// Define a service using a base URL and expected endpoints
export const homepageApi = createApi({
  reducerPath: "homepage",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/home" }),
  endpoints: (builder) => ({
    getHomePage: builder.query<HomeData, string>({
      query: () => `/`,
    }),

    getCategory: builder.query<ContentItem, string>({
      query: () => "/Category",
    }),
    getFlashSales: builder.query<ContentItem, string>({
      query: () => "/Flash_Sales",
    }),
    getBestSelling: builder.query<ContentItem, string>({
      query: () => "/BestSelling",
    }),
    getExplore: builder.query<ContentItem, string>({
      query: () => "/Explore",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetHomePageQuery,
  useGetCategoryQuery,
  useGetFlashSalesQuery,
  useGetBestSellingQuery,
  useGetExploreQuery,
} = homepageApi;
