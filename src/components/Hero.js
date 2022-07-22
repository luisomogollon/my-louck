import React from "react";
import { DiReact } from "react-icons/di";
import { SiJavascript, SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import imgbox from "../assets/imgbox";
const Hero = () => {
  return (
    <>
      <section
        className=" scroll-auto flex items-center justify-center h-  py-16 bg-gradient-to-l from-indigo-900 via-sky-300 to-indigo-900"
        id="About"
      >
        <div className="max-w-6xl px-20 mx-auto bg-gradient-to-l from-indigo-900 via-sky-300 to-indigo-900">
          <div className="flex flex-col items-center lg:flex-row ">
            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
              <p className="mb-20 text-base font-medium tracking-tight text-indigo-500 uppercase"></p>
              <h2 className="text-4xl  leading-10 tracking-tight text-gray-900 sm:text-2xl sm:leading-none md:text-2xl lg:text-2xl xl:text-4xl">
                About Me
              </h2>
              <p className="my-7 text- text-gray-800  font-semibold leading-6 ">
                I am a fairly reserved person, I like the challenges of each
                project, as well as the experience that life imposes on me,
                makes me feel good to maintain focus and drain my Energies
                creatively and productively. <br /> <br />I have a solid
                foundation in React and I really like this ecosystem, I love web
                design as a hobby, working as a Freelancer, building websites,
                landing pages and doing some Layout.
              </p>
              <a
                href="./docu.pdf "
                target="_blank"
                className="flex mx-20	inset-x-6 px-10 py-10 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-7"
              >
                Download Cv
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div>
                <div>
                  <h3>
                    <span></span>
                  </h3>
                </div>
              </div>
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-indigo-150">
                <div className="flex flex-col pr-10">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                    </svg>
                    <p className="mt-6 italic text-sm text-gray-700 sm:text-base  font-semibold lg:text-sm ">
                      Small achievements are as important as big ones for me,
                      everything is a matter of discipline, organization and
                      perseverance
                    </p>
                  </div>
                  <h3 className="pl-12 mt-3 text-sm font-medium italic leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    Luis Michinaux
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - Front End Developer
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  className="flex-shrink-0 opacity-75 w-24 h-24 bg-gray-300 rounded-full"
                  src={imgbox.img1}
                  alt=""
                />
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <div
        className=" py-16 scroll-smooth  bg-gradient-to-l from-indigo-900 via-sky-300 to-indigo-900"
        id="Skills"
      >
        <div className=" bg-gray-50 md:block hidden absolute transform -translate-x-64 left-0 top-0"></div>
        <div className=" bg-gray-50 md:block hidden absolute transform -translate-x-24 -skew-x-[30deg] -skew-x-12 left-0 top-0"></div>
        <div className="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
          <svg
            className="w-10 h-10 mb-5"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M128.08 0c7.231.013 14.343.624 21.256 1.78V76.3l52.831-52.696a128.425 128.425 0 0 1 16.34 13.789 128.468 128.468 0 0 1 13.84 16.312L179.513 106.4h74.715A127.58 127.58 0 0 1 256 127.587v.173c0 7.226-.613 14.306-1.772 21.2H179.5l52.847 52.682a129.615 129.615 0 0 1-13.824 16.312h-.015a128.254 128.254 0 0 1-16.326 13.789l-52.846-52.696v74.52a130.321 130.321 0 0 1-21.243 1.781h-.186a130.26 130.26 0 0 1-21.23-1.78v-74.52l-52.831 52.695a128.401 128.401 0 0 1-30.18-30.1L76.5 148.96H1.785A126.984 126.984 0 0 1 0 127.72v-.371c.012-1.875.135-4.166.311-6.536l.055-.713c.522-6.671 1.419-13.7 1.419-13.7H76.5L23.666 53.705a126.265 126.265 0 0 1 13.81-16.286l.026-.026a127.746 127.746 0 0 1 16.344-13.789L106.677 76.3V1.78A130.278 130.278 0 0 1 127.933 0h.147Zm-.013 95.76h-.122c-9.509 0-18.616 1.74-27.034 4.902a76.662 76.662 0 0 0-4.915 26.952v.12a76.383 76.383 0 0 0 4.927 26.951 76.608 76.608 0 0 0 27.022 4.902h.122c9.51 0 18.617-1.74 27.022-4.902a76.146 76.146 0 0 0 4.915-26.952v-.12c0-9.484-1.747-18.57-4.915-26.951a76.614 76.614 0 0 0-27.022-4.902Z"
              fill="#FF4A00"
            ></path>
          </svg>
          <h2 className="text-gray-900 text-4xl font-bold font-serif">
            Skills
          </h2>
          <p className="text-gray-700  text-lg text-left font-semibold  text-xl sm:text-center max-w-lg mt-5">
            These are some of my skills, of course I am willing to learn many on
            my way ...!🙌
          </p>
          <a
            href="#_"
            className="text-indigo-500 font-bold text-lg mt-5 place-content-center flex items-center group"
          >
            <svg
              className="w-5 h-5 group-hover:ml-1 transition-all  ease-out duration-200 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </a>
          <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-4 md: gap-6 mt-8">
            <div className="h-20 w-20 text-indigo-500 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200  flex items-center justify-center">
              <svg className="h-16 w-15 justify-center" viewBox="01 01 15 15">
                <SiJavascript />
              </svg>
            </div>
            <div className="h-20 w-20 text-indigo-500 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200  flex items-center justify-center">
              <svg className="w-15 h-15 justify-center " viewBox="00 01 15 15">
                <DiReact />
              </svg>
            </div>
            <div className="h-20 w-20 text-indigo-500 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
              <svg className="w-14 h-15 justify-center " viewBox="00 01 15 15">
                <SiHtml5 />
              </svg>
            </div>
            <div className="h-20 w-20 text-indigo-500 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200  flex items-center justify-center">
              <svg className="w-14 h-15 justify-center " viewBox="00 01 15 15">
                <FaCss3 />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
