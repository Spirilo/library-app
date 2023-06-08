import { useNavigate } from "react-router"

export const AdminMain = () => {

  const navigate = useNavigate()
  return(
    <div>
      <h2>Valitse: </h2>
      <button onClick={() => navigate("/admin/add")}>Add books/authors</button>
      <button onClick={() => navigate("/admin/dlt")}>Delete books/authors</button>
    </div>
  )
}