import React from 'react'

const Education = () => {
  return (
    <div>
       {/* Education Section */}
    {/* Education Section */}
<section id="education" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold">Education</h2>

    <div className="row">
      {/* B.Tech */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body d-flex flex-column">
            <div className="mb-3">
              <span className="badge bg-primary px-3 py-2">2022 – 2025</span>
            </div>
            <h5 className="card-title fw-bold">
              B.Tech Computer Science Engineering
            </h5>
            <h6 className="card-subtitle mb-3 text-muted">
              Bharat Group of College, Mansa, Punjab
            </h6>
            <div className="mt-auto">
              <p className="card-text mb-1">
                <strong>Status:</strong> Completed
              </p>
              <p className="card-text mb-0">
                <strong>Score:</strong> 70%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Diploma */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body d-flex flex-column">
            <div className="mb-3">
              <span className="badge bg-primary px-3 py-2">2020 – 2022</span>
            </div>
            <h5 className="card-title fw-bold">
              Polytechnic Diploma in Computer Science
            </h5>
            <h6 className="card-subtitle mb-3 text-muted">
              Government Polytechnic College, Sirsa, Haryana
            </h6>
            <div className="mt-auto">
              <p className="card-text mb-1">
                <strong>Status:</strong> Completed
              </p>
              <p className="card-text mb-0">
                <strong>Score:</strong> 65%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 12th */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body d-flex flex-column">
            <div className="mb-3">
              <span className="badge bg-primary px-3 py-2">2018 – 2019</span>
            </div>
            <h5 className="card-title fw-bold">
              12th (Non-Medical)
            </h5>
            <h6 className="card-subtitle mb-3 text-muted">
              GSSS Kharian, Sirsa, Haryana
            </h6>
            <div className="mt-auto">
               <p className="card-text mb-1">
                <strong>Status:</strong> Completed
              </p>
              <p className="card-text mb-0">
                <strong>Score:</strong> 65%
              </p>
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

export default Education