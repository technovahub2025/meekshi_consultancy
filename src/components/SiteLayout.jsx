import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

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

  return (
    <>
      <a className="whatsapp-float" href="https://wa.me/919000000000" target="_blank" rel="noreferrer">
        WhatsApp
      </a>

      <header className="site-header sticky-top">
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container">
            <NavLink className="navbar-brand fw-bold" to="/">
              Meekshi Consultancy
            </NavLink>

            <button
              className={`navbar-toggler ${isNavOpen ? 'is-open' : ''}`}
              type="button"
              aria-controls="mainNav"
              aria-expanded={isNavOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="navbar-toggler-icon-custom" aria-hidden="true">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </span>
            </button>

            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="mainNav">
              <ul className="navbar-nav ms-auto gap-lg-2">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
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

      <footer className="site-footer py-5 mt-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-7">
              <h3 className="footer-title">Meekshi Consultancy</h3>
              <p className="mb-0">Where People, Process & Purpose Meet.</p>
            </div>
            <div className="col-md-5">
              <p className="mb-1"><strong>Location:</strong> Pondicherry</p>
              <p className="mb-1"><strong>Email:</strong> hello@meekshiconsultancy.com</p>
              <p className="mb-0"><strong>Phone:</strong> +91 90000 00000</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default SiteLayout
