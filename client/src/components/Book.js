import {useState, useEffect, useContext } from "react";
import { UserContext } from "../App"
import bookService from '../services/books'

export const Book = () => {
  const {user, setUser} = useContext(UserContext)
  const [books, setBooks] = useState([])
  const [filter, setFilter] = useState('')
  const [fetch, setFetch] = useState(true)

  useEffect( () => {
    const getData = async () => {
      const data = await bookService.getAll(filter)
      setBooks(data)
    }
    getData()
  }, [filter, fetch])

  const loanBook = async book => {
    book.available = 0
    book.userId = user.id
    book.loans +=1
    const data = await bookService.save(book)
    setFetch(prevFetch => !prevFetch)
  }

  const returnBook = async book => {
    book.available = 1
    book.userId = null
    await bookService.save(book)
    setFetch(prevFetch => !prevFetch)
  }

  let rows = books.map(b => b.available === 1 ? 
  <p key={b.id}>{b.title} {b.year} <button onClick={() => loanBook(b)}>Lainaa</button></p>
  :
  b.userId === user.id ?
    <p key={b.id}>{b.title} {b.year} <b>Lainassa</b> <button onClick={() => returnBook(b)}>Palauta</button></p>
    :
    <p key={b.id}>{b.title} {b.year} <b>Lainassa</b></p>)

  return(
    <div>
      <h2>Kirjat</h2>
      <div className="main">
        <b>Etsi kirjoja nimen perusteella</b> <input value={filter} onChange={ev => setFilter(ev.target.value)} />
        {rows}
      </div>
    </div>
  )
}