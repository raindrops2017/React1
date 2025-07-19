import { useEffect } from "react";
import avatar from "../../assets/avataaars.svg";
import Heading from "../Heading/Heading.jsx";

import style from "./Home.module.css";

export default function Home() {

  useEffect(() => {
      document.title = "Home";
    },[]);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center text-white bg-main">
        
          <img src={avatar} alt="avatar" className={`${style.image} mb-3`} />
          <Heading title="START FRAMEWORK" textColor="text-white" bgColor="bg-white" />
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
