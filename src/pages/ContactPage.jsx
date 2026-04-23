import Reveal from '../components/Reveal'
import contactImage from '../assets/contact us.jpg'

function ContactPage() {
  return (
    <main>
      <section className="page-hero py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="eyebrow mb-2">Contact</p>
              <h1 className="page-title">Let's build your growth plan together.</h1>
            </div>
            <div className="col-lg-6">
              <img
                src={contactImage}
                alt="Contact Meekshi Consultancy"
                className="about-hero__image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <Reveal as="div" className="col-lg-7" delay={100}>
              <div className="panel h-100">
                <h2 className="mb-3">Send Us a Message</h2>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input id="fullName" className="form-control" type="text" placeholder="Your name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input id="email" className="form-control" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="service">Service</label>
                    <select id="service" className="form-select">
                      <option>HR Consulting</option>
                      <option>Business Consulting</option>
                      <option>Women Empowerment Program</option>
                      <option>Training & Workshops</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea id="message" className="form-control" rows="5" placeholder="Tell us about your requirement"></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-brand-primary" type="submit">Submit Form</button>
                  </div>
                </form>
              </div>
            </Reveal>

            <Reveal as="div" className="col-lg-5" delay={220}>
              <div className="panel h-100">
                <h2>Contact Details</h2>
                <p className="mb-2"><strong>Phone:</strong> +91 90000 00000</p>
                <p className="mb-2"><strong>Email:</strong> hello@meekshiconsultancy.com</p>
                <p className="mb-4"><strong>Location:</strong> Pondicherry</p>
                <div className="d-flex flex-wrap gap-3">
                  <a className="btn btn-brand-primary" href="https://wa.me/919000000000" target="_blank" rel="noreferrer">WhatsApp</a>
                  <a className="btn btn-brand-outline" href="mailto:hello@meekshiconsultancy.com">Email Us</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-5 section-soft contact-guidance">
        <div className="container">
          <div className="contact-guidance__head mb-4">
            <p className="contact-guidance__eyebrow mb-2">Quick Prep</p>
            <h2>Before You Reach Out</h2>
            <p>A few quick details help us respond faster and more accurately.</p>
          </div>
          <div className="row g-4">
            <Reveal as="div" className="col-md-4" delay={100}>
              <div className="panel h-100 contact-guidance__card">
                <div className="contact-guidance__icon">01</div>
                <h3>What to share</h3>
                <p className="mb-0">Your current challenge, team size, and the outcome you're aiming for.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-md-4" delay={180}>
              <div className="panel h-100 contact-guidance__card">
                <div className="contact-guidance__icon">02</div>
                <h3>How we respond</h3>
                <p className="mb-0">We review your request and reply with the next practical step.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-md-4" delay={260}>
              <div className="panel h-100 contact-guidance__card">
                <div className="contact-guidance__icon">03</div>
                <h3>Best for</h3>
                <p className="mb-0">Founders, organizations, training groups, and career development initiatives.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
