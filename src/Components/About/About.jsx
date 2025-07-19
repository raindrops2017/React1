import { useEffect } from "react";
import Heading from "../Heading/Heading";

export default function About() {

  useEffect(() => {
    document.title = "About";
  },[]);
  
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center text-white bg-main">
        <Heading title="About Component" textColor="text-white" bgColor="bg-white" />
        <div className="container">
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 pe-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
