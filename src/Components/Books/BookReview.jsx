import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavBar } from "../NavBar";


export const BookReview = () => {
    const { id } = useParams();
    const books = useSelector((state) => state.books);
    const book = books.find((book) => book._id === id);

    return (
        <div>
            <NavBar />
            <div className="book-review-container">
                <div className="card text-left " style={{ width: '18rem' }}>
                    <img className="card-img-top" src={book.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"><b>{book.title}</b></h5>
                        <p className="card-text "><b>Published on:</b> {book.publishing_date}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item "><b>Author: {book.author}</b></li>
                        <li className="list-group-item "><b>Rating: {book.rating}</b></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}