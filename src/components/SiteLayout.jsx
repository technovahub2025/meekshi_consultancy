import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import logo from '../assets/meenakshi consultancy.jpeg'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

function SiteLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsNavOpen(false)
  }, [pathname])

  const handleNavItemClick = () => {
    setIsNavOpen(false)
  }

  const logoStyle = {
    height: '90px',
    width: '90px',
    objectFit: 'cover',
    borderRadius: '50%',
  }

  return (
    <>
      {/* WhatsApp Button */}
      <a
        className="whatsapp-float"
        href="https://wa.me/918940135489"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-whatsapp" style={{fontSize:'30px'}}></i>
      </a>

      {/* HEADER */}
      <header className="site-header sticky-top">
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container">
            <NavLink
              className="navbar-brand fw-bold d-flex align-items-center gap-2"
              to="/"
            >
              <img src={logo} alt="Meekshi Logo" style={logoStyle} />
              MEENAKSHI CONSULTANCY
            </NavLink>

            <button
              className={`navbar-toggler ${isNavOpen ? 'is-open' : ''}`}
              type="button"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="navbar-toggler-icon-custom">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </span>
            </button>

            <div
              className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
            >
              <ul className="navbar-nav ms-auto gap-lg-2">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `nav-link ${isActive ? 'active' : ''}`
                      }
                      onClick={handleNavItemClick}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />

      {/* FOOTER */}
      <footer className="site-footer py-5 mt-5">
        <div className="container">
          <div className="row g-4">

            {/* LEFT SIDE */}
            <div className="col-md-7">
              <div className="d-flex align-items-center gap-2">
                <img src={logo} alt="Meekshi Logo" style={logoStyle} />

                <div>
                  <h3 className="footer-title mb-0 fw-bold">
                    MEENAKSHI CONSULTANCY
                  </h3>
                  <small className="tagline">
                    Where People, Process & Purpose Meet
                  </small>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - CONTACT CARDS */}
            <div className="col-md-5">
              <div className="d-flex flex-column gap-3">

                {/* Location */}
                <div className="footer-contact-card">
                  <div className="footer-contact-item">
                    <div className="contact-icon-wrapper">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="contact-text">
                      <h6>Location</h6>
                      <p className="mb-0" style={{ fontWeight: '600' }}>Pondicherry</p>
                    </div>
                  </div>
                </div>

                {/* Email - Gmail Web */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=meenakshiconsultancy@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-contact-card text-decoration-none"
                >
                  <div className="footer-contact-item">
                    <div className="contact-icon-wrapper">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="contact-text">
                      <h6>Email</h6>
                      <p className="mb-0" style={{ fontWeight: '600' }}>
                        meenakshiconsultancy@gmail.com
                      </p>
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918940135489"
                  className="footer-contact-card text-decoration-none"
                >
                  <div className="footer-contact-item">
                    <div className="contact-icon-wrapper">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="contact-text">
                      <h6>Phone</h6>
                      <p className="mb-0" style={{ fontWeight: '600' }}>+91 8940135489</p>
                    </div>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default SiteLayout