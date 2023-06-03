import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Book } from "../components/Book";
import { MainPage } from "./mainPage"
import { Author } from "../components/Author";
import { AuthorDetail } from "../components/AuthorDetail";
import { Login } from "../components/Login";


export const Main = () => {
  
  return(
    <div>
      <nav>
        <Link to="/">Etusivu</Link>{' '}
        <Link to="/books">Kirjat</Link>{' '}
        <Link to="/authors">Kirjailijat</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<Book />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/authordetail" element={<AuthorDetail />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  )
}