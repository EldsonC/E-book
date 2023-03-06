import { configureStore } from "@reduxjs/toolkit"
import modalCardBookSlice from "./features/modalCardBookSlice"

export default configureStore({
    reducer: {
        modalbook: modalCardBookSlice
    }
})