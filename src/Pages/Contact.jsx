import Container from "../Component/Container";
import { BiSolidUser , BiSolidPencil } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsSend } from "react-icons/bs";

const Contact = () => {
  return (
    <Container>
      <div>
      <div className="flex flex-col-reverse lg:flex-row min-h-[680px]  pt-32  justify-center items-center gap-5 md:gap-20 lg:gap-40  my-10 lg:my-0">
      <div>
          <img
            className="w-[500px] lg:w-[700px] "
            src="https://i.ibb.co/Wfhx84H/Screenshot-197.png"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#244669] mb-5">
            Contact Us
          </h1>
          <div className="flex flex-col gap-4">
            <div className="relative">
                <BiSolidUser className="absolute top-3 left-5 text-xl text-gray-600"></BiSolidUser>
              <input
                type="text"
                placeholder="Name"
                className="input rounded-3xl px-12 text-lg w-72 bg-[#c3dbff]"
              />
            </div>
            <div className="relative">
                <MdEmail className="absolute top-3 left-5 text-xl text-gray-600"></MdEmail>
              <input
                type="text"
                placeholder="Email"
                className="input rounded-3xl px-12 text-lg w-72 bg-[#c3dbff]"
              />
            </div>
            <div className="relative">
                <BiSolidPencil className="absolute top-3 left-5 text-xl text-gray-600"></BiSolidPencil>
            <textarea
              className="textarea rounded-3xl px-12 text-lg w-72 bg-[#c3dbff]"
              placeholder="Message"></textarea>
            </div>
            <div className="relative">
            <button
              className="normal-case block w-full select-none rounded-3xl bg-gradient-to-tr from-[#007BFF] to-[#007BFF] py-2 px-6 text-center align-middle font-sans text-lg font-bold  text-white shadow-md shadow-[#007BFF]/20 transition-all hover:shadow-lg hover:shadow-[#007BFF]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true">
              Send Message
            </button>
            <BsSend className="absolute top-4 right-12 text-xl text-white"></BsSend>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </Container>
  );
};

export default Contact;
