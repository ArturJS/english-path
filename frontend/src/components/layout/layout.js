/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { createHttpClient } from "mst-gql";
import Header from "~/components/header";
import { RootStore } from "~/models/RootStore";
import { StoreContext } from "~/models/reactUtils";

const rootStore = RootStore.create({}, {
  gqlHttpClient: createHttpClient("http://localhost:3000/graphql")
});

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StoreContext.Provider value={rootStore}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="flex justify-center flex-grow">{children}</main>
      <footer className="text-center bg-indigo-800 text-gray-300 font-semibold py-4">
        English path © {new Date().getFullYear()}
      </footer>
    </StoreContext.Provider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
