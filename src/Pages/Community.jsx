/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import Container from "../Component/Container";
import Rating from "react-rating";

const Community = () => {
  return (
    <>
      <Helmet>
        <title>Travelia | Community</title>
      </Helmet>
      {/* banner */}
      <div
        className="hero h-[300px] md:h-[500px] bg-fixed"
        style={{
          backgroundImage: "url(https://i.ibb.co/d20wXc9/Screenshot-236.png)",
        }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" mb-10">
            <h1 className="font-extrabold text-4xl lg:text-6xl">
              Welcome to Travelia Community
            </h1>
            <p className="md:w-72 border-4 border-orange-600 mt-1"></p>
          </div>
        </div>
      </div>
      <Container>
        {/* 1st section */}
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit my-10 lg:my-20 py-3">
          Join Our Community of Passionate Anglers
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-10 px-5 lg:px-0">
          <div>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/mtPjkqb/Screenshot-237.png"
              alt=""
            />
          </div>
          <div className="space-y-10">
            {/* 1 */}
            <div className="group flex items-center gap-5 w-fit hover:cursor-pointer mb-3">
              <img
                src="https://i.ibb.co/N6Rj6sY/icons8-community-48.png"
                alt=""
                className="w-20"
              />
              <div className="pl-2">
                <h1 className="text-2xl font-semibold">
                  Build From The Community
                </h1>
                <p className="text-base md:w-[600px] text-gray-500">
                  Our community-driven initiative brings together individuals
                  with diverse skills and experiences to create, innovate, and
                  grow collectively.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="group flex items-center gap-5 w-fit hover:cursor-pointer mb-3">
              <img
                src="https://i.ibb.co/yWTwGD6/icons8-money-bag-50.png"
                alt=""
                className="w-20"
              />
              <div className="pl-4">
                <h1 className="text-2xl font-semibold">
                  Member Monthly get discount
                </h1>
                <p className="text-base md:w-[600px] text-gray-500">
                  Unlock exclusive savings with our Member Monthly Discount! As
                  a valued member, enjoy special pricing on a variety of
                  products and services each month.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="group flex items-center gap-5 w-fit hover:cursor-pointer mb-3">
              <img
                src="https://i.ibb.co/Db49NpS/icons8-place-marker-50.png"
                alt=""
                className="w-20"
              />
              <div className="pl-4">
                <h1 className="text-2xl font-semibold">
                  Conveniently Tour Package
                </h1>
                <p className="text-base md:w-[600px] text-gray-500">
                  Travel made easy with our Conveniently Tour Package. We've
                  curated a hassle-free journey that combines comfort,
                  exploration, and unforgettable moments.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="group flex items-center gap-5 w-fit hover:cursor-pointer mb-3">
              <img
                src="https://i.ibb.co/8D8tBgZ/icons8-globe-50.png"
                alt=""
                className="w-20"
              />
              <div>
                <h1 className="text-2xl font-semibold">
                  Annual Member Gathering
                </h1>
                <p className="text-base md:w-[600px] text-gray-500">
                  Join us for an unforgettable Annual Member Gathering – a
                  celebration of community, connections, and shared experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd section */}
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit my-10 lg:my-20 py-3">
          Meet With Our Best Guides
        </h1>
        <div>
          {/* 1st */}
          <div className="flex flex-col lg:flex-row px-5 lg:px-0">
            <div className="lg:w-1/2">
              <img
                className="h-full"
                src="https://i.ibb.co/3SZs6SL/Screenshot-239.png"
                alt=""
              />
            </div>
            <div className="p-4 md:p-8 lg:p-16  lg:w-1/2">
              <h1 className="text-4xl font-medium mb-1">Skott Brosnan</h1>
              <div className="flex  gap-2">
                <Rating
                  emptySymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512">
                      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                    </svg>
                  }
                  fullSymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512">
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  }
                  initialRating={4.5}
                  readonly
                />
                <h1 className="text-sm  text-gray-500 ">Reviews 11</h1>
              </div>
              <div className="flex items-center gap-3 md:gap-16 my-3">
                <div>
                  <h1 className="text-lg text-gray-500 font-light">
                    Guide Locations:
                  </h1>
                  <h1 className="text-base font-semibold">Bangladesh</h1>
                </div>
                <div>
                  <h1 className="text-lg text-gray-500 font-light">
                    Languages:
                  </h1>
                  <h1 className="text-base font-semibold">Bangle / English</h1>
                </div>
              </div>
              <p className="text-lg text-gray-500 font-light">
                Discover the world with confidence and knowledge by choosing our
                expert Tour Guide services. Our seasoned guides blend local
                insight with professional expertise to create an immersive and
                enlightening travel experience. Whether you're exploring
                historical landmarks, natural wonders, or vibrant cultures, our
                guides ensure you not only see the sights but understand the
                stories behind them.
              </p>
              <button
                className={`block select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl py-3 mt-5 md:mt-10 px-7 text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                type="button"
                data-ripple-light="true">
                Email Guide
              </button>
            </div>
          </div>
          {/* 2st */}
          <div className="flex flex-col-reverse lg:flex-row px-5 lg:px-0">
            <div className="p-4 md:p-8 lg:p-16  lg:w-1/2">
              <h1 className="text-4xl font-medium mb-1">Alice Johnson</h1>
              <div className="flex gap-2">
                <Rating
                  emptySymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512">
                      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                    </svg>
                  }
                  fullSymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512">
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  }
                  initialRating={4}
                  readonly
                />
                <h1 className="text-sm  text-gray-500 ">Reviews 11</h1>
              </div>
              <div className="flex items-center gap-16 my-3">
                <div>
                  <h1 className="text-lg text-gray-500 font-light">
                    Guide Locations:
                  </h1>
                  <h1 className="text-base font-semibold">Bangladesh</h1>
                </div>
                <div>
                  <h1 className="text-lg text-gray-500 font-light">
                    Languages:
                  </h1>
                  <h1 className="text-base font-semibold">Bangle / Hindi</h1>
                </div>
              </div>
              <p className="text-lg text-gray-500 font-light">
                Discover the world with confidence and knowledge by choosing our
                expert Tour Guide services. Our seasoned guides blend local
                insight with professional expertise to create an immersive and
                enlightening travel experience. Whether you're exploring
                historical landmarks, natural wonders, or vibrant cultures, our
                guides ensure you not only see the sights but understand the
                stories behind them.
              </p>
              <button
                className={`block select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl py-3 mt-10 px-7 text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                type="button"
                data-ripple-light="true">
                Email Guide
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                className="h-full"
                src="https://i.ibb.co/K00693k/Screenshot-238.png"
                alt=""
              />
            </div>
          </div>
          {/* 3st */}
          <div className="flex flex-col lg:flex-row px-5 lg:px-0">
            <div className="lg:w-1/2">
              <img
                className="h-full"
                src="https://i.ibb.co/ScXKGkt/Screenshot-240.png"
                alt=""
              />
            </div>
            <div className="p-4 md:p-8 lg:p-16  lg:w-1/2">
              <h1 className="text-4xl font-medium mb-1">Charlie Davis</h1>
              <div className="flex  gap-2">
                <Rating
                  emptySymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512">
                      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                    </svg>
                  }
                  fullSymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512">
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  }
                  initialRating={4.5}
                  readonly
                />
                <h1 className="text-sm  text-gray-500 ">Reviews 11</h1>
              </div>
              <div className="flex items-center gap-16 my-3">
                <div>
                  <h1 className="text-lg text-gray-500 font-light">
                    Guide Locations:
                  </h1>
                  <h1 className="text-base font-semibold">Bangladesh</h1>
                </div>
                <div>
                  <h1 className="text-lg text-gray-500 font-light">
                    Languages:
                  </h1>
                  <h1 className="text-base font-semibold">Bangle / German</h1>
                </div>
              </div>
              <p className="text-lg text-gray-500 font-light">
                Discover the world with confidence and knowledge by choosing our
                expert Tour Guide services. Our seasoned guides blend local
                insight with professional expertise to create an immersive and
                enlightening travel experience. Whether you're exploring
                historical landmarks, natural wonders, or vibrant cultures, our
                guides ensure you not only see the sights but understand the
                stories behind them.
              </p>
              <button
                className={`block select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl py-3 mt-10 px-7 text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                type="button"
                data-ripple-light="true">
                Email Guide
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Community;
