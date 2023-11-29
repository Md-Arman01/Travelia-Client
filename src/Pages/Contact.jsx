/* eslint-disable react/no-unescaped-entities */
import Container from "../Component/Container";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Travelia | Contact</title>
      </Helmet>
      {/* banner */}
      <div
        className="hero md:h-[500px] bg-fixed"
        style={{
          backgroundImage: "url(https://i.ibb.co/fqjZcHL/Screenshot-216.png)",
        }}>
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mb-10">
            <h1 className="font-extrabold text-6xl">Contact Us</h1>
            <p className="md:w-64 border-4 border-orange-600 mt-1"></p>
          </div>
        </div>
      </div>
      {/* contact info */}
      <Container>
        <div className="flex items-center gap-5 my-20">
          {/* left side */}
          <div className="flex-1">
            <h1 className="text-4xl font-semibold mb-3">
              We'd Love to Hear from You
            </h1>
            <p className="text-base font-medium font-sans text-gray-500 mb-10 w-[600px]">
              Please do not hesitate to contact us if you have any queries or
              complaints concerning our directory website. Our customer service
              team is here to help and may be reached via phone, email, or
              through our online contact form.
            </p>
            <div>
              {/* 1 */}
              <div className="group flex items-center gap-5 w-fit hover:cursor-pointer mb-3">
                <button className="btn group-hover:bg-white bg-[#ff6528] group-hover:border group-hover:border-black">
                  <FaLocationDot className="text-lg text-white group-hover:text-black " />
                </button>
                <div>
                  <h1 className="text-lg font-semibold">Our Location</h1>
                  <p className="text-sm text-gray-500">
                    7546 55 Grand Ave #5F, Brockport, NY - 14526.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="group flex items-center gap-5 w-fit hover:cursor-pointer mb-3">
                <button className="btn group-hover:bg-white bg-[#ff6528] group-hover:border group-hover:border-black">
                  <BiSolidPhoneCall className="text-lg text-white group-hover:text-black " />
                </button>
                <div>
                  <h1 className="text-lg font-semibold">Phone Number</h1>
                  <p className="text-sm text-gray-500">+12 345 6789</p>
                </div>
              </div>
              {/* 3 */}
              <div className="group flex items-center gap-5 w-fit hover:cursor-pointer mb-3">
                <button className="btn group-hover:bg-white bg-[#ff6528] group-hover:border group-hover:border-black">
                  <TbMailFilled className="text-lg text-white group-hover:text-black " />
                </button>
                <div>
                  <h1 className="text-lg font-semibold">Email</h1>
                  <p className="text-sm text-gray-500">support@travelia.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1">
            <div className="shadow-lg  p-20 rounded-xl">
              <div>
                <div className="grid gap-5">
                  <div className="flex w-full gap-5">
                    {/* 1 */}
                    <div className="relative h-11 w-full ">
                      <input
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="text-gray-400 font-semibold font-sans after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        First name
                      </label>
                    </div>
                    {/* 2 */}
                    <div className="relative h-11 w-full ">
                      <input
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="text-gray-400 font-semibold font-sans after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Last name
                      </label>
                    </div>
                  </div>
                  {/* 3 */}
                  <div>
                    <div className="relative h-11 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="text-gray-400 font-semibold font-sans after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Mobile number
                      </label>
                    </div>
                  </div>
                  {/* 4 */}
                  <div>
                    <div className="relative h-11 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="text-gray-400 font-semibold font-sans after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Your Email*
                      </label>
                    </div>
                  </div>
                  {/* 5 */}
                  <div>
                    <div className="relative h-11 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="text-gray-400 font-semibold font-sans after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Additional Information
                      </label>
                    </div>
                  </div>
                  {/* --- */}
                </div>
                <button
                  className="block w-52 normal-case mx-auto select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl mt-10 py-3.5 px-7 text-center align-middle  text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* map */}
      <Container>
        
      </Container>
    </>
  );
};

export default Contact;
