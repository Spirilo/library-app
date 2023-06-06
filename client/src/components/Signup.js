import { useState } from "react"

export const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')


  return(
    <div>
      <h2>Create user</h2>
      <p><input type="text" placeholder="Username" onChange={ev => setUsername(ev.target.value)} /></p>
      <p><input type="password" placeholder="Password" onChange={ev => setPassword(ev.target.value)} /></p>
      <p><input type="password" placeholder="Confirm password" onChange={ev => setConfirmPass(ev.target.value)} /></p> 
      <button>Luo käyttäjä</button>
    </div>
  )
}