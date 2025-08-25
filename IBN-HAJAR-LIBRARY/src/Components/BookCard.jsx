export default function BookCard({
  title,
  description,
  imageUrl,
  readLink,
  downloadLink,
  isPlaceholder
}) {
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
        <a
          href={readLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
           اقرأ
        </a>
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
           تحميل
        </a>
      </div>
    </div>
  );
}
