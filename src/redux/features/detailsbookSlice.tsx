import { createSlice } from "@reduxjs/toolkit";

interface DetailsBookProps {
    detailsbook: {
        cover: string;
        name: string;
        author: string;
        year: number;
        pages: number;
        category: string;
    }
}

export const slice = createSlice({
    name: "detailsbook",
    initialState: {
        cover: "",
        name: "All books",
        author: "",
        year: 0,
        pages: 0,
        category: ""
    },

    reducers: {
        setDetails(state, {payload}) {
            return {
                ...state,
                cover: payload[0].cover,
                name: payload[0].name,
                author: payload[0].author,
                year: payload[0].year,
                pages: payload[0].pages,
                category: payload[0].category
            }
        },

        removeDetails(state) {
            return {
                ...state,
                cover: "",
                name: "",
                author: "",
                year: 0,
                pages: 0,
                category: ""
            }
        }
    }
})

export const { setDetails, removeDetails } = slice.actions
export const dataDetails = (state:DetailsBookProps) => state.detailsbook

export default slice.reducer