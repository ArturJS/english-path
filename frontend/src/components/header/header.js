import React, { useState } from "react";
import PropTypes from "prop-types";
import useMedia from "use-media";
import { Link } from "gatsby";

function useCollapsibleNav({ selector }) {
  const [isCollapsed, setCollapsed] = useState(true);
  const isTabletOrMobile = useMedia({ maxWidth: 768 });

  function getBaseStyle(isTabletOrMobile) {
    const height = document.querySelector(selector)?.scrollHeight;

    return {
      overflow: "hidden",
      transition: "height ease-in-out 0.25s",
      height: isTabletOrMobile ? `${height}px` : "auto",
    };
  }

  const styleCollapsed = {
    height: "4.5em",
  };
  const navCollapsibleStyle =
    isTabletOrMobile && isCollapsed
      ? { ...getBaseStyle(), ...styleCollapsed }
      : getBaseStyle(isTabletOrMobile);

  function toggleCollapsed() {
    setCollapsed(!isCollapsed);
  }

  return [navCollapsibleStyle, toggleCollapsed];
}

export default function Header({ siteTitle }) {
  const [navCollapsibleStyle, toggleCollapsed] = useCollapsibleNav({
    selector: ".layout-header-nav",
  });

  return (
    <header className="layout-header">
      <nav
        style={navCollapsibleStyle}
        className="layout-header-nav flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <Link to="/">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              {siteTitle}
            </span>
          </div>
        </Link>
        <div className="block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={toggleCollapsed}>
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
          <div className="text-sm md:flex-grow">
            <a className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
              Docs
            </a>
            <a className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
              Examples
            </a>
            <a className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white">
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Sign in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
