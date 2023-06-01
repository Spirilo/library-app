import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Book } from "../components/Book";
import { MainPage } from "./mainPage";


export const Main = () => {
  
  return(
    <div>
    <nav>
      <Link to="/">Etusivu</Link>{' '}
      <Link to="/books">Books</Link>
    </nav>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/books" element={<Book />} />
    </Routes>
    </div>
  )
}