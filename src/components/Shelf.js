import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function Shelf ({title, books, bookView, inputShelf}) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key = {book.id}>
                <Book book = {book} inputShelf = {inputShelf} bookView = {bookView}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
Shelf.prototype = {
  title: PropTypes.string.isRequired,
  book: PropTypes.array.isRequired,
  inputShelf: PropTypes.func.isRequired,
  bookView: PropTypes.func.isRequired
}

export default Shelf
