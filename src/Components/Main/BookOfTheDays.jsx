import { useSelector } from "react-redux";
import { BookDetails } from "./BookDetails";


export const BookOfTheDay = () => {
    const bookOfDay = useSelector((state) => state.bookOfDay);
    return (
        <div className="d-flex justify-content-center margin-bottom">
            <BookDetails bookOfDay={bookOfDay} />
        </div>
    )
}