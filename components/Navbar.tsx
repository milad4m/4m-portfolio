"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { NavbarProps } from "@/interfaces/NavbarProps";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
const NAV_ITEMS: Array<NavbarProps> = [
  {
    label: "Home",
    page: "home"
  },
  {
    label: "About",
    page: "about"
  },
  {
    label: "Projects",
    page: "projects"
  }
];
const activeStyle: React.CSSProperties = {
  backgroundColor: "rgb(2 132 199 / var(--tw-bg-opacity))",
  borderRadius: "0.25rem",
  padding: "2px 8px",
  color: "rgb(245 245 245 / var(--tw-text-opacity))"
};
const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold cursor-pointer">
                  Milad Shaterhoseini
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center py-3 md:block md:py-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-start justify-center flex flex-col md:flex-row md:items-center md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={`block mt-4 md:mt-0 w-full lg:inline-block text-neutral-900 dark:text-neutral-100 cursor-pointer`}
                    activeClass="active"
                    activeStyle={activeStyle}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl order-first md:order-last"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
