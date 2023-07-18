import React from 'react'

const Signup = () => {
  return (
    <>
      <section className="h-100 form">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5">
                <img src="https://w7.pngwing.com/pngs/773/90/png-transparent-iphone-groupon-deal-of-the-day-customer-service-cd-electronics-company-text.png" alt="logo" width="100" />
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5 form-body">
                  <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                  <form method="POST">
                    <div className="mb-3">
                      <label className="mb-2 text-muted" for="name">Name</label>
                      <input id="name" type="text" className="form-control" name="name" required />
                    </div>

                    <div className="mb-3">
                      <label className="mb-2 text-muted" for="email">E-Mail Address</label>
                      <input id="email" type="email" className="form-control" name="email" required />
                    </div>

                    <div className="mb-3">
                      <label className="mb-2 text-muted" for="password">Password</label>
                      <input id="password" type="password" className="form-control" name="password" required />
                    </div>
                    <div className="align-items-center d-flex">
                      <button type="submit" className="btn btn-primary ms-auto">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    Already have an account? <a href="/login" className="text-dark">Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup