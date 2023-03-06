import { ModalAddBookStyle } from "../../assets/styles/modal-add-book";
import { useDispatch } from "react-redux";
import { hideModalAddBook } from "../../redux/features/modalAddBook";
import { CloseIcon } from "../../assets/icons/close";

export function ModalAddBook() {
    const dispatch = useDispatch()

    const hideModal = () => {
        dispatch(hideModalAddBook())
    }
    return (
        <ModalAddBookStyle>
            <div className="conatiner-form">
                <header>
                    <div className="btn-close" onClick={() => hideModal()}>
                        <CloseIcon/>
                    </div>
                </header>
            </div>
        </ModalAddBookStyle>
    )
}