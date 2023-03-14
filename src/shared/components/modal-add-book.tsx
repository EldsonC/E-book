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
    const [ cover, setCover ] = useState<File | string>("")
    const [ name, setName ] = useState("")
    const [ author, setAuthor ] = useState("")
    const [ category, setCategory ] = useState("")
    const [ year, setYear ] = useState(0)
    const [ pages, setPages ] = useState(0)

    console.log(category)

    const hideModal = () => {
        dispatch(hideModalAddBook())
    }

    const [categories, setCategories] = useState([])

    useEffect(() => {
        api.get("/get-categories").then((result) => {
            setCategories(result.data)
        })
    }, [])

    const addBook = async (e:any) => {
        e.preventDefault()
        const formData = new FormData()
        
        formData.append("image", cover);
        formData.append("name", name);
        formData.append("author", author);
        formData.append("year", year.toString());
        formData.append("pages", pages.toString());
        formData.append("category_id", category);

        const headers = {
            'headers': {
                'Content-type': 'multipart/form-data'
            }
        }

        await api.post("/create-book", formData, headers)
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
                <form encType="multipart/form-data">
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
                                if (e.target.files instanceof FileList) {
                                    setCover(e.target.files[0])
                                }
                                showPreview(e)
                            }}
                        />
                    </div>
                    <div className="data-input-book">
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                        <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)}/>
                        <select name="categories" onChange={(e) => setCategory(e.target.value)}>
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
                        <input type="number" placeholder="Year" onChange={(e) => setYear(parseInt(e.target.value))}/>
                        <input type="number" placeholder="Pages" onChange={(e) => setPages(parseInt(e.target.value))}/>

                        <button onClick={(e) => addBook(e)}>Add book</button>
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