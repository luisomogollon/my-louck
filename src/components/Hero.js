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
              <div></div>
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-indigo-150">
                <div className="flex flex-col pr-10">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    ></svg>
                    <p className="mt-6 italic text-sm text-gray-700 sm:text-base  font-semibold lg:text-sm ">
                      Small achievements are as important as big ones for me,
                      everything is a matter of discipline, organization and
                      perseverance
                    </p>
                  </div>
                  <h3 className="pl-12 mt-3 text-sm font-medium italic leading-5 text-gray-800 truncate sm:text-base  lg:text-base">
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
        <div className=" bg-gray-50 md:block hidden absolute transform -translate-x-24 -skew-x-[30deg]  left-0 top-0"></div>
        <div className="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
          <svg
            className="w-10 h-10 mb-5"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <h2 className="text-gray-900 text-4xl font-bold font-serif">
            Skills
          </h2>
          <p className="text-gray-700   text-left font-semibold  text-xl sm:text-center max-w-lg mt-5">
            These are some of my skills, of course I am willing to learn many on
            my way ...!🙌
          </p>
          <button
            href="#_"
            className="text-indigo-500 font-bold text-lg mt-5 place-content-center flex items-center group"
          >
            <svg
              className="w-5 h-5 group-hover:ml-1 transition-all  ease-out duration-200 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </button>
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
