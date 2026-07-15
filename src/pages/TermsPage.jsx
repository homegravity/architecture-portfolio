import siteInfo from '../data/siteInfo';
import termsInfo from '../data/termsInfo';
import './TermsPage.css';

function TermsPage() {
  return (
    <main className="terms-page">
      <header className="terms-header">
        <p className="terms-label">TERMS</p>
        <h1>Copyright & Usage</h1>

        <p className="terms-introduction">
          This page outlines the copyright, permitted use, and
          attribution guidelines for the works presented on this website.
        </p>
      </header>

      <div className="terms-list">
        {termsInfo.map((item, index) => (
          <section
            className="terms-item"
            key={item.title}
          >
            <p className="terms-number">
              {String(index + 1).padStart(2, '0')}
            </p>

            <div>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </section>
        ))}
      </div>

      <aside className="terms-notice">
        <p>
          © {new Date().getFullYear()} {siteInfo.name}
        </p>

        <span>
          All works and content are protected by copyright.
        </span>
      </aside>
    </main>
  );
}

export default TermsPage;