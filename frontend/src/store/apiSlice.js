import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const prepareHeaders = (headers, { getState }) => {
  const { auth: { data: { token } } } = getState();

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  return headers;
};

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1',
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        method: 'POST',
        url: '/login',
        body: credentials,
      }),
    }),
    getChannels: builder.query({
      query: () => '/channels',
    }),
    getMessages: builder.query({
      query: () => '/messages',
      providesTags: ['Msg'],
    }),
    addMessage: builder.mutation({
      query: (message) => ({
        method: 'POST',
        url: '/messages',
        body: message,
      }),
      invalidatesTags: ['Msg'],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetChannelsQuery,
  useGetMessagesQuery,
  useAddMessageMutation,
} = apiSlice;

export default apiSlice;
