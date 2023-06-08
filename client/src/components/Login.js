import { UserContext } from "../App"
import { useContext, useState } from "react"
import loginService from '../services/login'
import { useNavigate } from "react-router"
import { Notification } from "./Notification"

export const Login = () => {
  const {user, setUser} = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const tryLogin = async () => {
    const user = {username, password}
    try {
      const data = await loginService.login(user)
      setUser(data)
      navigate("/")
    } catch (err) {
      setError(err.response.data.message)
      setTimeout(() => {
        setError(null)
      }, 5000) 
    }
  }

  return(
    <div>
      <h2>Login</h2>
      <Notification msg={error} />
      <p><input type="text" placeholder="Username" onChange={ev => setUsername(ev.target.value)} /></p>
      <p><input type="password" placeholder="Password" onChange={ev => setPassword(ev.target.value)} /></p>
      <button onClick={tryLogin}>Kirjaudu sisään</button>
    </div>
  )
}