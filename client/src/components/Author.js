import { useState, useEffect } from "react"
import authorService from '../services/authors'

export const Author = () => {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const getData = async () => {
      const authors = await authorService.getAll()
      setAuthors(authors)
    }
    getData()
  }, [])

  let rows = authors.map(a => <p key={a.id}>{a.lastName}, {a.firstName}
      <input type="button" value="Click for books"/>
    </p>)

  return(
    <div>
      <h2>Kirjailijat</h2>
      {rows}
    </div>
  )
}