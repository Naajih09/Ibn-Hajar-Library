// src/pages/Book.jsx
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
      <Link to="/" className="text-blue-600 mt-4 block">← العودة</Link>
    </div>
  );
}
