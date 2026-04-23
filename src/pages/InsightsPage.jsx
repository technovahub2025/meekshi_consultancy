import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import insightImage from '../assets/insight.jpg'

const posts = [
  {
    title: 'Top Hiring Mistakes Startups Make',
    summary: 'A practical checklist to avoid costly recruitment errors in early growth stages.',
  },
  {
    title: 'How to Build HR from Scratch',
    summary: 'A simple step-by-step framework for first-time founders.',
  },
  {
    title: 'Career Guidance for Freshers',
    summary: 'How students can stand out in interviews and choose better opportunities.',
  },
]

function InsightsPage() {
  return (
    <main>
      <section className="page-hero py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="eyebrow mb-2">Insights</p>
              <h1 className="page-title">Content that builds trust, authority, and action.</h1>
            </div>
            <div className="col-lg-6">
              <img
                src={insightImage}
                alt="Insights and business strategy"
                className="about-hero__image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4 insights-grid">
            {posts.map((post, index) => (
              <Reveal as="div" className="col-md-6 col-lg-4" key={post.title} delay={100 + (index * 90)}>
                <article className="panel blog-panel blog-panel--premium h-100">
                  <p className="blog-panel__meta">Insight 0{index + 1}</p>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <a href="#" className="text-link blog-panel__link">Read Article</a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 section-soft insights-cta">
        <div className="container">
          <div className="row g-4 align-items-center">
            <Reveal as="div" className="col-lg-7" delay={100}>
              <div className="panel h-100 insights-cta__topics">
                <p className="insights-cta__eyebrow">Knowledge Areas</p>
                <h2>Topics We Cover</h2>
                <ul className="check-list mb-0">
                  <li>Hiring and HR best practices</li>
                  <li>Founder strategy and business systems</li>
                  <li>Women empowerment and career growth</li>
                  <li>Workshops, training, and leadership development</li>
                </ul>
              </div>
            </Reveal>
            <Reveal as="div" className="col-lg-5" delay={220}>
              <div className="panel h-100 insights-cta__join">
                <p className="insights-cta__eyebrow">Newsletter</p>
                <h2 className="mb-3">Stay Updated</h2>
                <p>Get practical insights, workshop updates, and growth ideas delivered to your inbox.</p>
                <Link className="btn btn-brand-primary" to="/contact">Join the Conversation</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

export default InsightsPage
