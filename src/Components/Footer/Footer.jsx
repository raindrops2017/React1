export default function Footer() {
  return (
    <>
      <div className="footer bg-second">
        <div className="container">
          <div className="row m-4">

            <div className="col-md-4 mb-md-3">
              <div className="card bg-transparent  h-100 w-100">
                <div className="card-body text-center text-white">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-transparent   h-100 w-100">
                <div className="card-body text-center text-white">
                <h3>AROUND THE WEB</h3>
                <div className="d-flex justify-content-center align-items-center">
                    <i className="fa-brands fa-facebook mx-1 icon"></i>
                    <i className="fa-brands fa-twitter mx-1 icon"></i>
                    <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                    <i className="fa-solid fa-globe mx-1 icon"></i>
                </div>
              </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-transparent h-100 w-100">
                <div className="card-body text-center text-white">
                <h3>ABOUT FREELANCER</h3>
                <p className="text-center">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="text-center text-white bg-third py-4">
            <p>Copyright © Your Website 2021</p>
        </div>
    </>
  );
}
