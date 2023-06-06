import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Book } from "../components/Book";
import { MainPage } from "./mainPage"
import { Author } from "../components/Author";
import { AuthorDetail } from "../components/AuthorDetail";
import loginService from "../services/login"
import { useContext } from "react";
import { UserContext } from "../App";
import { Admin } from "../components/Admin";


export const Main = () => {
  const {user, setUser} = useContext(UserContext)

  const logout = async () => {
    const data = await loginService.logOut()
    setUser(null)

  }
  
  return(
    <div>
      <nav>
        <Link to="/">Etusivu</Link>{' '}
        <Link to="/books">Kirjat</Link>{' '}
        <Link to="/authors">Kirjailijat</Link>{' '}
        {user.role === 'admin' &&<Link to="/admin">Admin</Link>}{' '}
        Logged in as: {user.username}{' '}
        <button onClick={logout}>Kirjaudu ulos</button>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<Book />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/authordetail" element={<AuthorDetail />} />
        <Route path="/admin" element={<Admin />} />
    </Routes>
    </div>
  )
}