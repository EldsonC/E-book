import { ModalAddBookStyle } from "../../assets/styles/modal-add-book";
import { useDispatch } from "react-redux";
import { hideModalAddBook } from "../../redux/features/modalAddBook";
import { CloseIcon } from "../../assets/icons/close";
import { ImageIcon } from "../../assets/icons/image";

export function ModalAddBook() {
    const dispatch = useDispatch()

    const hideModal = () => {
        dispatch(hideModalAddBook())
    }
    return (
        <ModalAddBookStyle>
            <div className="conatiner-form">
                <header>
                    <span>New book</span>
                    <div className="btn-close" onClick={() => hideModal()} title="Close">
                        <CloseIcon/>
                    </div>
                </header>
                <form>
                    <div className="preview-image-cover">
                        <label htmlFor="image">
                            <ImageIcon/>
                            <span>Insert cover</span>
                        </label>
                        <input type="file" id="image"/>
                    </div>
                    <div className="data-input-book">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Author"/>
                        <input type="text" placeholder="Gender"/>
                        <input type="number" placeholder="Year"/>
                        <input type="number" placeholder="Pages"/>

                        <button>Add book</button>
                    </div>
                </form>
            </div>
        </ModalAddBookStyle>
    )
}