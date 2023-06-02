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

  let rows = books.map(b => <p key={b.id}>{b.title} {b.year}</p>)

  return(
    <div>
      <h2>Kirjat</h2>
      <b>Etsi kirjoja nimen perusteella</b> <input value={filter} onChange={ev => setFilter(ev.target.value)} />
      {rows}
    </div>
  )
}