import React from "react";
import { AiOutlineLinkedin, AiFillMail } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <section className="box-border py-8 scroll-smooth leading-7 text-gray-900 bg-gradient-to-l from-indigo-900 via-sky-300 to-indigo-900 border-solid sm:py-12 md:py-16 lg:py-24">
        <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
          <section className=" scroll-smooth" id="Proyect"></section>
          <div className="flex flex-col items-center leading-7 text-center text-gray-900">
            <h2 className="box-border m-0 text-4xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
              Project
            </h2>

            <p className="box-border mt-4 text-2xl font-semibold leading-normal text-gray-700 border-solid">
              Some of my projects on GitHub
            </p>
          </div>

          <div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
            <div className="box-border px-4 py-8 mb-6 text-center bg-indigo-250 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                Chat App
              </h3>
              <p className="mt-3 leading-7 text-gray-900  ml-1 border-0 border-solid">
                A simple Chat in real-time <br />
                <br />
                <br />
              </p>
              <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                  <br />
                </p>
                <p className="box-border my-0 ml-1 mr-0 text-x italic text-center font-semibold border-0 border-gray-200">
                  Javascript+React+React Router+Axio{" "}
                  <span className="block"></span>
                </p>
              </div>

              <a
                className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg"
                href="https://github.com/luisomogollon/Chat-lou.git"
              >
                Code
              </a>
            </div>
            <div className="box-border px-4 py-8 mb-6 text-center bg-indigo-250 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                Pokemon Layout
              </h3>
              <p className="mt-3 leading-7 ml-1 text-gray-900 border-0 border-solid">
                It's an easy pretty pokemon layout.
                <br /> <br /> <br />
              </p>
              <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                  <br />
                </p>
                <p className="box-border my-0 ml-1 mr-0 text-center border-0 border-gray-200 font-semibold italic">
                  {" "}
                  Javascript+HTML+CSS
                  <span className="block"></span>
                </p>
              </div>
              <a
                className="inline-flex items-center  justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border-b-4 border-blue-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg"
                href="https://github.com/luisomogollon/pokemon-cart-react-redux.git"
              >
                Code
              </a>
            </div>
            <div className="box-border px-4 py-8 text-center bg-indigo-250 border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                Countries-hook
              </h3>
              <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                React practice datafetching from country data API. <br /> <br />
              </p>
              <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                <p className="box-border m-0 text-6xl leading-normal text-center border-0 border-gray-200">
                  <br />
                </p>
                <p className="box-border font-semibold italic  my-0 ml-1 mr-0 text- text-center border-0 border-gray-200">
                  Javascrip+React <span className="block"></span>
                </p>
              </div>
              <button
                className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg"
                href="https://github.com/luisomogollon/countries-hook.git"
              >
                code
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 justify-center overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2 ">
              <button className="text-base leading-6   text-gray-500 hover:text-gray-900"></button>
            </div>
            <div className="px-5 py-2"></div>
            <div className="px-5 py-2">
              <button
                href="#"
                className="text-base leading-6 font-semibold text-xl  text-gray-900  hover:text-gray-500 hover:text-gray-900"
              >
                Let's talk
              </button>
            </div>
            <div className=""></div>
            <div className="px-5 py-2"></div>
            <div className="px-5 py-2"></div>
          </nav>
          <div className="flex place-content-center space-x-2 ">
            <button
              href="https://www.facebook.com/luis.michinaux/"
              className="text-indigo-500  hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </button>
            <a
              href="https://t.me/Luiso190"
              className="text-indigo-500 hover:text-gray-500"
            >
              <span className="sr-only">Telegram</span>
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 17 15"
              >
                <FaTelegramPlane />
                <path></path>
              </svg>
            </a>
            <a
              href="mailto:Michinaux77@gmail.com"
              className="text-indigo-500 hover:text-gray-500"
            >
              <span className="sr-only">Gmail</span>
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                <AiFillMail />
              </svg>
            </a>
            <a
              href="https://github.com/luisomogollon"
              className="text-indigo-500 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-michinaux/"
              className="text-indigo-500 hover:text-gray-500"
            >
              <span className="sr-only">Linkedin</span>
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="1 0 15 15"
              >
                <AiOutlineLinkedin />
                <path></path>
              </svg>
            </a>

            <span />
            <section className=" scroll-smooth" id="Contact2"></section>
            <path></path>
          </div>
          <p className="mt-8 text-base leading-10 italic font-semibold  text-center text-gray-800">
            LuisMichinaux77@gmail.com
            <section className=" scroll-smooth" id="Contact">
              {" "}
            </section>
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
