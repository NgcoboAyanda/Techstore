import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//Define a service
export const authApi = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/accounts/'
    }),
    endpoints: builder => ({
        logIn: builder.query()
    })
})