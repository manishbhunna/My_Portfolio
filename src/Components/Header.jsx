import React from 'react'

const Header = () => {
  return (
    <div>{/* Navbar */}
      <nav className="navbar navbar-expand-lg n text-dark bg-white fixed-top">
        <div className="container ">
          <a className="navbar-brand" href="#">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-dark text-white text-center py-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <img src="/mannu.png" alt="Profile" className="rounded-circle mb-3" style={{ width: '300px', height: '300px' }} />
          <h1 className="display-4">Manish Verma</h1>
          <p className="lead">MERN | Full Stack Developer | Passionate about creating innovative web solutions</p>
          <a href="#contact" className="btn btn-light btn-lg">Get in Touch</a>
        </div>
      </section></div>
  )
}

export default Header