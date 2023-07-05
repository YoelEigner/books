import notes from '../../Data/Notes.json'

export const Notes = () => {

    return (
        <div className='notes-container'>
            <h2>Librarian  Notes</h2>
            <ul >
                {notes.notes.map((note) => {
                    return (
                        <li key={note.id}className="list-li">
                            <span className="list-text"> {note.title}:</span>
                            <span> {note.content}</span>

                        </li>)
                })}
            </ul>
        </div>
    )
}