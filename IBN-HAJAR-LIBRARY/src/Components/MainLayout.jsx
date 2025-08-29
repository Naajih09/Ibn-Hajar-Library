import { Link } from 'react-router-dom';

export default function MainLayout({ children, searchTerm, setSearchTerm }) {
  return (
    <div className="min-h-screen font-[Amiri] bg-white">
      
      <header className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 z-50 shadow flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold mb-2 md:mb-0">
          مكتبة ابن حجر
        </Link>

        <input
          type="text"
          placeholder="ابحث عن كتاب..."
          className="p-2 text-black rounded w-full md:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <nav className="mt-2 md:mt-0">
          <Link to="/" className="mr-4 hover:underline px-4 font-semibold">الرئيسية</Link>
          <Link to="/about" className="hover:underline px-4 font-semibold">عن المكتبة</Link>
        </nav>
      </header>

      
      <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
        {children}
      </main>

      
      <footer className="fixed bottom-0 left-0 w-full bg-gray-100 border-t py-4 text-center text-sm text-gray-600 z-50">
        <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} مكتبة ابن حجر</p>
        <div className="mt-2 space-x-4 rtl:space-x-reverse">
          <Link to="/about" className="hover:underline">عن المكتبة</Link>
          <a href="mailto:naajihibnsiraj@gmail.com" className="hover:underline">اتصل بنا</a>
          <Link to="/pages/Privacy" className="hover:underline">سياسة الخصوصية</Link>
        </div>
      </footer>
    </div>
  );
}
