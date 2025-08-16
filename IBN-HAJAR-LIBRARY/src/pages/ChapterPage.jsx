import React from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books.json";

export default function ChapterPage() {
  const { bookId, chapterId } = useParams();
  const book = books.find((b) => b.id === parseInt(bookId));
  if (!book) return <p className="p-6">الكتاب غير موجود</p>;

  const chapter = book.chapters.find((c) => c.id === parseInt(chapterId));
  if (!chapter) return <p className="p-6">الفصل غير موجود</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{chapter.title}</h1>
      <p className="mt-4">{chapter.content}</p>
      <Link to={`/book/${book.id}`} className="text-blue-600 mt-4 block">
        ← العودة إلى {book.title}
      </Link>
    </div>
  );
}
