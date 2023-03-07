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

    const showPreview = (event:any) => {
        const src = URL.createObjectURL(event.target.files[0])
        const preview = document.getElementById("image-preview") as HTMLImageElement
        
        preview.style.display = "flex"
        preview.src = src

        const text_fill = document.querySelector("#image_fill") as HTMLDivElement;
        text_fill.style.display = "none"
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
                            <img id="image-preview"/>
                            <div id="image_fill">
                                <ImageIcon/>
                                <span>Insert cover</span>
                            </div>
                        </label>
                        <input 
                            type="file" 
                            id="image"
                            accept="image/png,image/jpeg,image/jpg"
                            onChange={(e) => {
                                showPreview(e)
                            }}
                        />
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