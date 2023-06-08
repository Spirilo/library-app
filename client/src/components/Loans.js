import { useContext, useEffect, useState } from "react"
import { UserContext } from "../App"
import bookService from "../services/books"

export const Loans = () => {
  const {user} = useContext(UserContext)
  const [books, setBooks] = useState([])

  console.log(books)
  useEffect(() => {
    const getData = async () => {
      const data = await bookService.getUserBooks(user.id)
      setBooks(data)
    }
    getData()
  }, [])

  return(
    <div>
      <h2>Loans at the moment: </h2>
      {books.map(b => (
        <p>{b.title}</p>
      ))}
    </div>
  )
}