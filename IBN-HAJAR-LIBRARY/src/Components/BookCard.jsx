import { useNavigate } from "react-router-dom";

export default function BookCard({
  id,
  title,
  description,
  imageUrl,
  downloadLink,
  isPlaceholder
}) {
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 font-[Amiri]">
      <div className="flex gap-4 mb-4">
        <img
          src={imageUrl}
          alt={`الغلاف الأمامي لـ ${title}`}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-4">{description}</p>

      <div className="flex flex-wrap gap-3">
        {/* ✅ Fixed: Navigate to /reader/:id */}
        <button
          onClick={() => navigate(`/reader/${id}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          اقرأ
        </button>

        {/* Download Button */}
        <a
          href={downloadLink}
          download
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          تحميل
        </a>
      </div>
    </div>
  );
}
