import { useEffect, useState } from "react"
import bookService from '../services/books'
import authorService from '../services/authors'
import { useNavigate } from "react-router"

export const AdminDlt = () => {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const bdata = await bookService.getAll('')
      const adata = await authorService.getAll()
      setBooks(bdata)
      setAuthors(adata)
    }
    getData()
  }, [])

  const deleteBook = async id => {
    const data = await bookService.dlt(id)
  }

  const deleteAuthor = async id => {
    const data = await authorService.dlt(id)
  }

  return(
    <div>
      <h2>Poista</h2>
      <button onClick={() => navigate(-1)}>Palaa</button>
      <div className="grid-container">
        <div className="main">
          <b>Kirjat</b>
          {books.map(b => (
            <p key={b.id}>{b.title} <button onClick={() => deleteBook(b.id)}>Poista</button></p>
          ))}
        </div>
        <div className="main">
          <b>Kirjailijat</b>
          {authors.map(a => (
            <p key={a.id}>{a.lastName}, {a.firstName} <button onClick={() => deleteAuthor(a.id)}>Poista</button></p>
          ))}
        </div>
      </div>
    </div>
  )
}