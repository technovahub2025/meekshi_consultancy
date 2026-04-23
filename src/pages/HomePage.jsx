import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ConsultingIllustration from '../components/ConsultingIllustration'
import client1Image from '../assets/client-1.jpg'
import client2Image from '../assets/client-2.jpg'
import client3Image from '../assets/client-3.jpg'

const homeServices = [
  {
    id: '01',
    title: 'HR Consulting',
    points: ['Recruitment & Talent Strategy', 'HR Policy Setup', 'Employee Engagement'],
  },
  {
    id: '02',
    title: 'Business Consulting',
    points: ['Startup Guidance', 'Process Setup', 'Growth Strategy'],
  },
  {
    id: '03',
    title: 'Women Empowerment Programs',
    points: ['Workshops & Training', 'Career Guidance', 'Leadership Development'],
  },
]

const clientStories = [
  {
    quote:
      'Working with Meekshi Consultancy felt effortless. They guided us through process setup and delivered outcomes beyond expectations.',
    name: 'Saurabh Dutta',
    role: 'CEO, Green Revolution Co.',
    image: client1Image,
  },
  {
    quote:
      'Integrated support across hiring and operations boosted our team performance through a clear and practical workflow.',
    name: 'Arvind Chauhan',
    role: 'VP of Product, Zapway',
    image: client2Image,
  },
  {
    quote:
      'From startup confusion to structured growth, their consulting transformed our execution and digital presence.',
    name: 'Lisa Wilson',
    role: 'VP, Sustainable Goods Co.',
    image: client3Image,
  },
]

function HomePage() {
  return (
    <main>
      <section className="hero-section py-5 py-lg-6">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <Reveal as="div" className="col-lg-7" delay={100}>
              <p className="eyebrow mb-2">Meekshi Consultancy</p>
              <h1 className="display-title mb-3">Empowering Businesses & People to Grow with Clarity and Confidence</h1>
              <p className="lead-copy mb-4">HR Consulting | Business Strategy | Women Empowerment Initiatives</p>
              <div className="d-flex flex-wrap gap-3">
                <Link className="btn btn-brand-primary" to="/contact">Book a Free Consultation</Link>
                <a className="btn btn-brand-outline" href="https://wa.me/919000000000" target="_blank" rel="noreferrer">WhatsApp Now</a>
              </div>
            </Reveal>
            <Reveal as="div" className="col-lg-5" delay={250}>
              <div className="hero-visual-stack">
                <ConsultingIllustration />
                <div className="hero-stats">
                  <div className="hero-stat">
                    <strong>20+</strong>
                    <span>Businesses Supported</span>
                  </div>
                  <div className="hero-stat">
                    <strong>100+</strong>
                    <span>Individuals Guided</span>
                  </div>
                  <div className="hero-stat">
                    <strong>10+</strong>
                    <span>Workshops Conducted</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-5 home-services">
        <div className="container">
          <div className="section-head mb-4">
            <p className="home-services__eyebrow mb-2">What We Do</p>
            <h2>Our Services</h2>
            <p>Practical support for founders, teams, and professionals.</p>
          </div>
          <div className="row g-4">
            {homeServices.map((service, index) => (
              <Reveal as="div" className="col-md-6 col-lg-4" delay={100 + (index * 80)} key={service.title}>
                <article className="service-mosaic-card h-100">
                  <div className="service-mosaic-card__band">
                    <span className="service-mosaic-card__number">{service.id}</span>
                    <span className="service-mosaic-card__label">Core Service</span>
                  </div>
                  <div className="service-mosaic-card__body">
                    <h3>{service.title}</h3>
                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="consult-spotlight py-4">
        <div className="container text-center">
          <Reveal as="div" delay={100}>
            <h2 className="consult-spotlight__title">Unlock your Business Potential</h2>
            <p className="consult-spotlight__subtitle">Expert guidance to accelerate your growth.</p>
          </Reveal>
          <Reveal as="div" delay={180}>
            <Link className="consult-spotlight__btn" to="/contact">
              Book your Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-4 section-soft">
        <div className="container">
          <div className="row g-4">
            <Reveal as="div" className="col-lg-6" delay={100}>
              <div className="panel h-100">
                <h2>Why Choose Meekshi Consultancy?</h2>
                <ul className="check-list mt-3">
                  <li>10+ Years HR Expertise</li>
                  <li>10+ Years NGO Impact Experience</li>
                  <li>Practical, Result-Oriented Approach</li>
                  <li>Personalized Solutions</li>
                </ul>
              </div>
            </Reveal>
            <Reveal as="div" className="col-lg-6" delay={220}>
              <div className="panel quote-panel h-100">
                <p className="quote-text">Helping businesses build strong teams and scalable systems.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-5 client-stories">
        <div className="container">
          <div className="client-stories__head mb-4">
            <Reveal as="div" delay={100}>
              <p className="client-stories__eyebrow mb-2">Client Success Stories</p>
              <h2 className="client-stories__title">How We Helped Businesses Thrive</h2>
            </Reveal>
            <Reveal as="div" delay={180}>
              <a href="#" className="btn btn-brand-primary btn-sm">View all</a>
            </Reveal>
          </div>

          <div className="row g-4">
            {clientStories.map((story, index) => (
              <Reveal as="div" className="col-md-6 col-lg-4" key={story.name} delay={120 + (index * 90)}>
                <article className="story-card h-100">
                  <div className="story-card__quote">&#10077;</div>
                  <p className="story-card__text">{story.quote}</p>
                  <div className="story-card__profile">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="story-card__avatar-img"
                      loading="lazy"
                    />
                    <div>
                      <h3>{story.name}</h3>
                      <p>{story.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 section-soft">
        <div className="container">
          <div className="section-head mb-4">
            <h2>How We Work</h2>
            <p>A simple process that keeps things practical, collaborative, and measurable.</p>
          </div>
          <div className="row g-4">
            <Reveal as="div" className="col-md-4" delay={100}>
              <div className="panel h-100">
                <h3>1. Understand</h3>
                <p className="mb-0">We start by mapping your goals, blockers, and current process gaps.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-md-4" delay={180}>
              <div className="panel h-100">
                <h3>2. Design</h3>
                <p className="mb-0">We build a focused plan with clear actions, owners, and timelines.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-md-4" delay={260}>
              <div className="panel h-100">
                <h3>3. Implement</h3>
                <p className="mb-0">We support execution so the plan turns into visible progress.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-strip py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
          <div>
            <h2 className="mb-2">Let's Build Your Growth Story Together</h2>
            <p className="mb-0">Book a call and get a practical action plan.</p>
          </div>
          <div className="d-flex flex-wrap gap-3">
            <Link className="btn btn-brand-primary" to="/contact">Book a Call</Link>
            <a className="btn btn-brand-outline-dark" href="https://wa.me/919000000000" target="_blank" rel="noreferrer">Contact via WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
