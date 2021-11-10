import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SignInPage from "../pages/SignInPage";
import BusinessRegistrationPage from "../pages/BusinessRegistrationPage";
import SimpleRegistrationPage from "../pages/SimpleRegistrationPage.jsx";
import MyCardsPage from "../pages/MyCardsPage";
import { GoHome } from "react-icons/go";
import { FcAbout } from "react-icons/fc";
import { MdAppRegistration } from "react-icons/md";
import { FcBusiness } from "react-icons/fc";
import { IoCardSharp } from "react-icons/io5";
import { GoSignIn } from "react-icons/go";

export const tabs = [
  {
    name: "Home",
    href: "/home",
    page: HomePage,
    displayForLoggedin: true,
    icon: <GoHome></GoHome>,
  },
  {
    name: "About",
    href: "/about",
    page: AboutPage,
    displayForLoggedin: true,
    icon: <FcAbout></FcAbout>,
  },
  {
    name: "Simple Registration",
    href: "/simple-registration",
    page: SimpleRegistrationPage,
    displayForLoggedin: false,
    icon: <MdAppRegistration></MdAppRegistration>,
  },
  {
    name: "Business Registration",
    href: "/business-registration",
    page: BusinessRegistrationPage,
    displayForLoggedin: false,
    icon: <FcBusiness></FcBusiness>,
  },
  {
    name: "My Cards",
    href: "/my-cards",
    page: MyCardsPage,
    displayForLoggedin: true,
    hideForLoggedout: true,
    icon: <IoCardSharp></IoCardSharp>,
  },
  {
    name: "Sign In",
    href: "/sign-in",
    page: SignInPage,
    displayForLoggedin: false,
    icon: <GoSignIn></GoSignIn>,
  },
  /* {
    name: "Log-Out",
    href: "/",
    page: HomePage,
    displayForLoggedin: true,
    hideForLoggedout: true,
    icon: ,
  }, */
];
