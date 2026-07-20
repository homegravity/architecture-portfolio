import { Link } from 'react-router';
import siteInfo from '../data/siteInfo';
import './HomePage.css';

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-intro">
      <div className="home-profile-media">
        {siteInfo.homeProfileImage ? (
          <img
            src={siteInfo.homeProfileImage}
            alt={siteInfo.homeProfileImageAlt}
          />
        ) : (
          <span>PROFILE IMAGE</span>
        )}
      </div>

        <p className="home-name">{siteInfo.name}</p>

        <nav className="home-actions" aria-label="홈 주요 메뉴">
          <Link className="home-link home-link-primary" to="/archive">
            ARCHIVE
          </Link>

          <Link className="home-link home-link-secondary" to="/about">
            ABOUT
          </Link>
        </nav>

        <div className="home-contact">
          <button type="button" aria-label="Instagram">
            IG
          </button>

          <button type="button" aria-label="Email">
            MAIL
          </button>
        </div>
      </section>
    </main>
  );
}

export default HomePage;