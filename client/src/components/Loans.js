import { useContext } from "react"
import { UserContext } from "../App"

export const Loans = () => {
  const {user} = useContext(UserContext)
  return(
    <div>
      <h2>Loans</h2>
      {}
    </div>
  )
}