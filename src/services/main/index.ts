import { ClientBase } from "..";

export const rickAndMortyApi = ClientBase.injectEndpoints({
    endpoints: (builder) => ({
        getCharacters: builder.query<any, void>({
            query: () => `/character`,
            // @ts-ignore
            providesTags: (_) => ["Character"],
        }),
        getCharacter: builder.query<any, string>({
            query: (query) => `/character/?name=${query}`,
        }),
    }),
})

export const { useGetCharactersQuery, useGetCharacterQuery } = rickAndMortyApi