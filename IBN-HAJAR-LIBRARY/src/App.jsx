import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import ChapterPage from './Pages/ChaPterPage';
import About from './pages/About';
import MainLayout from './Components/MainLayout';
import BookReader from './pages/BookReader';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/reader/:id" element={<BookReader />} />
        <Route path="/books/:bookId/chapters/:chapterId" element={<ChapterPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MainLayout>
  );
}
