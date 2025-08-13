import React from "react";
import BookCard from "../Components/BookCard";
import books from "../data/books.json";

export default function Home({ searchTerm }) {
  const filteredBooks = books.filter(
    (book) =>
      book.title.includes(searchTerm) ||
      book.author.includes(searchTerm)
  );

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
      ) : (
        <p>لم يتم العثور على نتائج</p>
      )}
      <BookCard />
    </div>
  );
}
