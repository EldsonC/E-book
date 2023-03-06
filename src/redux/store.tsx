import { configureStore } from "@reduxjs/toolkit"
import modalAddBook from "./features/modalAddBook"
import modalCardBookSlice from "./features/modalCardBookSlice"
import searchSlice from "./features/searchSlice"

export default configureStore({
    reducer: {
        modalbook: modalCardBookSlice,
        search: searchSlice,
        modaladdbook: modalAddBook
    }
})