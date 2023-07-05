

export const GetBookOfDay = async () => {
    return (await fetch('http://localhost:3001/api/bookofday')).json();
}