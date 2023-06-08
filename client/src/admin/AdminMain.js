import { useNavigate } from "react-router"

export const AdminMain = () => {

  const navigate = useNavigate()
  return(
    <div>
      <h2>Choose what to do: </h2>
      <button onClick={() => navigate("/admin/add")}>Add books/authors</button>
    </div>
  )
}