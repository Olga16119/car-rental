import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const advertsApi = createApi({
  reducerPath: 'adverts',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getAll: builder.query({
      query: () => ({ url: '/adverts' }),
    }),
  }),
});

export default advertsApi;
export const { useGetByQuery, useGetAllQuery } = advertsApi;