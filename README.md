# مكتبة ابن حجر — _Ibn Hajar Library_

A free Arabic digital library built with **React**, **Vite**, and **Tailwind CSS**, designed to make classical Islamic books accessible to everyone. The library features works by **Imam Ibn Hajar** and includes an original text by my **Shaykh**, presented with elegant design and intuitive navigation.

> This project is currently under development. Expect ongoing updates and improvements.

## Capstone Project — ALX Software Engineering Program

This project is my official Capstone submission for the **ALX Software Engineering Program**. It represents the culmination of months of learning, building, and problem-solving across front-end development, version control, and UI/UX design.

The Ibn-Hajar Library is more than just a technical exercise — it’s a personal and cultural contribution to digital Islamic scholarship, built with modern web technologies and a deep sense of purpose.

## Setup

This project uses:

- ⚛️ **React** (via Vite for fast development)
- 🎨 **Tailwind CSS** for styling
- 📁 `books.json` for local book data
- 📄 PDF files stored locally in `public/Books`
- 🖼️ Book covers stored in `public/covers`

### Installation

```bash
git clone https://github.com/Naajibinbsiraj/Ibn-Hajar-Library.git
cd Ibn-Hajar-Library
npm install
npm run dev



🌟 Features (In Progress)
📖 Book cards with cover image, title, description, and links to read/download
🌐 Arabic navigation (الرئيسية, عن المكتبة)
🔍 Search functionality
✅ Read status indicator
📥 PDF integration from public/Books
🌓 Dark mode toggle (planned)

📁 Project Structure
IBN-HAJAR-LIBRARY/
├── public/
│   ├── Books/               # PDF files
│   ├── covers/              # Book cover images
│
├── src/
│   ├── Components/          # Reusable UI components
│   │   ├── BookCard.jsx
│   │   ├── BookDetail.jsx
│   │   ├── MainLayout.jsx
│   │   ├── Navbar.jsx
│   │
│   ├── assets/              # Icons and static assets
│   │   └── react.svg
│   ├── data/                # Book data
│   │   └── books.json
│   ├── pages/               # Page views
│   │   ├── About.jsx
│   │   ├── Book.jsx
│   │   ├── ChapterPage.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── vite.config.js
```
