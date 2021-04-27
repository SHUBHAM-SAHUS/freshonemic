
import { Footer } from "components/commoncomponent/FooterLayout/Footer.js";
import { Header } from "components/commoncomponent/HeaderLayout/Header.js";
import { NavbarLayout } from "components/commoncomponent/NavbarLayout/NavbarLayout.js";
import { Navigation } from "components/commoncomponent/Navigation/Navigation.js";



import App from "../App.js";
// import logo from "assets/images/thumbnails/cloud.svg";

export const PublicRouterLayout = ({ children }) => (
  <div className="">
    <div className="logo d-flex justify-content-center">
      {/* <img src={logo} alt="logo" width="80"/> */}
    </div>
    <strong className="mx-auto"></strong>
    {/* <Header/> */}
    <Navigation/>

    {/* <NavbarLayout /> */}
    {children}
    <Footer />
  </div>
);

export const PrivateRouterLayout = ({ children }) => <App>{children}</App>;
