import { useEffect } from 'react';

import { Link, useParams } from 'react-router';
import projects from '../data/projects';
import './ProjectDetailPage.css';

function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [slug]);
  
  const otherProjects = projects.filter((item) => item.slug !== slug);


  if (!project) {
    return (
      <main className="project-detail-page">
        <section className="project-not-found">
          <p>PROJECT NOT FOUND</p>
          <Link to="/archive">BACK TO ARCHIVE</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="project-detail-page">
      <header className="project-detail-header">
        <p className="project-detail-label">SELECTED PROJECT</p>

        <h1>{project.title}</h1>

        <dl className="project-meta">
          <div className="project-meta-item">
            <dt>YEAR</dt>
            <dd>{project.year}</dd>
          </div>

          <div className="project-meta-item">
            <dt>TYPOLOGY</dt>
            <dd>{project.typology}</dd>
          </div>

          <div className="project-meta-item">
            <dt>LOCATION</dt>
            <dd>{project.location}</dd>
          </div>

          <div className="project-meta-item">
            <dt>PROJECT TYPE</dt>
            <dd>{project.projectType}</dd>
          </div>

          <div className="project-meta-item">
            <dt>ROLE</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>

        <div className="project-description">
          <p>{project.description}</p>
        </div>
      </header>

      <section
        className="project-image-grid"
        aria-label={`${project.title} 작업물 이미지`}
      >
        <div className="project-detail-image">
          <span>PROJECT IMAGE 01</span>
        </div>

        <div className="project-detail-image">
          <span>PROJECT IMAGE 02</span>
        </div>

        <div className="project-detail-image">
          <span>PROJECT IMAGE 03</span>
        </div>

        <div className="project-detail-image">
          <span>PROJECT IMAGE 04</span>
        </div>
      </section>
    
      <section className="other-projects">
        <div className="other-projects-header">
          <p>OTHER PROJECTS</p>

          <Link to="/archive">
            VIEW ALL
          </Link>
        </div>

        <div className="other-projects-grid">
          {otherProjects.map((otherProject) => (
            <Link
              className="other-project-card"
              key={otherProject.id}
              to={`/archive/${otherProject.slug}`}
              aria-label={`${otherProject.title} 상세 페이지 보기`}
            >
              <div className="other-project-thumbnail">
                <span>IMAGE</span>
              </div>

              <div className="other-project-info">
                <h2>{otherProject.title}</h2>
                <p>{otherProject.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
          
    
    
    
    
    
    
    </main>
  );
}

export default ProjectDetailPage;