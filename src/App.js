import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Homepage from "./components/Homepage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {getAll} from "./BooksAPI"
import NotFound from "./components/NotFound";

function App() {
  const [books, setBooks] = useState([])
  const [setBookView] = useState({})
  
  const setData = () => {
      getAll().then(data => {
        if(data) setBooks(data) 
      }).catch(e => console.log(e))
    }

  function inputShelf(shelf, book){
    const b = books.filter(b => b.id === book.id)
    if(b.length > 0){
      const other = books.filter(b => b.id !== book.id)
      b[0].shelf = shelf
      setBooks([...other,...b])
    } else {
      book.shelf = shelf
      setBooks([...books,book])
    }
  }

  useEffect(() => {
    setData();
  }, [])

  return(
    <Router>
      <div className="app">
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route exact path="/" element={<Homepage books={books} inputShelf={inputShelf} bookView={setBookView}/>} />
          <Route exact path="/search" element={<Search books={books} inputShelf={inputShelf} bookView={setBookView}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

