import React from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books.json";

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <div className="p-6">الكتاب غير موجود</div>;

  return (
    <div className="p-6">
      <img src={book.cover} alt={book.title} className="w-64 h-96 object-cover rounded-md mb-4" />
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p className="text-gray-700">{book.author}</p>
      <p className="mt-4">{book.description}</p>

      <h2 className="text-xl font-semibold mt-6">الفصول</h2>
      <ul className="mt-2">
        {book.chapters.map((chapter) => (
          <li key={chapter.id} className="mb-2">
            <Link
              to={`/read/${book.id}/${chapter.id}`}
              className="text-blue-500 hover:underline"
            >
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
