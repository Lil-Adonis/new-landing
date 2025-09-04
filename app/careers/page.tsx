import React from 'react'
import Layout from '@/components/layout/Layout';





const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="me-2">
    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-2.85-3H8.85A2.996 2.996 0 0 0 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM8.85 4h6.3c.55 0 1 .45 1 1s-.45 1-1 1h-6.3c-.55 0-1-.45-1-1s.45-1 1-1z" />
  </svg>
)

const TargetIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
)

const GraphUpIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
  </svg>
)

const PeopleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16c-.8 0-1.54.37-2.01.99l-2.54 3.38c-.74.99-.74 2.31 0 3.3l1.04 1.38V22h6zm-12.5 0c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5S6 13.67 6 15v6c0 .83.67 1.5 1.5 1.5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5V4c0-.83-.67-1.5-1.5-1.5S11 3.17 11 4v6c0 .83.67 1.5 1.5 1.5zM6.5 7C7.33 7 8 6.33 8 5.5S7.33 4 6.5 4 5 4.67 5 5.5 5.67 7 6.5 7z" />
  </svg>
)

const HeartPulseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
  </svg>
)

const PiggyBankIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

const CalendarCheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
)

const MortarboardIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="me-2">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
)

const EnvelopeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="me-2">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)
const page = () => {
  return (
       <Layout>
  <div className="careers-page">
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9 text-center">
              <div className="hero-content mt-10">
                <h1 className="hero-title font-heading">
                  Join Us in Redefining
                  
                  Property Operations
                </h1>
                <p className="hero-subtitle font-body">
                  We're building the future of autonomous facilities – empowering service providers worldwide with
                  cutting-edge AI technology and human-first values.
                </p>
                <button className="btn btn-primary btn-lg cta-button">
                  <BriefcaseIcon />
                  Explore Open Roles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-decoration"></div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title font-heading">Why Work at Limpiar</h2>
              <p className="section-subtitle font-body">
                Join a mission-driven team that's transforming the future of property operations
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <TargetIcon />
                </div>
                <h3 className="feature-title font-heading">Mission-Driven</h3>
                <p className="feature-description font-body">
                  Build technology that creates economic mobility and drives sustainable impact across communities
                  worldwide.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <GraphUpIcon />
                </div>
                <h3 className="feature-title font-heading">Growth Opportunities</h3>
                <p className="feature-description font-body">
                  Fast-growing startup environment with unlimited potential to lead, innovate, and shape the future.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <PeopleIcon />
                </div>
                <h3 className="feature-title font-heading">Inclusive Culture</h3>
                <p className="feature-description font-body">
                  Veteran-owned, minority-owned company deeply committed to equity, diversity, and inclusion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="team-image-container">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-02%20at%2011.52.10-Gnp2cwcL728h6HZ5H5xxk3agmHQciz.png"
                  alt="Diverse team of professionals collaborating in modern office environment"
                  className="img-fluid team-image"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-content">
                <h2 className="team-title font-heading">Our Team</h2>
                <p className="team-description font-body">
                  At Limpiar, we combine cutting-edge AI with human-first values. Our diverse team spans from Navy
                  intelligence veterans to tech startup innovators, united by one ambitious goal: making property
                  operations autonomous, equitable, and sustainable for communities worldwide.
                </p>
                <div className="team-stats">
                  <div className="stat-item">
                    <div className="stat-number font-heading">50+</div>
                    <div className="stat-label font-body">Team Members</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number font-heading">15+</div>
                    <div className="stat-label font-body">Countries</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number font-heading">100%</div>
                    <div className="stat-label font-body">Remote-First</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title font-heading">What We Offer</h2>
              <p className="section-subtitle font-body">
                Comprehensive benefits and perks designed to support your growth, well-being, and success
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <HeartPulseIcon />
                </div>
                <h4 className="font-heading">Health & Wellness</h4>
                <p className="font-body">Comprehensive medical, dental, vision coverage plus wellness programs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <PiggyBankIcon />
                </div>
                <h4 className="font-heading">Financial Security</h4>
                <p className="font-body">Competitive salary, equity participation, and 401(k) with company matching</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <CalendarCheckIcon />
                </div>
                <h4 className="font-heading">Work-Life Balance</h4>
                <p className="font-body">Unlimited PTO, flexible schedules, and remote-first work arrangements</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <MortarboardIcon />
                </div>
                <h4 className="font-heading">Learning & Growth</h4>
                <p className="font-body">
                  Professional development budget, mentorship programs, and conference attendance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="cta-content">
                <h2 className="cta-title font-heading">Ready to Build the Future?</h2>
                <p className="cta-description font-body">
                  Join our mission to revolutionize property operations and create lasting impact in communities
                  worldwide. Your next career adventure starts here.
                </p>
                <div className="cta-buttons">
                  <button className="btn btn-primary btn-lg">
                    <ArrowRightIcon />
                    View Open Positions
                  </button>
                  <button className="btn btn-outline-light btn-lg">
                    <EnvelopeIcon />
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  )
}

export default page
