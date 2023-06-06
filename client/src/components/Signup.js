import { useState } from "react"
import { Notification } from "./Notification"

export const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [message, setMessage] = useState('')

  const create = () => {
    if (password !== confirmPass) {
      setMessage('Passwords don`t match!')
      setTimeout(() => {
        setMessage(null)
      },5000) 
    }

  }


  return(
    <div>
      <h2>Create user</h2>
      <Notification msg={message} />
      <p><input type="text" placeholder="Username" onChange={ev => setUsername(ev.target.value)} /></p>
      <p><input type="password" placeholder="Password" onChange={ev => setPassword(ev.target.value)} /></p>
      <p><input type="password" placeholder="Confirm password" onChange={ev => setConfirmPass(ev.target.value)} /></p> 
      <button onClick={create} >Luo käyttäjä</button>
    </div>
  )
}