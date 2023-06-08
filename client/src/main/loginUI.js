import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "../components/Login"
import { SignUp } from "../components/Signup";

export const LoginUI = () => {
  return(
    <div>
    <nav>
      <Link className="link" to="/login">Kirjaudu sisään</Link>{' '}
      <Link className="link" to="/create">Luo käyttäjä</Link>
    </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<SignUp />} />
      </Routes>
    </div>
  )
}