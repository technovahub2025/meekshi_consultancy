import Reveal from '../components/Reveal'
import aboutHeroImage from '../assets/about us.jpg'
import './AboutPage.css'

function VisionIcon() {
  return (
    <svg
      className="mission-vision-card__svg"
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 32s8-14 24-14 24 14 24 14-8 14-24 14S8 32 8 32Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="3.2" />
      <circle cx="32" cy="32" r="2.6" fill="currentColor" />
      <path
        d="M24 22l-4-4M40 22l4-4M24 42l-4 4M40 42l4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MissionIcon() {
  return (
    <svg
      className="mission-vision-card__svg"
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="3.2" />
      <circle cx="32" cy="32" r="11" fill="none" stroke="currentColor" strokeWidth="3.2" />
      <circle cx="32" cy="32" r="3.3" fill="currentColor" />
      <path
        d="M40 24l10-10M44 14h6v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AboutPage() {
  return (
    <main className="about-page">
      <section className="page-hero py-5">
        <div className="container">
          <div className="about-hero">
            <div className="about-hero__text">
              <p className="eyebrow mb-2">About Us</p>
              <h1 className="page-title">Built to bridge the gap between people and opportunities.</h1>
            </div>
            <img
              className="about-hero__image"
              src={aboutHeroImage}
              alt="Consulting team illustration"
            />
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4 about-intro">
            <Reveal as="div" className="col-lg-6" delay={100}>
              <div className="panel h-100 about-intro__card about-intro__card--story">
                <p className="about-intro__kicker">Our Journey</p>
                <h2>Your Story</h2>
                <p>Meekshi Consultancy was founded to combine practical HR systems, business clarity, and people-first growth.</p>
                <p className="mb-0">The goal is to create solutions that are structured, measurable, and sustainable.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-lg-6" delay={220}>
              <div className="panel h-100 about-intro__card about-intro__card--founder">
                <p className="about-intro__kicker">Leadership Snapshot</p>
                <h2>Founder Profile</h2>
                <ul className="check-list">
                  <li>HR and Marketing Professional with 10+ years experience</li>
                  <li>Convener - CII Indian Women Network (Pondicherry)</li>
                  <li>10+ years NGO experience in women empowerment</li>
                  <li>Passionate about sustainable and impactful growth</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-5 section-soft">
        <div className="container">
          <div className="section-head section-head--center mb-5">
            <h2>Mission and Vision</h2>
          </div>
          <div className="mission-vision-grid">
            <Reveal as="div" className="mission-vision-card mission-vision-card--vision" delay={100}>
              <div className="mission-vision-card__ring">
                <div className="mission-vision-card__icon">
                  <VisionIcon />
                </div>
                <h3>Vision</h3>
                <p>To become a trusted consulting partner for startups, organizations, and aspiring professionals.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="mission-vision-card mission-vision-card--mission" delay={180}>
              <div className="mission-vision-card__ring">
                <div className="mission-vision-card__icon">
                  <MissionIcon />
                </div>
                <h3>Mission</h3>
                <p>To empower businesses and individuals with structured, practical, and growth-focused solutions.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="section-head mb-4 values-head">
            <h2>Our Values</h2>
            <p>The principles that guide every engagement we take on.</p>
          </div>
          <div className="row g-4 values-grid">
            <Reveal as="div" className="col-md-6 col-lg-3" delay={100}>
              <div className="panel h-100 value-card">
                <div className="value-card__icon">C</div>
                <h3>Clarity</h3>
                <p className="mb-0">We simplify complex challenges into clear next steps.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-md-6 col-lg-3" delay={170}>
              <div className="panel h-100 value-card">
                <div className="value-card__icon">T</div>
                <h3>Trust</h3>
                <p className="mb-0">We build relationships based on transparency and consistency.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-md-6 col-lg-3" delay={240}>
              <div className="panel h-100 value-card">
                <div className="value-card__icon">A</div>
                <h3>Action</h3>
                <p className="mb-0">We focus on execution, not just advice.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-md-6 col-lg-3" delay={310}>
              <div className="panel h-100 value-card">
                <div className="value-card__icon">I</div>
                <h3>Impact</h3>
                <p className="mb-0">We measure success by outcomes that matter.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
