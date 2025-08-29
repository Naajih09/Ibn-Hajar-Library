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

  const handleDownloadClick = (e) => {
    if (isPlaceholder || !downloadLink || downloadLink === "#") {
      e.preventDefault();
      alert(" لا يوجد ملف متاح للتحميل حالياً.");
    }
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 font-[Amiri] w-full max-w-xs sm:max-w-sm md:max-w-md">
      
      <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
        <img
          src={imageUrl}
          alt={`الغلاف الأمامي لـ ${title}`}
          className="w-full h-full object-cover"
        />
      </div>

      
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-4">{description}</p>

      
      <div className="flex flex-col sm:flex-row gap-3">
        
        <button
          onClick={() => navigate(`/reader/${id}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          aria-label={`قراءة ${title}`}
        >
          اقرأ
        </button>

        
        {!isPlaceholder && downloadLink && downloadLink !== "#" ? (
          <a
            href={downloadLink}
            download
            rel="noopener noreferrer"
            aria-label={`تحميل ${title}`}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            onClick={handleDownloadClick}
          >
            تحميل
          </a>
        ) : (
          <button
            disabled
            className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
            title="لا يوجد ملف متاح للتحميل"
          >
            تحميل
          </button>
        )}
      </div>

      {isPlaceholder || !downloadLink || downloadLink === "#" ? null : (
        <div className="mt-4 text-center text-sm text-gray-500">
          إذا لم يتم عرض الملف على الهاتف، يمكنك تحميله مباشرة من الزر أعلاه.
        </div>
      )}
    </div>
  );
}
