import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
<section id="contact" className="py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold">Get in Touch</h2>
      <p className="text-muted">
        Have a project in mind? Feel free to reach out — I'd love to hear from you!
      </p>
    </div>

    
      {/* Left - Contact Form */}
    

      {/* Right - Profiles & Contact Info */}
      <div>
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body p-4 d-flex flex-column">

            <h4 className="mb-4">Connect with me</h4>

            {/* Social/Profile Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-5 justify-content-center justify-content-lg-start">
              <a 
                href="https://www.linkedin.com/in/manish-verma-438071245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline-primary flex-fill flex-lg-grow-0"
              >
                <i className="bi bi-linkedin me-2"></i> LinkedIn
              </a>

              <a 
                href="https://github.com/manishbhunna" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline-dark flex-fill flex-lg-grow-0"
              >
                <i className="bi bi-github me-2"></i> GitHub
              </a>

              <a 
                href="https://profile.indeed.com/p/manishs-tdxyy9z" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline-secondary flex-fill flex-lg-grow-0"
              >
                <i className="bi bi-briefcase-fill me-2"></i> Indeed
              </a>
            </div>

            <hr className="my-4" />

            {/* Contact Details */}
            <div className="row text-center text-lg-start gy-4 mt-auto">
              <div className="col-6 col-md-12 col-lg-6">
                <p className="mb-1 fw-semibold">
                  <i className="bi bi-envelope-fill me-2 text-primary"></i>Email
                </p>
                <p className="text-muted">jalandhramanish0gmail.com</p>
              </div>

              <div className="col-6 col-md-12 col-lg-6">
                <p className="mb-1 fw-semibold">
                  <i className="bi bi-telephone-fill me-2 text-primary"></i>Mobile
                </p>
                <p className="text-muted">+91 8222065302</p>
              </div>

              <div className="col-6 col-md-12 col-lg-6">
                <p className="mb-1 fw-semibold">
                  <i className="bi bi-geo-alt-fill me-2 text-primary"></i>Location
                </p>
                <p className="text-muted">Remote • Anywhere in India</p>
              </div>

              <div className="col-6 col-md-12 col-lg-6">
                <p className="mb-1 fw-semibold">
                  <i className="bi bi-check-circle-fill me-2 text-success"></i>Availability
                </p>
                <p className="text-muted">Available for Work</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    
  </div>
</section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2026 Manish Verma. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Contact