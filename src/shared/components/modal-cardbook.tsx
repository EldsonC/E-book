import { BookCardStyle } from "../../assets/styles/book-card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideModalBook } from "../../redux/features/modalCardBookSlice";

import { top, left } from "../../redux/features/modalCardBookSlice";

export function ModalCardBook() {
    const positionTop = useSelector(top)
    const positionLeft = useSelector(left)

    const dispatch = useDispatch()

    const hideModal = () => {
        dispatch(hideModalBook())
    }

    return (
        <BookCardStyle style={{
            position: "absolute",
            top: positionTop,
            left: positionLeft
        }} onMouseLeave={() => hideModal()}>
            <div className="modal-card">
                <button>
                    View More
                </button>
            </div>
        </BookCardStyle>
    )
}