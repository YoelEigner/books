import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar";

export const Books = () => {
    const books = useSelector((state) => state.books);
    const navigate = useNavigate();
    const handleClick = (id) => {
        console.log(id)
        navigate(`/book/${id}`)
    }
    return (
        <div>
            <NavBar/>
            <div className="books-container">
                {books.map((book) => {
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