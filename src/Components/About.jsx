import React from 'react'

const About = () => {
  return (
    <div>
       {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">About Me</h2>
          <p className="text-center">I am fresher MERN Stack Developer with hands-on experience in building projects using the MERN stack, with a strong focus on frontend development using React.js.

I enjoy creating responsive, user-friendly, and modern web applications. I have worked on multiple projects where I implemented reusable components, clean UI designs, and optimized performance.

Along with frontend development, I am learning backend technologies such as Node.js, Express.js, and MongoDB to grow as a complete full-stack developer. I am eager to learn, improve my skills, and contribute to real-world projects in a professional environment.</p>
        </div>
      </section>

     {/* Skills Section */}
<section id="skills" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold">Technical Skills</h2>

    <div className="row g-4">
      {/* Frontend */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body text-center d-flex flex-column">
            <div className="mb-4">
              <i className="bi bi-code-slash display-4 text-primary"></i>
            </div>
            <h5 className="card-title fw-bold mb-3">Frontend Development</h5>
            <p className="card-text text-muted mb-4">
              React.js, HTML5, CSS3, JavaScript (ES6+), Bootstrap, Responsive Design
            </p>
            <div className="mt-auto">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <span className="badge bg-primary">React</span>
                <span className="badge bg-primary">JavaScript</span>
                <span className="badge bg-primary">Bootstrap</span>
                <span className="badge bg-info">Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backend */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body text-center d-flex flex-column">
            <div className="mb-4">
              <i className="bi bi-server display-4 text-primary"></i>
            </div>
            <h5 className="card-title fw-bold mb-3">Backend Development</h5>
            <p className="card-text text-muted mb-4">
              Node.js, Express.js, RESTful APIs, MongoDB, Authentication (JWT), Payment Integration
            </p>
            <div className="mt-auto">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <span className="badge bg-primary">Node.js</span>
                <span className="badge bg-primary">Express</span>
                <span className="badge bg-success">MongoDB</span>
                <span className="badge bg-success">REST API</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Others */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body text-center d-flex flex-column">
            <div className="mb-4">
              <i className="bi bi-tools display-4 text-primary"></i>
            </div>
            <h5 className="card-title fw-bold mb-3">Tools & Others</h5>
            <p className="card-text text-muted mb-4">
              GitHub, VS Code, JWT Authentication, Responsive Design
            </p>
            <div className="mt-auto">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <span className="badge bg-primary">Git</span>
                <span className="badge bg-primary">GitHub</span>
                <span className="badge bg-info">Postman</span>
                <span className="badge bg-success">Authentication</span>
              </div>
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

export default About