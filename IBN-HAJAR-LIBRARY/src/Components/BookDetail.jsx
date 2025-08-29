import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books.json";

export default function BookDetails() {
  const { id } = useParams();
  const [previewChapter, setPreviewChapter] = useState(null);

  const book = books.find((b) => b.id === parseInt(id));
  if (!book) return <div className="p-6">الكتاب غير موجود</div>;

  const hasParts = book.parts && book.parts.length > 0;

  
  const handleDownload = (url, filename = "book.pdf") => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto font-[Amiri]">
      
      <Link to="/" className="text-blue-600 hover:underline mb-4 block">
        ← العودة إلى المكتبة
      </Link>

      
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full md:w-64 h-96 object-cover rounded-md border border-gray-300"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">{book.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{book.author}</p>
          <p className="text-gray-800 leading-relaxed">{book.description}</p>

         
          <div className="flex flex-wrap gap-3 mt-4">
            {hasParts && (
              <>
                <Link
                  to={`/read/${book.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  اقرأ
                </Link>

                <button
                  onClick={() => handleDownload(book.parts[0], `${book.title}.pdf`)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  تحميل
                </button>
              </>
            )}
            {!hasParts && (
              <p className="text-red-600 font-semibold">
                لا توجد ملفات PDF متاحة لهذا الكتاب حالياً.
              </p>
            )}
          </div>
        </div>
      </div>

      
      {book.chapters && book.chapters.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-8 text-blue-800">الفصول</h2>
          <ul className="mt-4 space-y-2">
            {book.chapters.map((chapter) => (
              <li key={chapter.id}>
                <div className="flex items-center gap-4">
                  <span className="text-blue-500 text-lg">{chapter.title}</span>
                  <button
                    onClick={() => setPreviewChapter(chapter)}
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    معاينة
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      
      {previewChapter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">{previewChapter.title}</h3>
            <p className="text-gray-700">
              {previewChapter.preview || "لا توجد معاينة متاحة"}
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setPreviewChapter(null)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
