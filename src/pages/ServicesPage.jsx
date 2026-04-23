import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import servicesHeroImage from '../assets/service.jpg'
import screen1 from '../assets/screen1.png'
import screen2 from '../assets/screen2.png'
import screen3 from '../assets/screen3.png'

const serviceGroups = [
  {
    title: 'HR Consulting',
    items: ['Recruitment & Hiring Support', 'HR Policies & Compliance', 'Performance Management'],
  },
  {
    title: 'Business Consulting',
    items: ['Startup Setup', 'Process & SOP Development', 'Business Growth Planning'],
  },
  {
    title: 'Training Programs',
    items: ['Training & Workshops', 'College Career Sessions', 'Corporate Training'],
  },
]

const serviceBlueprintRows = [
  {
    label: 'A. HR Consulting',
    title: 'Architectural Strategy',
    description: 'We create the systems behind healthy teams - policies, hiring flow, and performance structure.',
    items: ['Recruitment & Hiring Support', 'HR Policies & Compliance', 'Performance Management'],
    image: screen1,
    imageAlt: 'HR consulting screen overview',
    reverse: false,
  },
  {
    label: 'B. Business Consulting',
    title: 'Creative Kineticism',
    description: 'We turn ideas into action plans so founders can move faster with confidence and clarity.',
    items: ['Startup Setup', 'Process & SOP Development', 'Business Growth Planning'],
    image: screen2,
    imageAlt: 'Business consulting screen overview',
    reverse: true,
  },
  {
    label: 'C. Training Programs',
    title: 'Impact Amplification',
    description: 'We design workshops that build confidence, capability, and momentum for teams and individuals.',
    items: ['Training & Workshops', 'College Career Sessions', 'Corporate Training'],
    image: screen3,
    imageAlt: 'Training program screen overview',
    reverse: false,
  },
]

function ServicesPage() {
  return (
    <main>
      <section className="page-hero page-hero--services py-5">
        <div className="container">
          <div className="services-blueprint__hero">
            <div className="services-blueprint__intro">
              <p className="eyebrow mb-2">Services</p>
              <h1 className="page-title">How we move businesses forward with practical consulting.</h1>
              <p className="services-blueprint__lead">
                We blend HR structure, business clarity, and people-first strategy into simple, workable steps.
              </p>
            </div>
            <img className="services-blueprint__hero-image" src={servicesHeroImage} alt="Consulting team illustration" />
          </div>
        </div>
      </section>

      <section className="py-5 services-blueprint-section">
        <div className="container">
          <div className="services-blueprint__rows">
            {serviceBlueprintRows.map((row) => (
              <div
                key={row.label}
                className={`services-blueprint__row ${row.reverse ? 'services-blueprint__row--reverse' : ''}`}
              >
                {!row.reverse && (
                  <div className="services-blueprint__copy">
                    <p className="services-blueprint__label">{row.label}</p>
                    <h2>{row.title}</h2>
                    <p>{row.description}</p>
                    <ul className="check-list">
                      {row.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link className="btn btn-brand-primary btn-sm mt-3" to="/contact">Book Now</Link>
                  </div>
                )}

                <img className="services-blueprint__image" src={row.image} alt={row.imageAlt} />

                {row.reverse && (
                  <div className="services-blueprint__copy">
                    <p className="services-blueprint__label">{row.label}</p>
                    <h2>{row.title}</h2>
                    <p>{row.description}</p>
                    <ul className="check-list">
                      {row.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link className="btn btn-brand-primary btn-sm mt-3" to="/contact">Book Now</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {serviceGroups.map((group, index) => (
              <Reveal as="div" className="col-md-6 col-lg-4" key={group.title} delay={100 + (index * 90)}>
                <article className="service-box h-100 service-box--featured">
                  <p className="service-box__eyebrow">Core Service</p>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="price-note">Starting from Rs. 20,000</p>
                  <Link className="btn btn-brand-primary btn-sm" to="/contact">Book Now</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 section-soft">
        <div className="container">
          <div className="section-head mb-4">
            <h2>Women Empowerment & Pricing</h2>
            <p>Designed to stay flexible, practical, and accessible for different engagement needs.</p>
          </div>
          <div className="row g-4 align-items-stretch">
            <Reveal as="div" className="col-lg-6" delay={100}>
              <div className="panel panel-accent h-100">
                <p className="panel-kicker">Women Empowerment Programs</p>
                <h3 className="mb-3">Workshops that build confidence and capability.</h3>
                <ul className="check-list">
                  <li>Leadership Development</li>
                  <li>Career Guidance Sessions</li>
                  <li>Skill and Confidence Workshops</li>
                </ul>
              </div>
            </Reveal>
            <Reveal as="div" className="col-lg-6" delay={200}>
              <div className="panel panel-accent h-100">
                <p className="panel-kicker">Pricing Models</p>
                <h3 className="mb-3">Simple models that fit your scope.</h3>
                <ul className="check-list">
                  <li>Per project</li>
                  <li>Per day</li>
                  <li>Retainer</li>
                  <li>Hourly model</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-5 services-testimonials">
        <div className="container">
          <div className="reviews-head mb-4">
            <div>
              <p className="reviews-head__eyebrow">Our Reviews</p>
              <h2 className="reviews-head__title">
                What Our <span>Clients</span> Say
              </h2>
            </div>
            <div className="reviews-head__arrows" aria-hidden="true">
              <button type="button" className="reviews-arrow">?</button>
              <button type="button" className="reviews-arrow">?</button>
            </div>
          </div>
          <div className="testimonial-layout">
            <Reveal as="div" className="testimonial-feature h-100" delay={100}>
              <div className="testimonial-feature__top">
                <span className="testimonial-feature__badge">Client Love</span>
                <span className="testimonial-feature__spark"></span>
              </div>
              <p>Professional, practical, and truly impactful.</p>
              <div className="testimonial-feature__meta">Client Feedback</div>
            </Reveal>

            <div className="testimonial-grid">
              <Reveal as="div" className="testimonial-card testimonial-card--elevated h-100" delay={160}>
                <p>They helped us fix our hiring process in weeks.</p>
                <span>Startup Founder</span>
              </Reveal>
              <Reveal as="div" className="testimonial-card testimonial-card--elevated h-100" delay={220}>
                <p>A strong blend of HR depth and business understanding.</p>
                <span>Organization Lead</span>
              </Reveal>
              <Reveal as="div" className="testimonial-card testimonial-card--elevated h-100" delay={280}>
                <p>Clear, supportive, and easy to work with.</p>
                <span>Program Partner</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="process-head mb-4">
            <div>
              <p className="process-head__eyebrow">How We Work</p>
              <h2 className="process-head__title">Simple process. Clear outcomes.</h2>
              <p className="process-head__lead">We keep the journey straightforward so you always know what happens next.</p>
            </div>
            <div className="process-head__line" aria-hidden="true">
              <span></span>
            </div>
          </div>
          <div className="process-flow">
            <Reveal as="div" className="process-card h-100" delay={100}>
              <div className="process-card__number">01</div>
              <h3>Discovery</h3>
              <p className="mb-0">We understand your goals, constraints, and priority problems.</p>
            </Reveal>
            <Reveal as="div" className="process-card h-100" delay={180}>
              <div className="process-card__number">02</div>
              <h3>Planning</h3>
              <p className="mb-0">We define scope, timeline, deliverables, and success criteria.</p>
            </Reveal>
            <Reveal as="div" className="process-card h-100" delay={260}>
              <div className="process-card__number">03</div>
              <h3>Delivery</h3>
              <p className="mb-0">We execute with support, check-ins, and practical recommendations.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
