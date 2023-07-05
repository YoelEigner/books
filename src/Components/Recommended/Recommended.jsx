import { useSelector } from "react-redux";
import { NavBar } from "../NavBar"
import { useNavigate } from "react-router-dom";


export const Recommended = () => {
    const books = useSelector((state) => state.books);
    const navigate = useNavigate();
    const recommendedBooks = books.map((book) => book).sort((a, b) => b.rating - a.rating).slice(0, 5);

    const handleClick = (id) => {
        navigate(`/book/${id}`)
    }
    return (
        <div >
            <NavBar />
            <h1 >Recommended Books</h1>
            <div className="books-container">
                {recommendedBooks.map((book) => {
                    return (
                        <div key={book._id} className="card mx-auto my-3" style={{ width: '18rem' }} onClick={() => { handleClick(book._id) }}>
                            <img className="card-img-top" src={book.image} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Title: {book.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}