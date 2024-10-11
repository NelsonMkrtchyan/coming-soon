import React from "react";
import data from "../../../data/data";
import Navigation from "../Navigation/Navigation";
import Image from "next/image";

function Header() {
  const { sitename, sitetagline, siteurl } = data;
  return (
    <>
    <section className="container mx-auto p-4 text-center">
      {/*<Navigation />*/}
    </section>
      <header className="z-10 w-full max-w-5xl items-center justify-between text-sm ">
        <div className=" bottom-0 left-0 flex h-30 md:h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
            href={siteurl}
            rel="noopener noreferrer"
          >
            <div className="flex flex-col text-center">
              <div className="flex items-center justify-center
              bg-gray-200
              {/*dark:bg-[#0d1117]*/}
              {/*dark:bg-gray-200*/}
              ">
                <Image
                    aria-hidden
                    // src="/apple-touch-icon.png"
                    src="/Cardio_with_slogan_transparent.png"
                    alt="CardioLab icon"
                    width={500}
                    height={500}
                />
              </div>

              {/*<h1 className="text-2xl lgtext-4xl font-semibold" style={{color: 'rgb(106 186 48)'}}>*/}
              {/*  {sitename}*/}
              {/*</h1>*/}
              {/*<p className="text-xl font-xl m-2 text-slate-800 dark:text-slate-100">*/}
              {/*  {sitetagline}*/}
              {/*</p>*/}
            </div>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
