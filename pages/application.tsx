import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const TryApi = dynamic(() => import("../components/TryApi"));
const NavHome = dynamic(() => import("../components/NavHome"));
const NavLand = dynamic(() => import("../components/NavLand"));

export default function magneum() {
  return (
    <>
      <Head>
        <title>Magneum Ui</title>
        <meta name="description" content="https://bit.ly/magneum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavLand />{" "}
        <hr
          className="blur animate-pulse"
          style={{
            backgroundColor: "#4E5858 ",
            height: 4,
          }}
        />
        <section className="backdrop-blur-3xl bg-gradient-to-tl from-stone-900 via-slate-900 to-black min-w-fit min-h-screen">
          <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
            <div className="flex flex-col items-center max-w-2xl md:px-8">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="rounded-md btn-ghost font-bold inline-block px-3 py-px mb-4 text-xs text-teal-200 uppercase">
                    created with 💖 by xhadr
                  </p>
                </div>
                <h1 className="text-4xl font-bold leading-none sm:text-5xl font-serif typewritter">
                  Rapidly build modern projects with <br></br>
                  <span className="text-cyan-400">
                    &lsquo; Magneum &rsquo;
                  </span>{" "}
                  <p className="mb-8 text-lg font-serif font-semibold italic">
                    A
                    <span className="text-cyan-400 hover:text-opacity-75">
                      <Link href="https://nextjs.org/"> Next-Js </Link>
                    </span>
                    based
                    <span className="text-cyan-400 hover:text-opacity-75">
                      <Link href="https://restfulapi.net/"> REST-api </Link>
                    </span>
                    <br></br>
                    <i className="text-xs">(representational state transfer)</i>
                  </p>
                </h1>

                <TryApi />
              </div>
              <div className="flex flex-col justify-center">
                <div className="pb-4 mb-4 border-b">
                  <h2 className="max-w-lg mb-6 font-semibold text-3xl font-serif leading-none tracking-tight sm:text-4xl md:mx-auto">
                    What is Magneum?
                  </h2>
                  <p className="text-1xl hover:text-cyan-600 text-justify font-serif">
                    <span className="text-cyan-400 font-semibold">With </span>
                    Magneum you can fetch different types of informations
                    without needing to install any dependencies or worrying
                    about servers or configurations.<br></br>
                    <span className="text-cyan-400 font-semibold">Just </span>
                    use any method to fetch the api endpoints and you will be
                    delighted with a perfect constructed object as a response
                    from that endpoint of choice.<br></br>
                    <span className="text-cyan-400 font-semibold">
                      Magneum{" "}
                    </span>
                    has many endpoints like animation, anime, hentai, youtube
                    music, youtube video, youtube search, nsfw and many more
                    upcoming.
                  </p>
                </div>
              </div>
            </div>
            <div className="blur-2xl text-teal-500 text-5xl animate-pulse text-left">
              XHADR
            </div>
            <Image
              src="/gify.gif"
              className="w-full max-w-screen-sm mx-auto rounded contrast-100 hover:scale-105 px-2 py-2 border-cyan-900 border hover:saturate-150 hover:shadow-cyan-600 shadow-cyan-900 shadow-2xl md:w-auto lg:max-w-screen-md"
              alt="blob"
              width={1080}
              height={200}
            />
            <div className="blur-2xl text-cyan-300 text-5xl animate-pulse text-left">
              XHADR
            </div>
            <div className="blur-3xl text-cyan-300 text-5xl animate-pulse text-right">
              XHADR
            </div>
          </div>
          <div className="blur-3xl text-teal-300 text-5xl animate-pulse text-right">
            XHADR
          </div>
        </section>
        <hr
          className="blur animate-pulse"
          style={{
            backgroundColor: "#81D3CC ",
            height: 4,
          }}
        />
        <section className="backdrop-blur-3xl bg-gradient-to-tr from-stone-900 via-slate-900 to-black">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
              <div className="lg:w-4/6 mx-auto">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image
                    alt=""
                    width={720}
                    height={500}
                    className="object-cover object-center h-full w-full rounded-lg bg-gradient-to-r p-[2px] from-[#6EE7B7] via-[#3B82F6] to-[#ea6733]"
                    src="/multi.png"
                  ></Image>
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center shadow-blue-500 shadow">
                      <Image
                        alt="blob"
                        width={720}
                        height={500}
                        className="object-cover object-center h-full w-full animate-spin"
                        src="/vscode.png"
                      ></Image>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-serif font-bold title-font mt-4 text-gray-300 text-lg">
                        Fetch Api Infos
                      </h2>
                      <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="font-serif leading-relaxed text-lg mb-4 text-gray-400">
                      ⦿ You can use any method that you like to fetch
                      informations from the api.
                      <br></br>⦿ If you are new to the concept of rest api,
                      press{" "}
                      <span className="italic text-blue-300">Get Started</span>.
                      <br></br> ⦿ Want to try out Magneum? Press{" "}
                      <span className="italic text-blue-300">Try Now</span>.
                    </p>
                    <TryApi />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <hr
        className="blur animate-pulse"
        style={{
          backgroundColor: "#81D3CC ",
          height: 4,
        }}
      />
      <footer className="footer footer-center p-10 bg-zinc-900 text-base-content rounded">
        <div>
          <p className="font-bold italic text-slate-400">
            Copyright © 2023 - All right reserved by Magneum Industries Ltd
          </p>
        </div>
      </footer>
    </>
  );
}
