import React from "react";
import {Link} from "react-router-dom";
import PropTyes from "prop-types";
import Shelf from "./Shelf";

function Homepage({books, bookView, inputShelf}) {
    const showShelfes = [
                        {id: "shelf1", title:"Current Reading", filter: "currentlyReading"},
                        {id: "shelf2", title:"Want to Read", filter: "wantToRead"},
                        {id: "shelf3", title:"Read", filter:"read"}
                    ]
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {showShelfes.map(s => (
                            <div key = {s.id}>
                                <Shelf title={s.title} books={books.filter(book => book.shelf === s.filter)} inputShelf={inputShelf} bookView={bookView}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className = "open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        </div>
        )
}
Homepage.prototype = {
    books: PropTyes.array.isRequired,
    inputShelf: PropTyes.func.isRequired,
    bookView: PropTyes.func.isRequired
}

export default Homepage