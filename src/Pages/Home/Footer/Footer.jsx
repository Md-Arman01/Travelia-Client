import { Link } from "react-router-dom";
import logo from "../../../../public/Tourist Guide Logo.png";
import Container from "../../../Component/Container";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-base-200 mt-6 md:mt-10 lg:mt-20 px-10 lg:px-0">
      <Container>
        <footer className="footer py-10 text-base-content">
          <aside>
            <div className=" flex flex-col items-center">
              <img className="w-16" src={logo} alt="" />
              <h1 className="text-2xl font-Rancho font-semibold -mt-3">
                Travelia
              </h1>
            </div>
            <p className="font-medium">
              Travelia Industries Ltd. <br />
              Providing reliable tech since 1990
            </p>
          </aside>
          <nav>
            <header className="footer-title text-gray-900">Services</header>
            <Link
              to="/allStory"
              className="text-gray-500 hover:translate-x-1 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Travel Compass
            </Link>
            <Link
              to="/allPackages"
              className="text-gray-500 hover:translate-x-1 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Explore Package
            </Link>
            <Link
              to="/"
              className="text-gray-500 hover:translate-x-1 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Tour Trekker
            </Link>
            <Link
              to=""
              className="text-gray-500 hover:translate-x-1 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Discover Dynasty
            </Link>
          </nav>
          <nav>
            <header className="footer-title text-gray-900">Company</header>
            <Link
              to="/about"
              className="text-gray-500 hover:translate-x-1 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              About us
            </Link>
            <Link
              to="/contact"
              className="text-gray-500 hover:translate-x-1 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Contact us
            </Link>
            <Link
              to="/blogs"
              className="text-gray-500 hover:translate-x-1 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Blogs
            </Link>
            <Link
              to="/community"
              className="text-gray-500 hover:translate-x-1 hover:transition-all hover:cursor-pointer hover:underline hover:text-[#FF4804] ">
              Community
            </Link>
          </nav>
          <nav>
            <header className="footer-title text-gray-900 w-full text-center">
              Follow Us
            </header>
            <div className="w-full">
              <div className="flex justify-center items-center gap-2">
                <BsFacebook className="text-2xl text-[#2B92EA] hover:cursor-pointer hover:scale-110" />
                <FaTwitter className="text-2xl text-[#1AACF0] hover:cursor-pointer hover:scale-110" />
                <AiFillInstagram className="text-3xl text-[#A43EB7] hover:cursor-pointer hover:scale-110" />
              </div>
            </div>
            <div className="flex gap-5 md:gap-1 lg:gap-5 mt-5">
              <button className="btn glass bg-black  hover:bg-gray-700 normal-case text-white">
                <IoLogoGooglePlaystore className="text-xl text-white "></IoLogoGooglePlaystore>
                Google Play
              </button>
              <button className="btn glass bg-black hover:bg-gray-700  normal-case text-white">
                <BsApple className="text-xl text-white "></BsApple>Apple Store
              </button>
            </div>
          </nav>
        </footer>
        <footer className="footer footer-center py-6 text-base-content  border-t border-base-300">
          <aside>
            <p>Copyright © Travelia 2023</p>
          </aside>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
