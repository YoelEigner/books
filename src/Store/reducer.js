const rootReducer = (state = {
    books: null,
    bookOfDay: null,
    msgs:[]

}, action) => {
    switch (action.type) {
        case "SAVE_BOOKS_DATA":
            return { ...state, books: action.books }
        case "SAVE_BOOK_OF_DAY":
            return { ...state, bookOfDay: action.bookOfDay }
        case "SAVE_MESSAGES":
            const newMsg = action.message;
            const updatedMessages = [...state.msgs, newMsg];
            return { ...state, msgs: updatedMessages };
        case "DELETE_ALL":
            let clear = {
                books: null,
                bookOfDay: null,
                msgs: []
            }
            return { ...state, state: clear }
        default:
            return state;
    }
};

export default rootReducer;
