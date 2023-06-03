import { UserContext } from "../App"
import { useContext, useState } from "react"

export const Login = () => {
  const {user, setUser} = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return(
    <div>
      <h2>Login</h2>
      <p><input type="text" placeholder="Username" onChange={ev => setUsername(ev.target.value)} /></p>
      <p><input type="password" placeholder="Password" onChange={ev => setPassword(ev.target.value)} /></p>
      <button>Kirjaudu sisään</button>
    </div>
  )
}