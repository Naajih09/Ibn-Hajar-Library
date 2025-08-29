import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import books from "../data/books.json";

export default function BookReader() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => Number(b.id) === Number(id));
  const [selectedPartIndex, setSelectedPartIndex] = useState(0);

  if (!book || !book.parts || book.parts.length === 0) {
    return (
      <div className="p-6 text-red-600 font-bold text-center">
         الكتاب غير موجود أو لا يحتوي على ملفات PDF
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto font-[Amiri] space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        ← رجوع
      </button>

      <h1 className="text-2xl font-bold text-blue-900 mb-4">{book.title}</h1>

      {book.parts.length > 1 && (
        <div className="mb-4">
          <label className="block mb-2 text-blue-800 font-semibold">
            اختر الجزء:
          </label>
          <select
            value={selectedPartIndex}
            onChange={(e) => setSelectedPartIndex(Number(e.target.value))}
            className="p-2 rounded border border-gray-300 w-full md:w-64"
          >
            {book.parts.map((_, index) => (
              <option key={index} value={index}>
                الجزء {index + 1}
              </option>
            ))}
          </select>
        </div>
      )}

      <iframe
        src={book.parts[selectedPartIndex]}
        title={`${book.title} - الجزء ${selectedPartIndex + 1}`}
        className="w-full h-[80vh] border rounded shadow"
      />
    </div>
  );
}
