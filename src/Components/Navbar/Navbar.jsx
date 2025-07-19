import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  let [scroll, setScroll] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  } , []);

  return (
    <>
<nav className={`navbar navbar-expand-lg fixed-top bg-second ${!scroll && 'py-4'}`}>
  <div className="container">
    <Link className="navbar-brand text-uppercase text-white fw-bolder fs-2" to={"/"}>
            Start Framework
          </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink className="nav-link text-white text-uppercase fw-bold fs-6 mt-3 mt-md-0 px-2" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link text-white text-uppercase fw-bold fs-6 mt-3 mt-md-0 px-2" to={"/portfolio"}>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link text-white text-uppercase fw-bold fs-6 mt-3 mt-md-0 px-2" to={"/contact"}>
                  Contact
                </NavLink>
              </li>
            </ul>
    </div>
  </div>
</nav>





    </>
  );
}
