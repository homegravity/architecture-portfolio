import aboutInfo from '../data/aboutInfo';
import siteInfo from '../data/siteInfo';
import './AboutPage.css';

function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-header">
        <p className="about-label">ABOUT</p>
        <h1>{siteInfo.name}</h1>

        <p className="about-introduction">
          {aboutInfo.introduction}
        </p>
      </header>


      <section className="about-profile-media">
      {aboutInfo.profileImage ? (
        <img
          src={aboutInfo.profileImage}
          alt={aboutInfo.profileImageAlt}
        />
      ) : (
        <span>PROFILE IMAGE</span>
      )}
    </section>




      <div className="about-sections">
        <section className="about-section">
          <h2>EDUCATION</h2>

          <div className="about-list">
            {aboutInfo.education.map((item) => (
              <article
              className="about-list-item"
              key={`${item.period}-${item.title}`}
            >
              <div className="about-item-content">
                <h3>{item.title}</h3>
                <p>{item.organization}</p>
              </div>
            
              <p className="about-period">{item.period}</p>
            </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2>EXPERIENCE</h2>

          <div className="about-list">
            {aboutInfo.experience.map((item) => (
              <article
                className="about-list-item"
                key={`${item.period}-${item.title}`}
              >
                <div className="about-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.organization}</p>
                </div>

                <p className="about-period">{item.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2>AWARDS</h2>

          <div className="about-list">
            {aboutInfo.awards.map((item) => (
              <article
  className="about-list-item"
  key={`${item.period}-${item.title}`}
>
  <div className="about-item-content">
    <h3>{item.title}</h3>
    <p>{item.organization}</p>
  </div>

  <p className="about-period">{item.period}</p>
</article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2>SKILLS</h2>

          <ul className="skill-list">
            {aboutInfo.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="about-section about-contact">
          <h2>CONTACT</h2>

          <div>
            <p>
              EMAIL
              <span>
                {siteInfo.email || 'EMAIL WILL BE ADDED'}
              </span>
            </p>

            <p>
              INSTAGRAM
              <span>
                {siteInfo.instagramUrl
                  ? 'VIEW INSTAGRAM'
                  : 'INSTAGRAM WILL BE ADDED'}
              </span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;