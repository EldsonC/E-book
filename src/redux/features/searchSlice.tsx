import { createSlice } from "@reduxjs/toolkit";

interface SearchProps {
    search: {
        find: string;
    }
}

export const slice = createSlice({
    name: "search",
    initialState: {
        find: ""
    },

    reducers: {
        findBook(state, {payload}) {
            return {
                ...state,
                find: payload
            }
        }
    }
})

export const { findBook } = slice.actions
export const bookFound = (state:SearchProps) => state.search.find

export default slice.reducer