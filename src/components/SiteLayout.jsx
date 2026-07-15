import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import siteInfo from '../data/siteInfo';
import './SiteLayout.css';

function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <div className="site-layout">
      <header className="site-header">
        <Link
          className="site-logo"
          to="/"
          onClick={closeMobileMenu}
        >
          {siteInfo.name}
        </Link>

        <nav
          className="site-navigation"
          aria-label="주요 메뉴"
        >
          <NavLink to="/" end>
            HOME
          </NavLink>

          <NavLink to="/about">
            ABOUT
          </NavLink>

          <NavLink to="/archive">
            ARCHIVE
          </NavLink>

          <NavLink to="/terms">
            TERMS
          </NavLink>
        </nav>

        <button
          className={`mobile-menu-button ${
            isMenuOpen ? 'is-open' : ''
          }`}
          type="button"
          aria-label={
            isMenuOpen ? '메뉴 닫기' : '메뉴 열기'
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${
          isMenuOpen ? 'is-open' : ''
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav
          className="mobile-navigation"
          aria-label="모바일 주요 메뉴"
        >
          <NavLink
            to="/"
            end
            onClick={closeMobileMenu}
          >
            HOME
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMobileMenu}
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/archive"
            onClick={closeMobileMenu}
          >
            ARCHIVE
          </NavLink>

          <NavLink
            to="/terms"
            onClick={closeMobileMenu}
          >
            TERMS
          </NavLink>
        </nav>

        <p className="mobile-menu-footer">
          © {new Date().getFullYear()} {siteInfo.name}
        </p>
      </div>

      <Outlet />

      <footer className="site-footer">
        © {new Date().getFullYear()} {siteInfo.name}.{' '}
        {siteInfo.copyrightText}
      </footer>
    </div>
  );
}

export default SiteLayout;