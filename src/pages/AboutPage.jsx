import CopyEmailButton from '../components/CopyEmailButton';
import AboutListSection from '../components/AboutListSection';
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
      <AboutListSection
          title="EDUCATION"
          items={aboutInfo.education}
        />

        <AboutListSection
          title="EXPERIENCE"
          items={aboutInfo.experience}
        />

        <AboutListSection
          title="AWARDS"
          items={aboutInfo.awards}
        />

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

          <div className="about-contact-links">
            <div className="about-contact-row">
              <p>EMAIL</p>

              {siteInfo.email ? (
                <div className="about-contact-action">
                  <span>{siteInfo.email}</span>

                  <CopyEmailButton
                  email={siteInfo.email}
                  className="about-contact-button"
                  copiedChildren={
                    <span className="about-contact-button-text">
                      COPIED
                    </span>
                  }
                >
                  <span className="about-contact-button-text">
                    COPY
                  </span>
                </CopyEmailButton>
                </div>
              ) : (
                <span className="about-contact-empty">
                  EMAIL WILL BE ADDED
                </span>
              )}
            </div>

            <div className="about-contact-row">
              <p>INSTAGRAM</p>

              {siteInfo.instagramUrl ? (
                <a
                className="about-contact-link"
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="about-contact-link-text">
                  OPEN INSTAGRAM
                </span>
              
                <span
                  className="about-contact-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
              ) : (
                <span className="about-contact-empty">
                  INSTAGRAM WILL BE ADDED
                </span>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;