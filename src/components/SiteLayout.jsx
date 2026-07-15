import { Link, NavLink, Outlet } from 'react-router';
import './SiteLayout.css';

function SiteLayout() {
  return (
    <div className="site-layout">
      <header className="site-header">
        <Link className="site-logo" to="/">
          H.S YANG
        </Link>

        <nav className="site-navigation" aria-label="주요 메뉴">
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
      </header>

      <Outlet />

      <footer className="site-footer">
        © {new Date().getFullYear()} H.S YANG. All rights reserved.
      </footer>
    </div>
  );
}

export default SiteLayout;