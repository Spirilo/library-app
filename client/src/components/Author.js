import { useState, useEffect } from "react"
import authorService from '../services/authors'
import { Link, useNavigate } from "react-router-dom"

export const Author = () => {
  const [authors, setAuthors] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const authors = await authorService.getAll()
      setAuthors(authors)
    }
    getData()
  }, [])

  let rows = authors.map(a => <p key={a.id}>{a.lastName}, {a.firstName}
      <button onClick={() => navigate("/authordetail", {state:{a}})}>Click for books</button>
    </p>)

  return(
    <div>
      <h2>Kirjailijat</h2>
      {rows}
    </div>
  )
}