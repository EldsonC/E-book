import { configureStore } from "@reduxjs/toolkit"
import detailsbookSlice from "./features/detailsbookSlice"
import modalAddBook from "./features/modalAddBook"
import modalCardBookSlice from "./features/modalCardBookSlice"
import searchSlice from "./features/searchSlice"

export default configureStore({
    reducer: {
        modalbook: modalCardBookSlice,
        search: searchSlice,
        modaladdbook: modalAddBook,
        detailsbook: detailsbookSlice
    }
})