import React from "react";
import bookService from '../services/books'

export const Book = () => {
  const [books, setBooks] = React.useState([])

  console.log(books)

  React.useEffect( () => {
    const getData = async () => {
      const data = await bookService.getAll()
      setBooks(data)
    }
    getData()
  }, [])

  let rows = books.map(b => <p key={b.id}>{b.title} {b.year}</p>)

  return(
    <div>
      <h2>Kirjat</h2>
      {rows}
    </div>
  )
}