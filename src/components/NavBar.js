import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <section
        to="About"
        className="w-full px-6 pb-12 antialiased bg-gradient-to-l from-indigo-900 via-sky-300 to-indigo-900"
        data-tails-scripts="//unpkg.com/alpinejs"
      >
        <div className="mx-auto max-w-10xl">
          <nav className="" x-data="">
            <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-indigo-400 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
              <div className="flex items-center justify-start w-1/4 h-full pr-4">
                <a href="#_" className="inline-block py-4 md:py-0">
                  <span className="p-1 text-xl font-black leading-none text-gray-900">
                    Luiso.
                  </span>
                </a>
              </div>
              <div className="top-3 center items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4  lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
                <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                  <button
                    href="#_"
                    className="'inline-flex' items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
                  >
                    Luiso<span className="text-indigo-600">.</span>
                  </button>
                  <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                    <button
                      href="#_"
                      className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                    ></button>
                    <ul></ul>
                    <Link
                      className="inline-block w-full scroll-smooth cursor-pointer py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                      to="About"
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      About
                    </Link>
                    <Link
                      className="inline-block scroll-smooth  w-full cursor-pointer py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                      to="Skills"
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      Skills
                    </Link>

                    <Link
                      className="inline-block w-full scroll-smooth cursor-pointer py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                      to="Proyect"
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      Proyect
                    </Link>
                    <Link
                      className="inline-block w-full scroll-smooth cursor-pointer py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                      to="contact"
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      Contact
                    </Link>
                    <button
                      href="#_"
                      className="absolute top-0 left-0 hidden scroll-smooth py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative "
                    ></button>
                  </div>

                  <div className="flex flex-col items-start scroll-smooth justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0"></div>
                </div>
              </div>
              <div className="absolute right-0 flex flex-col items-center justify-center   cursor-pointer md:hidden hover:bg-gray-100"></div>
            </div>
          </nav>

          <div className="container ax-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
            <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
              <span className="inline md:block">Luis Michinaux</span>{" "}
              <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
                Frontend Developer
              </span>
            </h1>
            <div className="mx-auto mt-5 text-gray-700 font-semibold md:mt-10 md:max-w-lg md:text-center lg">
              frontend developer, focused on simplifying the creation of app
              pages and passionate about interface design.
            </div>
            <div className="flex flex-col items-center mt-12 text-center">
              <span className="relative inline-flex w-full md:w-auto">
                <Link
                  to="contact2"
                  smooth={true}
                  duration={1000}
                  type="button"
                  className="inline-flex cursor-pointer animate-bounce  items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 "
                >
                  Contact Me
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
