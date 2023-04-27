import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticlesPage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import HomePage from "./pages/HomePage";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:articleId" element={<ArticlesListPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
