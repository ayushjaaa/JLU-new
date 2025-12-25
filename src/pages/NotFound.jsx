import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-container">
      <section className="page-section" style={{ textAlign: 'center', padding: '100px 40px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>404</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Page Not Found</p>
        <Link to="/" style={{
          padding: '12px 24px',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '4px'
        }}>
          Back to Home
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
