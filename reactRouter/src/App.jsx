import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import React from "react";
import { Outlet} from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
