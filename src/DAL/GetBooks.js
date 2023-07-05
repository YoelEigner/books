

export const GetBooks = async () => {
    return (await fetch('http://localhost:3001/api/books')).json();
}