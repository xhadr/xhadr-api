import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function xshade() {
  return (
    <>
      <Head>
        <title>Xhadr Ui</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="bg-gradient-to-tr from-yellow-700 via-stone-800 to-blue-900 text-blue-100">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl font-serif">
              Rapidly build modern projects with<br></br>
              <span className="text-blue-400">Xhadr-Api</span>
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg font-mono">
              A <span className="text-blue-400"> Next-js </span> based
              <span className="text-blue-400"> RESTFul Api </span>
              <i className="text-xs">(representational state transfer)</i>
            </p>
            <div className="sm:mb-8 sm:flex sm:justify-center">
              <div className="animate-pulse relative overflow-hidden rounded-lg-b-lg py-1.5 px-4 text-sm leading-6 ring-1 ring-blue-600 hover:ring-blue-500">
                <span className="text-yellow-600 font-bold">
                  Designed & Developed by Xhadr
                </span>
              </div>
            </div>
          </div>
          <hr
            style={{
              backgroundColor: "#18337C",
              height: 8,
              borderColor: "#FF9900",
            }}
          />
        </section>
        <section className="bg-amber-50">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 hover:scale-105">
            <div className="flex flex-col max-w-screen-lg overflow-hidden border-gray-900 border-4 bg-white rounded-lg shadow-2xl shadow-blue-600 hover:shadow-blue-400 lg:flex-row sm:mx-auto">
              <div className="relative lg:w-1/2">
                <Image
                  className="object-cover w-full lg:absolute h-80 lg:h-full"
                  src="/Typescript_Choice.png"
                  alt="blob"
                  width={720}
                  height={720}
                />
                <svg
                  className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                  viewBox="0 0 20 104"
                  fill="currentColor"
                >
                  <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
                </svg>
              </div>
              <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-blue-900">
                  Start Using Xhadr-Api using @Types
                </h5>
                <p className="mb-5 text-gray-800">
                  <span className="font-bold text-blue-700">TYPESCRIPT</span> is
                  a free and open source programming language developed and
                  maintained by Microsoft. It is a strict syntactical superset
                  of JavaScript and adds optional static typing to the language.
                </p>
                <div className="flex items-center">
                  <Link
                    href="/typescript"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-red-400 hover:text-deep-purple-800"
                  >
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-neutral-800 hover:bg-blue-400 hover:text-slate-100 focus:shadow-outline focus:outline-none"
                    >
                      Get started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr
            style={{
              backgroundColor: "#222327",
              height: 4,
            }}
          />
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 hover:scale-105">
            <div className="flex flex-col max-w-screen-lg overflow-hidden border-gray-900 border-4 bg-white rounded-lg shadow-2xl shadow-yellow-600 hover:shadow-yellow-400 lg:flex-row sm:mx-auto">
              <div className="relative lg:w-1/2">
                <Image
                  className="object-cover w-full lg:absolute h-80 lg:h-full"
                  src="/Javascript_Choice.png"
                  alt="blob"
                  width={720}
                  height={720}
                />
                <svg
                  className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                  viewBox="0 0 20 104"
                  fill="currentColor"
                >
                  <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
                </svg>
              </div>
              <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-yellow-900">
                  Start Using Xhadr-Api using Vanilla Js
                </h5>
                <p className="mb-5 text-gray-800">
                  <span className="font-bold text-yellow-700">JAVASCRIPT</span>{" "}
                  is a scripting language that enables you to create dynamically
                  updating content, control multimedia, animate images, and
                  pretty much everything else.
                </p>
                <div className="flex items-center">
                  <Link
                    href="/javascript"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-red-400 hover:text-deep-purple-800"
                  >
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-neutral-800 hover:bg-yellow-400 hover:text-slate-900 focus:shadow-outline focus:outline-none"
                    >
                      Get started
                    </button>
                  </Link>
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
        <footer
          aria-label="Site Footer"
          className="bg-gradient-to-tr from-blue-700 via-stone-800 to-yellow-900 text-yellow-100"
        >
          <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
            <div className="text-center">
              <h2 className="text-5xl font-serif font-bold text-yellow-400 sm:text-7xl">
                Xhadr-Api
              </h2>
              <div>
                <Link href="/">
                  <button className="animate-bounce inline-block px-20 py-3 mt-8 text-sm font-medium text-yellow-600 border border-yellow-600 rounded-lg bg-stone-900 hover:bg-yellow-600 hover:text-white focus:outline-none focus:ring active:bg-yellow-500">
                    Go Home
                  </button>
                </Link>
              </div>
            </div>

            <div className="pt-8 mt-16 border-t border-yellow-100 sm:flex sm:items-center sm:justify-between lg:mt-24">
              <nav aria-label="Footer Navigation - Support">
                <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
                  <li>
                    <Link
                      href="#"
                      className="text-yellow-500 transition hover:opacity-75"
                    >
                      Terms & Conditions
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-yellow-500 transition hover:opacity-75"
                    >
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-yellow-500 transition hover:opacity-75"
                    >
                      Cookies
                    </Link>
                  </li>
                </ul>
              </nav>

              <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-yellow-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-yellow-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-yellow-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-yellow-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>

                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-yellow-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Dribbble</span>

                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
