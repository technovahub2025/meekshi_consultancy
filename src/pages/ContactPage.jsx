import Reveal from '../components/Reveal'
import contactImage from '../assets/contact us.jpg'

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const fullName = document.getElementById('fullName').value
    const email = document.getElementById('email').value
    const service = document.getElementById('service').value
    const message = document.getElementById('message').value

    const subject = encodeURIComponent(`New Enquiry - ${service}`)
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    )

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=meenakshiconsultancy@gmail.com&su=${subject}&body=${body}`,
      '_blank'
    )
  }

  return (
    <main>
      <section className="page-hero py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="eyebrow mb-2">Contact</p>
              <h1 className="page-title">
                Let's build your growth plan together.
              </h1>
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

                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      id="fullName"
                      className="form-control"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      id="email"
                      className="form-control"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Service</label>
                    <select id="service" className="form-select" required>
                      <option>HR Consulting</option>
                      <option>Business Consulting</option>
                      <option>Women Empowerment Program</option>
                      <option>Training & Workshops</option>
                      <option>Team Building (Organization/Institution)</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="5"
                      placeholder="Tell us about your requirement"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-brand-primary" type="submit">
                      Submit Form
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>

            <Reveal as="div" className="col-lg-5" delay={220}>
              <div className="panel h-100">
                <h2>Contact Details</h2>

                <p><strong>Phone:</strong> +91 8940135489</p>
                <p><strong>Email:</strong> meenakshiconsultancy@gmail.com</p>
                <p><strong>Location:</strong> Pondicherry</p>

                <div className="d-flex gap-3 mt-3">
                  <a
                    className="btn btn-brand-primary"
                    href="https://wa.me/918940135489"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>

                  <a
                    className="btn btn-brand-outline"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=meenakshiconsultancy@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage