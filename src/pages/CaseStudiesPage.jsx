import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import caseStudyImage from '../assets/case study.png'

function ProblemIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3 2 21h20L12 3Zm0 6v6m0 3h.01" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SolutionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M10 7a5 5 0 0 1 8.66 3.53A5 5 0 0 1 16 15l-1 2h-6l-1-2a5 5 0 0 1 2-8Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21h6M10 19h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ResultIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m8 12 2.5 2.5L16 9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const studies = [
  {
    title: 'Startup Hiring Structure',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    problem: 'Lack of HR structure and ad-hoc hiring decisions.',
    solution: 'Designed HR policies, interview scorecards, and hiring workflow.',
    result: 'Hiring efficiency improved by 40%.',
  },
  {
    title: 'Process and SOP Rollout',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    problem: 'Role confusion and inconsistent execution.',
    solution: 'Built SOPs and process ownership framework.',
    result: '30% faster project completion cycle.',
  },
  {
    title: 'Career Readiness Workshops',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    problem: 'Students lacked interview readiness and confidence.',
    solution: 'Delivered structured coaching and mock interviews.',
    result: '100+ individuals guided.',
  },
]

function CaseStudiesPage() {
  return (
    <main>
      <section className="page-hero py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="eyebrow mb-2">Case Studies</p>
              <h1 className="page-title">Client Problem to Solution to Result.</h1>
            </div>
            <div className="col-lg-6">
              <img
                src={caseStudyImage}
                alt="Case studies and client success outcomes"
                className="about-hero__image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 case-studies-showcase">
        <div className="container">
          <div className="section-head case-studies-showcase__head mb-4">
            <h2>Case Studies</h2>
            <p>Explore our track record of architectural rigor and strategic excellence across global industries.</p>
          </div>
          <div className="row g-4">
            {studies.map((study, index) => (
              <Reveal as="div" className="col-md-6 col-lg-4" key={study.title} delay={100 + (index * 90)}>
                <article className="panel case-panel h-100">
                  <div className="case-panel__image-wrap">
                    <img src={study.image} alt={study.title} className="case-panel__image" />
                    <span className="case-panel__pill" aria-hidden="true"></span>
                  </div>
                  <div className="case-panel__content">
                    <h3>{study.title}</h3>
                    <p className="case-row">
                      <span className="case-row__label"><span className="case-row__icon case-row__icon--problem"><ProblemIcon /></span> Problem</span>
                      <span>{study.problem}</span>
                    </p>
                    <p className="case-row">
                      <span className="case-row__label"><span className="case-row__icon case-row__icon--solution"><SolutionIcon /></span> Solution</span>
                      <span>{study.solution}</span>
                    </p>
                    <p className="case-row mb-0">
                      <span className="case-row__label"><span className="case-row__icon case-row__icon--result"><ResultIcon /></span> Result</span>
                      <span>{study.result}</span>
                    </p>
                    <a href="#" className="case-panel__link">Read Full Report</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
          <div>
            <h2 className="mb-2">Want your own success story?</h2>
            <p className="mb-0">Let's create a strategy around your current bottlenecks.</p>
          </div>
          <Link className="btn btn-brand-primary" to="/contact">Book a Discovery Call</Link>
        </div>
      </section>

      <section className="py-5 case-process">
        <div className="container">
          <div className="section-head mb-4 case-process__head">
            <h2>What A Successful Project Includes</h2>
            <p>A good outcome usually comes from a well-scoped and well-supported process.</p>
          </div>
          <div className="row g-4">
            <Reveal as="div" className="col-md-6 col-lg-3" delay={100}>
              <div className="panel h-100 case-process__card">
                <span className="case-process__number">01</span>
                <h3>Problem Mapping</h3>
                <p className="mb-0">Identify the real bottlenecks before proposing a solution.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-md-6 col-lg-3" delay={170}>
              <div className="panel h-100 case-process__card">
                <span className="case-process__number">02</span>
                <h3>Stakeholder Alignment</h3>
                <p className="mb-0">Make sure everyone understands the goals and responsibilities.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-md-6 col-lg-3" delay={240}>
              <div className="panel h-100 case-process__card">
                <span className="case-process__number">03</span>
                <h3>Execution Support</h3>
                <p className="mb-0">Turn recommendations into practical action.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-md-6 col-lg-3" delay={310}>
              <div className="panel h-100 case-process__card">
                <span className="case-process__number">04</span>
                <h3>Review & Improve</h3>
                <p className="mb-0">Track results and refine the process where needed.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudiesPage
