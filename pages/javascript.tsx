import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const NavHome = dynamic(() => import("../components/NavHome"));
const NavShade = dynamic(() => import("../components/NavShade"));
const NavJavascript = dynamic(() => import("../components/NavJavascript"));
const NavTypescript = dynamic(() => import("../components/NavTypescript"));
import { CopyBlock, arta } from "react-code-blocks";
const code_axios = `import axios from "axios";
axios
.get("https://xhadr-api.vercel.app/api/animation?q=smile")
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.error(error);
});
`;
const code_request = `const request = require("request");
request({
    method: "GET",
    url: "https://xhadr-api.vercel.app/api/animation?q=smile",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  },
  (error, response) => {
    if (error) console.error(error);
    console.log(response.body);
  });
`;
const code_unirest = `const unirest = require("unirest");
unirest
      .post("https://xhadr-api.vercel.app/api/animation?q=smile")
      .headers({ Accept: "application/json", "Content-Type": "application/json" })
      .then((response) => {
        console.log(response.body);
      });
`;

export default function javascript() {
  return (
    <>
      <Head>
        <title>Xhadr Ui</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavJavascript />{" "}
        <hr
          style={{
            backgroundColor: "#1F1F1F",
            height: 8,
            borderColor: "#FFD900",
          }}
        />
        <section className="bg-gradient-to-tr from-gray-900 via-yellow-800 to-gray-900 text-yellow-100">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl font-serif">
              Rapidly build modern projects with<br></br>
              <span className="text-yellow-400">Xhadr-Api</span>
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg font-mono">
              A <span className="text-yellow-400"> Next-js </span> based
              <span className="text-yellow-400"> RESTFul Api </span>
              <i className="text-xs">(representational state transfer)</i>
            </p>
            <div className="sm:mb-8 sm:flex sm:justify-center">
              <div className="animate-pulse relative overflow-hidden rounded-lg-b-lg py-1.5 px-4 text-sm leading-6 ring-1 ring-yellow-600 hover:ring-yellow-500">
                <span className="text-yellow-600 font-bold">
                  Designed & Developed by Xhadr
                </span>
              </div>
            </div>
          </div>
          <hr
            style={{
              backgroundColor: "#7C6518",
              height: 8,
              borderColor: "#B4B291",
            }}
          />
        </section>
        <section className="bg-[url(https://i.postimg.cc/cL8NgHxR/hentai.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-serif text-4xl font-bold leading-none tracking-tight text-yellow-300 sm:text-5xl md:mx-auto">
                Available api endpoints
              </h2>
              <p className="text-base text-yellow-400 md:text-lg font-mono">
                <i>use these below endpoints to get response from the api</i>
              </p>
            </div>
            <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
              <div className="hover:animate-pulse flex items-center p-2 transition-colors duration-500 border rounded-lg shadow-yellow-200 shadow-sm group bg-stone-900 hover:bg-yellow-400 hover:border-yellow-400">
                <div className="mr-2">
                  <svg
                    className="w-6 h-6 transition-colors duration-500 text-yellow-400 group-hover:text-white group-hover:bg-neutral-900 rounded-full sm:w-8 sm:h-8"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
                <span className="text-white transition-colors duration-500 group-hover:text-white">
                  api/animation?q=
                </span>
              </div>
              <div className="hover:animate-pulse flex items-center p-2 transition-colors duration-500 border rounded-lg shadow-yellow-200 shadow-sm group bg-stone-900 hover:bg-yellow-400 hover:border-yellow-400">
                <div className="mr-2">
                  <svg
                    className="w-6 h-6 transition-colors duration-500 text-yellow-400 group-hover:text-white group-hover:bg-neutral-900 rounded-full sm:w-8 sm:h-8"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
                <span className="text-white transition-colors duration-500 group-hover:text-white">
                  api/youtube?q=
                </span>
              </div>
              <div className="hover:animate-pulse flex items-center p-2 transition-colors duration-500 border rounded-lg shadow-yellow-200 shadow-sm group bg-stone-900 hover:bg-yellow-400 hover:border-yellow-400">
                <div className="mr-2">
                  <svg
                    className="w-6 h-6 transition-colors duration-500 text-yellow-400 group-hover:text-white group-hover:bg-neutral-900 rounded-full sm:w-8 sm:h-8"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
                <span className="text-white transition-colors duration-500 group-hover:text-white">
                  api/hentai?q=
                </span>
              </div>
              <div className="hover:animate-pulse flex items-center p-2 transition-colors duration-500 border rounded-lg shadow-yellow-200 shadow-sm group bg-stone-900 hover:bg-yellow-400 hover:border-yellow-400">
                <div className="mr-2">
                  <svg
                    className="w-6 h-6 transition-colors duration-500 text-yellow-400 group-hover:text-white group-hover:bg-neutral-900 rounded-full sm:w-8 sm:h-8"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
                <span className="text-white transition-colors duration-500 group-hover:text-white">
                  api/anime?q=
                </span>
              </div>
              <div className="hover:animate-pulse flex items-center p-2 transition-colors duration-500 border rounded-lg shadow-yellow-200 shadow-sm group bg-stone-900 hover:bg-yellow-400 hover:border-yellow-400">
                <div className="mr-2">
                  <svg
                    className="w-6 h-6 transition-colors duration-500 text-yellow-400 group-hover:text-white group-hover:bg-neutral-900 rounded-full sm:w-8 sm:h-8"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
                <span className="text-white transition-colors duration-500 group-hover:text-white">
                  api/nsfw?q=
                </span>
              </div>
            </div>
          </div>
          <hr
            style={{
              backgroundColor: "#7C6518",
              height: 8,
              borderColor: "#B4B291",
            }}
          />
        </section>
        <section className="text-gray-400 bg-gradient-to-tr from-gray-900 via-stone-800 to-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-yellow-400 tracking-widest font-mono font-medium title-font mb-1">
                <i>choose any of the following method</i>
              </h2>{" "}
              <h1 className="sm:text-5xl text-4xl font-serif font-extrabold text-yellow-300">
                Get Started with Javascript
              </h1>{" "}
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="hover:animate-pulse hover:bg-neutral-800 flex rounded-lg h-full bg-neutral-700 bg-opacity-60 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium">
                      Method 1 Using Axios: <br></br>
                      <span className="italic text-sm text-yellow-200">{`import axios from "axios";`}</span>
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      ⧭ In this example we will be using{" "}
                      <span className="font-semibold text-yellow-400">
                        {" "}
                        api/animation{" "}
                      </span>
                      endpoint.<br></br>
                      <span className="font-semibold text-yellow-400">
                        {" "}
                        ⧭ ?q={" "}
                      </span>{" "}
                      is the querry that api/animation takes.
                      <br></br> <br></br>
                      <hr
                        style={{
                          backgroundColor: "#2F3333",
                          height: 2,
                        }}
                      />
                      <CopyBlock
                        text={code_axios}
                        language="javascript"
                        wrapLines
                        theme={arta}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="hover:animate-pulse hover:bg-neutral-800 flex rounded-lg h-full bg-neutral-700 bg-opacity-60 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium">
                      Method 2 Using Request: <br></br>
                      <span className="italic text-sm text-yellow-200">{`const request = require("request");`}</span>
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      ⧭ In this example we will be using{" "}
                      <span className="font-semibold text-yellow-400">
                        {" "}
                        api/nsfw{" "}
                      </span>
                      endpoint.<br></br>
                      <span className="font-semibold text-yellow-400">
                        {" "}
                        ⧭ ?q={" "}
                      </span>{" "}
                      is the querry that api/nsfw takes.
                      <br></br> <br></br>
                      <hr
                        style={{
                          backgroundColor: "#2F3333",
                          height: 2,
                        }}
                      />
                      <CopyBlock
                        text={code_request}
                        language="javascript"
                        wrapLines
                        theme={arta}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="hover:animate-pulse hover:bg-neutral-800 flex rounded-lg h-full bg-neutral-700 bg-opacity-60 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium">
                      Method 3 Using Unirest: <br></br>
                      <span className="italic text-sm text-yellow-200">{`const unirest = require("unirest");`}</span>
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      ⧭ In this example we will be using{" "}
                      <span className="font-semibold text-yellow-400">
                        {" "}
                        api/hentai{" "}
                      </span>
                      endpoint.<br></br>
                      <span className="font-semibold text-yellow-400">
                        {" "}
                        ⧭ ?q={" "}
                      </span>{" "}
                      is the querry that api/hentai takes.
                      <br></br>
                      <br></br>
                      <hr
                        style={{
                          backgroundColor: "#2F3333",
                          height: 2,
                        }}
                      />
                      <CopyBlock
                        text={code_unirest}
                        language="javascript"
                        wrapLines
                        theme={arta}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        <hr
          style={{
            backgroundColor: "#1F1F1F",
            height: 8,
          }}
        />
        <footer className="footer footer-center  w-full p-4 bg-gradient-to-tr bg-neutral-900 text-yellow-100">
          <div className="text-center">
            {" "}
            <Link href="/">
              <button className="inline-block px-20 py-3 mt-8 text-sm font-medium text-stone-200 border border-stone-600 rounded-lg bg-stone-900 hover:bg-stone-600 hover:text-white focus:outline-none focus:ring active:bg-stone-500">
                To Home
              </button>
            </Link>
            <br></br> <br></br>
            <p>
              Copyright © 2022 -
              <a className="font-semibold" href="mailto:m.sohanemon@gmail.com">
                Xhadr
              </a>
            </p>{" "}
          </div>
        </footer>
      </main>
    </>
  );
}
