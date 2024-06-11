import Footer from "./footer";
// import Navbar from "./navbar";
import Scroll from "./scroll";

const Layout = (props: any) => {
  return (
    <Scroll>
      {/* <Navbar /> */}
      <div className={` ${props.className}`}>{props.children}</div>
      <Footer />
    </Scroll>
  );
};

export default Layout;
