import { UserContext } from "../App"
import { useContext, useState } from "react"
import loginService from '../services/login'

export const Login = () => {
  const {user, setUser} = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const tryLogin = async () => {
    const user = {username, password}
    try {
      const data = await loginService.login(user)
      console.log(data)
      setUser(data)
    } catch (err) {
      setError(err.response.data.message)
      console.log(error)
    }
  }

  return(
    <div>
      <h2>Login</h2>
      <p><input type="text" placeholder="Username" onChange={ev => setUsername(ev.target.value)} /></p>
      <p><input type="password" placeholder="Password" onChange={ev => setPassword(ev.target.value)} /></p>
      <button onClick={tryLogin}>Kirjaudu sisään</button>
    </div>
  )
}