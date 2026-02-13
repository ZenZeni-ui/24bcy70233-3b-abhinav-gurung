import bg from "./assets/mybg.jpg";
import { useState } from "react";
import "./App.css";

function App() {
const [books, setBooks] = useState([
  { id: 1, title: "Fifty Shades of Grey", author: "Zhongli" },
  { id: 2, title: "Teyvat Chronicles", author: "Furina" },
  { id: 3, title: "Blade of the Shogun", author: "Raiden Ei" },
]);



  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (!title || !author) return;

    setBooks([
      ...books,
      { id: Date.now(), title, author }
    ]);

    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        padding: "20px"
      }}
    >
      <h1>Library Management System</h1>

      <div className="sort">
        <input
          className="search"
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="form">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button onClick={addBook}>Add Book</button>
        </div>
      </div>

      {filteredBooks.map((book) => (
        <div className="book" key={book.id}>
          <div>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </div>
          <button
            className="remove"
            onClick={() => removeBook(book.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
