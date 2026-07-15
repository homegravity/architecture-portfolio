import { Link } from 'react-router';

function HomePage() {
  return (
    <main className="home-page">
      <h1>TEST HOME PAGE 123</h1>
      <p>Portfolio website setup complete.</p>

      <nav
        style={{
          display: 'flex',
          gap: '24px',
          marginTop: '32px',
          color: '#000000',
        }}
      >
        <Link to="/archive">ARCHIVE</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/terms">TERMS</Link>
      </nav>
    </main>
  );
}

export default HomePage;