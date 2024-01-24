import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

export interface NavLinkProps {
  title: string;
  path: string;
}
const navLinkProps: NavLinkProps[] = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#f7f6f6] bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl text-black font-semibold"
        >
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinkProps.map((navLinkProp, index) => (
              <li key={index}>
                <NavLink
                  title={navLinkProp.title}
                  path={navLinkProp.path}
                ></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
