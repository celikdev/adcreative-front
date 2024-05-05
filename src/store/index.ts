import { configureStore } from "@reduxjs/toolkit";
import { ClientBase } from "../services";

export const store = configureStore({
    reducer: {
        [ClientBase.reducerPath]: ClientBase.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(ClientBase.middleware)
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch