import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import style from './Layout.module.css'

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className={style.content}>
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  )
}
