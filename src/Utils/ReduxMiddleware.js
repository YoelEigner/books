import { GetBookOfDay } from "../DAL/BookOfDay"
import { GetBooks } from "../DAL/GetBooks"

export const SaveBooks = () => {
    return async (dispatch) => {
        try {
            const books = await GetBooks()
            dispatch({ type: 'SAVE_BOOKS_DATA', books })
        } catch (err) {
            console.log('About Data: err in Save Books Data', err)
        }
    }
}
export const SaveBookOfDay = () => {
    return async (dispatch) => {
        try {
            const bookOfDay = await GetBookOfDay()
            dispatch({ type: 'SAVE_BOOK_OF_DAY', bookOfDay })
        } catch (err) {
            console.log('About Data: err in Save Book of day Data', err)
        }
    }
}
export const SaveMessages = (message) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SAVE_MESSAGES', message })
        } catch (err) {
            console.log('About Data: err in Save message Data', err)
        }
    }
}