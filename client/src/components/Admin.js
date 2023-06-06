import { useState } from "react"

export const Admin = () => {
  const [value, setValue] = useState('')

  console.log(value)
  return(
    <div>
    <h2>Admin view</h2>
    <p>Choose what to add</p>
    <select onChange={ev => setValue(ev.target.value)} value={value}>
      <option value="">....</option>
      <option value="book">Book</option>
      <option value="author">Author</option>
    </select>
    </div>
  )
}