"use strict";

function createRedirects({ createRedirect, redirects }) {
  redirects.forEach(redirect => {
    createRedirect(redirect);
  });
}

// see also https://github.com/gatsbyjs/gatsby/blob/master/examples/using-redirects/gatsby-node.js
exports.createPages = ({ actions, graphql }) => {
  const { createRedirect } = actions;

  createRedirects({
    createRedirect,
    redirects: [
      {
        fromPath: `/`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/welcome`,
      },
    ],
  });
};
