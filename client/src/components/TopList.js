import { useEffect, useState } from "react"
import bookService from '../services/books'

export const TopList = () => {
  const [books, setBooks] = useState([])

  console.log(books)
  useEffect(() => {
    const getData = async () => {
      const data = await bookService.getTopList()
      setBooks(data)
    }
    getData()
  }, [])
  
  return(
    <div>
      <h3>Top 5 lainatut:</h3>
      {books.map(b => (
        <p key={b.id}>{b.title}, lainattu {b.loans} kertaa</p>
      ))}
    </div>
  )
}