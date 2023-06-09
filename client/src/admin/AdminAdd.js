import { useEffect, useState } from "react"
import authorService from '../services/authors'
import bookService from '../services/books'
import { useNavigate } from "react-router"

export const Admin = () => {
  const [value, setValue] = useState('')
  const [authors, setAuthors] = useState([])
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [authorForBook, setAuthorForBook] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const data = await authorService.getAll()
      setAuthors(data)
    }
    getData()
  }, [value])

  const addAuthor = async () => {
    const author = {firstName: firstname, lastName: lastname}
    const data = await authorService.create(author)
    setFirstname('')
    setLastname('')
  }

  const addBook = async () => {
    if (authorForBook === 0) setAuthorForBook(null)
    const book = {title: title, year: year, authorId: authorForBook}
    const data = await bookService.create(book)
    setTitle('')
    setYear('')
  }

  const rows = authors.map(a => <option key={a.id} value={a.id}>{a.lastName}, {a.firstName}</option>)
  return(
    <div>
    <h2>Admin</h2>
    <div className="main">
      <p>Valitse mitä lisäät</p>
      <select onChange={ev => setValue(ev.target.value)} value={value}>
        <option value="">....</option>
        <option value="book">Book</option>
        <option value="author">Author</option>
      </select>
      <button onClick={() => navigate(-1)}>Palaa</button>
      {value === 'book' && 
        <div>
          <p>Title: <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} /></p>
          <p>Year: <input type="number" value={year} onChange={ev => setYear(ev.target.value)} /></p>
          Author: 
          <select value={authorForBook} onChange={ev => setAuthorForBook(ev.target.value)}>
            <option value="">....</option>
            {rows}
          </select>
          <p><button onClick={addBook}>Add</button></p>
        </div>
      }
      {value === 'author' && 
        <div>
          <p>Firstname: <input type="text" value={firstname} onChange={ev => setFirstname(ev.target.value)} /></p>
          <p>Lastname: <input type="text" value={lastname} onChange={ev => setLastname(ev.target.value)} /></p>
          <button onClick={addAuthor}>Add</button>
        </div>
      }
      </div>
    </div>
  )
}