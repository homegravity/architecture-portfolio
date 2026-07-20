function AboutListSection({ title, items }) {
  return (
    <section className="about-section">
      <h2>{title}</h2>

      <div className="about-list">
        {items.map((item) => (
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
  );
}

export default AboutListSection;