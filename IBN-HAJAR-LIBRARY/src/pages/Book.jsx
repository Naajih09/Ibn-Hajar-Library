import React from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books.json";

export default function Book() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p className="p-6">الكتاب غير موجود</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p>{book.author}</p>
      <p className="mt-4">{book.description}</p>

      <h2 className="text-xl mt-6 font-bold">الفصول:</h2>
      <ul className="list-disc pr-6">
        {book.chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link
              to={`/books/${book.id}/chapters/${chapter.id}`}
              className="text-blue-600 hover:underline"
            >
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/" className="text-blue-600 mt-4 block">← العودة</Link>
    </div>
  );
}
