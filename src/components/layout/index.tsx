import React from "react";
import Hero from "./hero";
import Footer from "./footer";

const Layout = (props: any) => {
  return (
    <div className="">
      <Hero />
      <div className={` ${props.className}`}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
