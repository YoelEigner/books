

export const BookDetails = (props) => {
    const { bookOfDay } = props
    return (
        <div className="book-details">
            <h4>Book Of The Day</h4>
            <div className="border  ">
                <div><b>Title:</b> {bookOfDay.title}</div>
                <div><b>Auther:</b> {bookOfDay.author}</div>
                <div><b>Librarian Review:</b> {bookOfDay.review}</div>
                <img src={bookOfDay.image}/>

            </div>
        </div>
    )
}