import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books.json";

export default function Book() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const bookId = parseInt(id);
    const foundBook = books.find((b) => b.id === bookId);
    setBook(foundBook);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600 mx-auto mb-4"></div>
        <p>جاري تحميل الكتاب...</p>
      </div>
    );
  }

  if (!book) {
    return <p className="p-6">الكتاب غير موجود</p>;
  }

  return (
    <div className="p-6 animate-fade-in">
      
      <nav className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:underline">الرئيسية</Link> / <span>{book.title}</span>
      </nav>

      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-blue-900">{book.title}</h1>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`px-3 py-1 rounded text-sm transition ${
            isFavorite ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {isFavorite ? "★ مفضل" : "☆ أضف للمفضلة"}
        </button>
      </div>

      <p className="text-gray-700">{book.author}</p>
      <p className="mt-4 text-sm text-gray-600">{book.description}</p>

      
      <h2 className="text-xl mt-6 font-bold text-blue-800">الفصول:</h2>
      {book.chapters.length > 0 ? (
        <ul className="list-disc pr-6 mt-2">
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
      ) : (
        <p className="mt-2 text-gray-600">لا توجد فصول متاحة لهذا الكتاب.</p>
      )}

      <Link to="/" className="text-blue-600 mt-6 block hover:underline">← العودة</Link>
    </div>
  );
}
