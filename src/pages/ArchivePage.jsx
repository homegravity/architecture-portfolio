import { Link } from 'react-router';
import projects from '../data/projects';
import './ArchivePage.css';

function ArchivePage() {
  return (
    <main className="archive-page">
      <header className="archive-intro">
        <p className="archive-label">SELECTED WORKS</p>
        <h1>ARCHIVE</h1>
      </header>

      <section className="project-grid" aria-label="작업물 목록">
        {projects.map((project) => (
            <Link
            className="project-card"
            key={project.id}
            to={`/archive/${project.slug}`}
            aria-label={`${project.title} 상세 페이지 보기`}
          >
            
            <span className="project-index">
              {String(project.id).padStart(2, '0')}
            </span>
            
            <span
              className="project-open-mark"
              aria-hidden="true"
            >
              ↗
            </span>



            <div className="project-thumbnail">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.thumbnailAlt}
                />
              ) : (
                <span className="project-placeholder">IMAGE</span>
              )}

              <div className="project-overlay">
                <h2>{project.title}</h2>
                <p>{project.year}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default ArchivePage;