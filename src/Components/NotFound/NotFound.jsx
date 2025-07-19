import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import { useEffect } from "react";

export default function NotFound() {

  useEffect(() => {
        document.title = "Page Not Found";
      },[]);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center text-white bg-main">
            <h1 className="text-uppercase fw-bolder fs-1 mb-3 text-center">404</h1>
              <Heading title="Page Not Found" textColor="text-white" bgColor="bg-white" />
                <p className="text-center fw-bold">The page you are looking for is not found</p>
                <Link className="btn bg-second text-white" to={'/'}>BACK TO HOMEPAGE</Link>
            </div>
    </>
  )
}
