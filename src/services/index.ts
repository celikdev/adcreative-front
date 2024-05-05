import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ClientBase = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
    endpoints: (builder) => ({}),
})