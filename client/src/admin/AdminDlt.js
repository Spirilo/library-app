import { useEffect, useState } from "react"

export const AdminDlt = () => {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])

  return(
    <div>
      <h2>Poista</h2>
      <div className="grid-container">
      <div className="grid-child">
        <p>Kirjat</p>
      </div>
      <div className="grid-child">
        <p>Kirjailijat</p>
      </div>
      </div>
    </div>
  )
}