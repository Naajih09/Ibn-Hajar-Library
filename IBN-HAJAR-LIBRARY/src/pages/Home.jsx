import React from "react";
import BookCard from "../Components/BookCard";
import books from "../data/books.json";

export default function Home({ searchTerm }) {
  const filteredBooks = books.filter(
    (book) =>
      book.title.includes(searchTerm) ||
      book.author.includes(searchTerm)
  );

  const paddedBooks = [...filteredBooks];
  while (paddedBooks.length < 4) {
    paddedBooks.push({
      id: `placeholder-${paddedBooks.length}`,
      title: "قريباً...",
      author: "",
      cover: "#",
      description: "سيتم إضافة كتاب جديد قريباً.",
      readLink: "#",
      downloadLink: "#",
      isPlaceholder: true
    });
  }

  return (
    <div className="p-6 overflow-x-auto">
      <div className="flex gap-4 min-w-max">
        {paddedBooks.length > 0 ? (
          paddedBooks.map((book) => (
            <div className="flex-shrink-0 w-64" key={book.id}>
              <BookCard
                id={book.id} 
                title={book.title}
                description={book.description}
                imageUrl={book.cover}
                readLink={book.isPlaceholder ? "#" : `/reader/${book.id}`} 
                downloadLink={book.downloadLink}
                isPlaceholder={book.isPlaceholder}
              />
            </div>
          ))
        ) : (
          <p>لم يتم العثور على نتائج</p>
        )}
      </div>
    </div>
  );
}
