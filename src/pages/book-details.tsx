import { BookDetailsStyle } from "../assets/styles/book-details";

export function BookDetails() {
    return (
        <BookDetailsStyle>
            <div className="cover-bg">
                <img src="https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <div className="container-left">
                <div className="cover-book">
                    <img src="https://149868225.v2.pressablecdn.com/wp-content/uploads/2022/11/Moody-Adventure-Fantasy-Fiction-Book-Cover-642x1024.jpg" alt="" />
                </div>
            </div>
            <div className="container-right">

            </div>
        </BookDetailsStyle>
    )
}