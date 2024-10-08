import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start p-2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#home">HOMEPAGE</a>
            </li>
            <li>
              <a href="#aboutme">ABOUT ME</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contactme">CONTACT ME</a>
            </li>
            <li>
              <a href="#artwork">ARTWORK</a>
            </li>
          </ul>
        </div>
        <div className="dropdown"></div>
        <a
          href="#home"
          className="btn btn-ghost normal-case md:text-5xl text-4xl font-semibold font-mono"
        >
          Rich.io
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-extralight">
          <li>
            <a href="#home">HOMEPAGE</a>
          </li>
          <li>
            <a href="#aboutme">ABOUT ME</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contactme">CONTACT ME</a>
          </li>
          <li>
            <a href="#artwork">ARTWORK</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/1tH8tT1ueMBclmEKFv6ytasD8vAXV7pYU/view?usp=sharing"
          className="btn"
        >
          View Resume
        </a>
      </div>
    </div>
  );
}
