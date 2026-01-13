import React from 'react'

const Projects = () => {
  return (
    <div>
      
     {/* Projects Section */}
<section id="projects" className="py-5">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold">Projects</h2>

    <div className="row g-4">
      {/* Customize Gifts Website */}
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 project-card">
         <div
    className="card-img-top bg-dark d-flex align-items-center justify-content-center"
    style={{ height: "180px", overflow: "hidden" }}
  >
    <img
      src="gift.png"
      alt="gift"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}
    />
  </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">Customize Gifts Website</h5>
            <p className="card-text text-muted mb-3">
              Fully responsive gifts customization platform with shopping cart, payment integration, and product personalization features.
            </p>
            <div className="mt-auto">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary">React.js</span>
                <span className="badge bg-primary">Node.js</span>
                <span className="badge bg-success">Payment Gateway</span>
                <span className="badge bg-info">Responsive</span>
              </div>
              <a href="https://manishbhunna.github.io/Customize-Gift/" className="btn btn-outline-primary btn-sm">View Project →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media App */}
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 project-card">
         <div
    className="card-img-top bg-dark d-flex align-items-center justify-content-center"
    style={{ height: "180px", overflow: "hidden" }}
  >
    <img
      src="insta.jfif"
      alt="instagram"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}
    />
  </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">Social Media Application</h5>
            <p className="card-text text-muted mb-3">
              Full-featured social platform with user authentication, post creation, editing, and real-time interactions.
            </p>
            <div className="mt-auto">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary">React.js</span>
                <span className="badge bg-primary">Node.js</span>
                <span className="badge bg-success">Authentication</span>
              </div>
              <a href="https://manishbhunna.github.io/Social_media_app/" className="btn btn-outline-primary btn-sm">View Project →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Currency Converter */}
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 project-card">
          <div
    className="card-img-top bg-dark d-flex align-items-center justify-content-center"
    style={{ height: "180px", overflow: "hidden" }}
  >
    <img
      src="currnecy.png"
      alt="currency"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}
    />
  </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">Currency Converter</h5>
            <p className="card-text text-muted mb-3">
              It allows users to convert one currency into another using real-time or predefined exchange rates.
            </p>
            <div className="mt-auto">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary">React.js</span>
                <span className="badge bg-primary">Node.js</span>
                <span className="badge bg-success">Express.js</span>
              </div>
              <a href="https://manishbhunna.github.io/Currency_Converter/" className="btn btn-outline-primary btn-sm">View Project →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Weather App */}
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 project-card">
         <div
    className="card-img-top bg-dark d-flex align-items-center justify-content-center"
    style={{ height: "180px", overflow: "hidden" }}
  >
    <img
      src="weather..jfif"
      alt="weather App"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}
    />
  </div>
                <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">Weather Application</h5>
            <p className="card-text text-muted mb-3">
              Responsive weather app with real-time data fetching, search, and location-based forecasts using REST API.
            </p>
            <div className="mt-auto">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary">React.js</span>
                <span className="badge bg-info">REST API</span>
                <span className="badge bg-success">Responsive</span>
              </div>
              <a href="https://manishbhunna.github.io/Weather-App/" className="btn btn-outline-primary btn-sm">View Project →</a>
            </div>
          </div>
        </div>
      </div>

{/* Quiz App */}
<div className="col-md-6 col-lg-4">
  <div className="card h-100 shadow-sm border-0 project-card">
    <div
    className="card-img-top bg-dark d-flex align-items-center justify-content-center"
    style={{ height: "180px", overflow: "hidden" }}
  >
    <img
      src="Quiz App.png"
      alt="Quiz App"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}
    />
  </div>
    <div className="card-body d-flex flex-column">
      <h5 className="card-title fw-bold">Quiz Application</h5>
      <p className="card-text text-muted mb-3">
        Interactive quiz application with multiple-choice questions, score tracking,
        and real-time feedback for an engaging user experience.
      </p>
      <div className="mt-auto">
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge bg-primary">React.js</span>
          <span className="badge bg-warning text-dark">JavaScript</span>
          <span className="badge bg-success">Dynamic UI</span>
        </div>
        <a href="https://manishbhunna.github.io/Quiz_App/" className="btn btn-outline-primary btn-sm">
          View Project →
        </a>
      </div>
    </div>
  </div>
</div>


      {/* Personal Portfolio */}
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 project-card">
         <div
    className="card-img-top bg-dark d-flex align-items-center justify-content-center"
    style={{ height: "180px", overflow: "hidden" }}
  >
    <img
      src="Resume.avif"
      alt="Resume"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}
    />
  </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">Personal Portfolio Website</h5>
            <p className="card-text text-muted mb-3">
              Modern responsive portfolio showcasing projects, skills, and professional experience.
            </p>
            <div className="mt-auto">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary">HTML5</span>
                <span className="badge bg-primary">CSS3</span>
                <span className="badge bg-primary">JavaScript</span>
              </div>
              <a href="#" className="btn btn-outline-primary btn-sm">View Project →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Projects