import { ModalAddBookStyle } from "../../assets/styles/modal-add-book";
import { useDispatch } from "react-redux";
import { hideModalAddBook } from "../../redux/features/modalAddBook";
import { CloseIcon } from "../../assets/icons/close";
import { ImageIcon } from "../../assets/icons/image";
import { useEffect, useState } from "react";
import { api } from "../services/api";


interface CategoriesProps {
    name: string;
}
export function ModalAddBook() {
    const dispatch = useDispatch()

    const hideModal = () => {
        dispatch(hideModalAddBook())
    }

    const [categories, setCategories] = useState([])

    useEffect(() => {
        api.get("/get-categories").then((result) => {
            setCategories(result.data)
        })
    }, [])

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
                        <select name="categories">
                            <option value="undefined">
                                Undefined
                            </option>
                            {categories.map((dataCategories:CategoriesProps) => {
                                return (
                                    <option value={dataCategories.name}>
                                        {dataCategories.name}
                                    </option>
                                )
                            })}
                        </select>
                        <input type="number" placeholder="Year"/>
                        <input type="number" placeholder="Pages"/>

                        <button>Add book</button>
                        <button 
                            id="btn-delete-mobile"
                            onClick={() => hideModal()}
                        >
                            Cancelar
                        </button>

                    </div>
                </form>
            </div>
        </ModalAddBookStyle>
    )
}