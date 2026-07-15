import { Route, Routes } from 'react-router';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<SiteLayout />}>
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Route>
    </Routes>
  );
}

export default App;