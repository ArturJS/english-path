import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export default function Header({ siteTitle }) {
  return (
    <header id="gatsby-focus-wrapper" className="layout-header">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
