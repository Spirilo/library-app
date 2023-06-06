import { useEffect, useState } from "react"
import authorService from '../services/authors'

export const Admin = () => {
  const [value, setValue] = useState('')
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await authorService.getAll()
      setAuthors(data)
    }
    getData()
  }, [])

  const rows = authors.map(a => <option key={a.id}>{a.lastName}, {a.firstName}</option>)
  return(
    <div>
    <h2>Admin view</h2>
    <p>Choose what to add</p>
    <select onChange={ev => setValue(ev.target.value)} value={value}>
      <option value="">....</option>
      <option value="book">Book</option>
      <option value="author">Author</option>
    </select>
    {value === 'book' && 
      <div>
        <p>Title: <input type="text" /></p>
        <p>Year: <input type="number" /></p>
        Author: 
        <select>
          {rows}
        </select>
        <p><button>Add</button></p>
      </div>
    }
    {value === 'author' && 
      <div>
        <p>Firstname: <input type="text" /></p>
        <p>Lastname: <input type="number" /></p>
        <button>Add</button>
      </div>
    }
    </div>
  )
}