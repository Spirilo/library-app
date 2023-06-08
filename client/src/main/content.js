import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Book } from "../components/Book";
import { MainPage } from "./mainPage"
import { Author } from "../components/Author";
import { AuthorDetail } from "../components/AuthorDetail";
import loginService from "../services/login"
import { useContext } from "react";
import { UserContext } from "../App";
import { Admin } from "../admin/AdminAdd";
import { Loans } from "../components/Loans";
import { AdminMain } from "../admin/AdminMain";


export const Main = () => {
  const {user, setUser} = useContext(UserContext)

  const logout = async () => {
    const data = await loginService.logOut()
    setUser(null)

  }
  
  return(
    <div>
      <nav>
        <Link className="link" to="/">Etusivu</Link>{' '}
        <Link className="link" to="/books">Kirjat</Link>{' '}
        <Link className="link" to="/authors">Kirjailijat</Link>{' '}
        <Link className="link" to="/loans">Omat lainat</Link>{' '}
        {user.role === 'admin' &&<Link className="link" to="/admin">Admin</Link>}{' '}
        Welcome back {user.username}!{' '}
        <button onClick={logout}>Kirjaudu ulos</button>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<Book />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/authordetail" element={<AuthorDetail />} />
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/admin/add" element={<Admin />} />
        <Route path="/loans" element={<Loans />} />
    </Routes>
    </div>
  )
}