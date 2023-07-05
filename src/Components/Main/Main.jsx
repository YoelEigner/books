import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { SaveBookOfDay, SaveBooks } from "../../Utils/ReduxMiddleware";
import { Notes } from "./Notes";
import { BookOfTheDay } from "./BookOfTheDays";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar";
import { Notifications } from "../Notifications";


export const Main = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);
    const navigate = useNavigate();
    useEffect(() => {
        const getBooks = async () => {
            const books = await dispatch(SaveBooks());
            const bookOfDay = await dispatch(SaveBookOfDay());
        }
        getBooks();
    }, [])

    return (
        <div>
            <NavBar />
            {books &&
                <div className="row">
                    <div className="col"><Notes /></div>
                    <div className="col"><Notifications /></div>
                </div>}
            {books && <BookOfTheDay />}
            
        </div>
    )
}