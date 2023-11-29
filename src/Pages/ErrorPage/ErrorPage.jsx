import { Link } from "react-router-dom";
import Container from "../../Component/Container";
import Layout from "../../Layout/Layout";

const ErrorPage = () => {
  return (
    <div>
      <div className="relative">
        <Layout></Layout>
        <Container>
          <div className="absolute top-0 lg:w-[1530px]">
            <div className="relative">
              <img
                className="w-full h-[810px]"
                src="https://i.ibb.co/sWDDrnD/image-processing20210907-11849-1m46n2z.gif"
                alt=""
              />
              <Link to="/" className="absolute bottom-[49px] right-[61px]">
                <button
                  className={`md:w-[390px] mx-auto block select-none rounded-lg mt-10 bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl py-3.5 px-7 text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                  type="button"
                  data-ripple-light="true">
                  All Package
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ErrorPage;
