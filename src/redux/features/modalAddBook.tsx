import { createSlice } from "@reduxjs/toolkit";

interface StateModal {
    modaladdbook: {
        show: boolean
    }
}

export const slice = createSlice({
    name: "modaladdbook",
    initialState: {
        show: false
    },

    reducers: {
        showModalAddBook(state) {
            return {
                ...state,
                show: true
            }
        },

        hideModalAddBook(state) {
            return {
                ...state,
                show: false
            }
        }
    }
})

export const { showModalAddBook, hideModalAddBook } = slice.actions
export const stateModalAddBook = (state:StateModal) => state.modaladdbook.show

export default slice.reducer