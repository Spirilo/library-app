import { useContext, useEffect, useState } from "react"
import { UserContext } from "../App"
import bookService from "../services/books"

export const Loans = () => {
  const {user} = useContext(UserContext)
  const [books, setBooks] = useState([])

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
      {books.length === 0 && <p>Ei lainoja</p>}
      {books.map(b => (
        <p key={b.id}>{b.title}</p>
      ))}
    </div>
  )
}