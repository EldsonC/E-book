import { createSlice } from "@reduxjs/toolkit";

interface StateModal {
    modalbook: {
        idBook: string;
        show: boolean;
        top: number;
        left: number;
    }
}

export const slice = createSlice({
    name: "modalbook",
    initialState: {
        idBook: "",
        show: false,
        top: 0,
        left: 0
    },

    reducers: {
        showModalBook(state, {payload}) {
            return { 
                ...state, 
                show: true, 
                idBook: payload[0].idBook, 
                top: payload[0].top, 
                left: payload[0].left     
            }
        },

        hideModalBook(state) {
            return { 
                ...state, 
                show: false, 
                idBook: "",
                top: 0,
                left: 0
            }
        }
    }
})


export const { showModalBook, hideModalBook } = slice.actions
export const stateModal = (state:StateModal) => state.modalbook.show
export const top = (state:StateModal) => state.modalbook.top
export const left = (state:StateModal) => state.modalbook.left
export default slice.reducer