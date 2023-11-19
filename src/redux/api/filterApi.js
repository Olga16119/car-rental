import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const filterAPI = createApi({
  reducerPath: 'makesFilter',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getMakesFilter: builder.query({
      query: () => ({ url: '/makesFilter' }),
    }),
  }),
});

export default filterAPI;
export const { useGetMakesFilterQuery } = filterAPI;