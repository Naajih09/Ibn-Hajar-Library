import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './Pages/Home';
import Book from './Pages/Book';


export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <header className="bg-blue-900 text-white p-4 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold mb-2 md:mb-0">
          📚 مكتبة ابن حجر
        </Link>

        
        <input
          type="text"
          placeholder="ابحث عن كتاب..."
          className="p-2 text-black rounded w-full md:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        
        <nav className="mt-2 md:mt-0">
          <Link to="/" className="mr-4 hover:underline">الرئيسية</Link>
          <Link to="/about" className="hover:underline">عن المكتبة</Link>
        </nav>
      </header>

      
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </>
  );
}
