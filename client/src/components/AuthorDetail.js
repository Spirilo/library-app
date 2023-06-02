import { useEffect, useState } from "react";
import { useLocation } from "react-router"
import authorService from "../services/authors"

export const AuthorDetail = () => {
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(true)
  
  console.log(author)
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const data = await authorService.get(location.state.a.id)
      setAuthor(data)
      setLoading(false)
    }
    getData()
  }, [])

  if (loading) return <h2>Loading...</h2>

  console.log(location)
  return(
    <div>
      <h2>Kirjailija</h2>
      <h3>{author.lastName}, {author.firstName}</h3>
      <b>Kirjailijan kirjat kirjastossa</b>
      {author.books.map(b => (
        <p>Kirja: {b.title}, julkaistu: {b.year}</p>
      ))}
    </div>
  )
}