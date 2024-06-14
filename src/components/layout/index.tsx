import Footer from "./footer";
import Scroll from "./scroll";

const Layout = (props: any) => {
  return (
    <Scroll>
      <div className={` ${props.className}`}>{props.children}</div>
      <Footer />
    </Scroll>
  );
};

export default Layout;
