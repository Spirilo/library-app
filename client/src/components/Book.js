import React from "react";
import bookService from '../services/books'

export const Book = () => {
  const [books, setBooks] = React.useState([])
  const [filter, setFilter] = React.useState('')

  console.log(filter)
  console.log(books)

  React.useEffect( () => {
    const getData = async () => {
      const data = await bookService.getAll(filter)
      setBooks(data)
    }
    getData()
  }, [filter])

  const loanBook = async book => {
    book.available = 0
    const data = await bookService.save(book)
    console.log(data)
  }

  const returnBook = async book => {
    book.available = 1
    const data = await bookService.save(book)
    console.log(data)
  }

  let rows = books.map(b => b.available === 1 ? 
  <p key={b.id}>{b.title} {b.year} <button onClick={() => loanBook(b)}>Lainaa</button></p>
  :
  <p key={b.id}>{b.title} {b.year} <b>Lainassa</b> <button onClick={() => returnBook(b)}>Palauta</button></p>)

  return(
    <div>
      <h2>Kirjat</h2>
      <b>Etsi kirjoja nimen perusteella</b> <input value={filter} onChange={ev => setFilter(ev.target.value)} />
      {rows}
    </div>
  )
}