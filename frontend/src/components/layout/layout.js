/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "~/components/header";
import { rootStore, RootStoreContext } from "~/features/store";

function useRootStoreInit() {
  useLayoutEffect(() => {
    rootStore.init();
  }, []);
}

export default function Layout({ children }) {
  useRootStoreInit();

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
    <RootStoreContext.Provider value={rootStore}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="flex justify-center flex-grow">{children}</main>
      <footer className="text-center bg-indigo-800 text-gray-300 font-semibold py-4">
        English path © {new Date().getFullYear()}
      </footer>
    </RootStoreContext.Provider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
