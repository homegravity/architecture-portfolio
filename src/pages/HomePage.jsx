import CopyEmailButton from '../components/CopyEmailButton';
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
            {siteInfo.instagramUrl ? (
              <a
                className="home-contact-icon"
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram 새 창에서 열기"
                title="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    className="icon-fill"
                  />
                </svg>
              </a>
            ) : (
              <span className="home-contact-icon is-disabled">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    className="icon-fill"
                  />
                </svg>
              </span>
            )}

            {siteInfo.email ? (
              <CopyEmailButton
                email={siteInfo.email}
                className="home-contact-icon"
                copiedChildren={
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 12.5L10 17L19 7" />
                  </svg>
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="M4 7L12 13L20 7" />
                </svg>
              </CopyEmailButton>
            ) : (
              <span className="home-contact-icon is-disabled">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="M4 7L12 13L20 7" />
                </svg>
              </span>
            )}
          </div>
      </section>
    </main>
  );
}

export default HomePage;