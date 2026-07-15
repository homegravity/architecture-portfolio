import { Route, Routes } from 'react-router';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import './App.css';
import ProjectDetailPage from './pages/ProjectDetailPage';




function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<SiteLayout />}>
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/archive/:slug" element={<ProjectDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Route>
    </Routes>
  );
}

export default App;